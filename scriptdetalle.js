document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));

    const peliculas = [
        {
            id: 1,
            titulo: "HARRY POTTER",
            imagen: "images/hp.webp",
            calificacion: 4.5,
            descripcion: "Una saga mágica de aventuras en Hogwarts"
        },
        {
            id: 2,
            titulo: "COBRA KAI",
            imagen: "images/cobra.webp",
            calificacion: 4.8,
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
            id: 4,
            titulo: "ORANGE",
            imagen: "images/orange.webp",
            calificacion: 3.5,
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
            id: 6,
            titulo: "YOU",
            imagen: "images/you.jpeg",
            calificacion: 3.0,
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
            id: 8,
            titulo: "BRIDGERTON",
            imagen: "images/bridgerton.jpeg",
            calificacion: 4.5,
            descripcion: "Una saga mágica de aventuras en Hogwarts"
        },
        {
            id: 9,
            titulo: "AVENGERS",
            imagen: "images/.webp",
            calificacion: 4.2,
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
            id: 11,
            titulo: "COMO ENTRENAR A TU DRAGON",
            imagen: "images/dragon.webp",
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

    const pelicula = peliculas.find(p => p.id === id);

    const detalleContenedor = document.getElementById("peliculaDetalle");

    if (pelicula && detalleContenedor) {
        detalleContenedor.innerHTML = `
            <div class="card mx-auto" style="max-width: 600px;">
                <img src="${pelicula.imagen}" class="card-img-top" alt="${pelicula.titulo}">
                <div class="card-body">
                    <h2 class="card-title text-center">${pelicula.titulo}</h2>
                    <p class="card-text text-center">${pelicula.descripcion}</p>
                    <h4 class="text-center"><i class="fas fa-star text-warning"></i>${pelicula.calificacion}</h4>
                </div>
            </div>
        `;
    }

    const recomendadas = peliculas.filter(p => p.id !== id).slice(0, 4);
    const recomendadasContenedor = document.getElementById("peliculasRecomendadas");

    recomendadas.forEach(p => {
        const div = document.createElement("div");
        div.className = "col";
        div.innerHTML = `
            <div class="card h-100">
                <img src="${p.imagen}" class="card-img-top" alt="${p.titulo}">
                <div class="card-body">
                    <h5 class="card-title">${p.titulo}</h5>
                    <p class="card-text text-center"><i class="fas fa-star text-warning"></i>${p.calificacion}</p>
                    <a href="detalle.html?id=${p.id}" class="btn btn-sm btn-outline-primary d-block mx-auto">Ver</a>
                </div>
            </div>
        `;
        recomendadasContenedor.appendChild(div);
    });
})