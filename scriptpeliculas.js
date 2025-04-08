document.addEventListener("DOMContentLoaded", function () {
    const contenedor = document.getElementById("contenedor");

    const peliculas = [
        {
            id: 1,
            titulo: "HARRY POTTER",
            imagen: "images/hp.webp",
            calificacion: 4.5,
            descripcion: "Una saga mágica de aventuras en Hogwarts"
        },
        {
            id: 3,
            titulo: "TOP GUN",
            imagen: "images/topgun.jpg",
            calificacion: 5.0,
            descripcion: "Una saga mágica de aventuras en Hogwarts"
        },
        {
            id: 5,
            titulo: "CARS",
            imagen: "images/cars.webp",
            calificacion: 4.0,
            descripcion: "Una saga mágica de aventuras en Hogwarts"
        },
        {
            id: 7,
            titulo: "MINECRAFT",
            imagen: "images/minecraft.avif",
            calificacion: 5.0,
            descripcion: "Una saga mágica de aventuras en Hogwarts"
        },
        {
            id: 9,
            titulo: "AVENGERS",
            imagen: "images/avengers.webp",
            calificacion: 4.2,
            descripcion: "Una saga mágica de aventuras en Hogwarts"
        },
        {
            id: 8,
            titulo: "COMO ENTRENAR A TU DRAGON",
            imagen: "images/dragon.webp",
            calificacion: 4.2,
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