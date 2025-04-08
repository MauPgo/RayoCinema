var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 15,
        stretch: 0,
        depth:300,
        modifier:1,
        slideShadows: true
    },
    loop: true,
});

document.addEventListener('DOMContentLoaded', () => {

    const topMovies = [
        {
            id: 1,
            imagen: "images/1.jpg",
        },
        {
            id: 2,
            imagen: "images/2.jpg",
        },
        {
            id: 3,
            imagen: "images/3.jpg",
        },
        {
            id: 4,
            imagen: "images/4.jpg",
        },
        {
            id: 5,
            imagen: "images/5.jpg",
        },
        {
            id: 6,
            imagen: "images/6.jpg",
        },
        {
            id: 7,
            imagen: "images/7.jpg",
        },
        {
            id: 8,
            imagen: "images/8.jpg",
        },
    ];

    const esTopmovie = window.location.pathname.includes("principal.html")

    if (esTopmovie)  {
        loadPelicula(topMovies);
    }

    function loadPelicula(lista) {
        const contenedor = document.querySelector("#listaPeliculas");
        if(!contenedor) return;

        contenedor.innerHTML = "";

        lista.forEach(pelicula => {
            const card = createMovieCard(pelicula);
            contenedor.appendChild(card);
        });
    }

    function createMovieCard(pelicula){
        const slide = document.createElement("div");
        slide.className = "swiper-slide";
        slide.innerHTML = `
                    <div class="swiper-slide">
                        <img src="${pelicula.imagen}" alt="">
                    </div>
                    `;
        return slide;
    }
})

