document.addEventListener("DOMContentLoaded", function () {
    const contenedor = document.getElementById("contenedor");

    const peliculas = [
        {
            id: 2,
            titulo: "COBRA KAI",
            imagen: "images/cobra.webp",
            calificacion: 4.8,
            descripcion: "Una saga mágica de aventuras en Hogwarts"
        },
        {
            id: 4,
            titulo: "ORANGE",
            imagen: "images/orange.webp",
            calificacion: 3.5,
            descripcion: "Una saga mágica de aventuras en Hogwarts"
        },
        {
            id: 6,
            titulo: "YOU",
            imagen: "images/you.jpeg",
            calificacion: 3.0,
            descripcion: "Una saga mágica de aventuras en Hogwarts"
        },
        {
            id: 8,
            titulo: "BRIDGERTON",
            imagen: "images/bridgerton.jpeg",
            calificacion: 4.5,
            descripcion: "Una saga mágica de aventuras en Hogwarts"
        },
        {
            id: 10,
            titulo: "CROWN",
            imagen: "images/crown.avif",
            calificacion: 4.2,
            descripcion: "Una saga mágica de aventuras en Hogwarts"
        },
        {
            id: 12,
            titulo: "DAHMER",
            imagen: "images/dhamer.avif",
            calificacion: 4.2,
            descripcion: "Una saga mágica de aventuras en Hogwarts"
        }
    ];

    peliculas.forEach((pelicula) => {
        const col = document.createElement("div");
        col.className = "col";
        col.innerHTML = `
                <div class="card h-100">
                    <img src="${pelicula.imagen}" class="card-img-top" alt="${pelicula.titulo}">
                    <div class="card-body">
                        <h5 class="card-title text-center">${pelicula.titulo}<h5>
                        <h4 class="text-center"><i class="fas fa-star text-warning"></i>${pelicula.calificacion}</h4>
                        <br>
                    <div class="text-center">
                        <button class="btn btn-primary">Ver</button>
                    </div>
                </div>
            </div>
        `;

        const botonVer = col.querySelector("button");
        botonVer.addEventListener("click", () => {
            window.location.href = `detalle.html?id=${pelicula.id}`;
        });

        contenedor.appendChild(col);
    })

});