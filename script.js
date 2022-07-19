const baseUrl = "http://localhost:4232";
const path = "movies";

fetch([baseUrl, path].join("/"))
    .then((response) => response.json())
    .then((json) => {
    console.log(json);
    allMovie(json);
    });

const allMovie = (id) => {
    const movieUl = document.querySelector(".movie_wrap");
    let template = "";
    id.forEach((movie) => {
    template += `
            <li>
                <img src="${movie.imgUrl}" alt="">
                <p>${movie.name}</p>
                <p>${movie.outlineInfo}</p>
            </li>
            `;
    });

    movieUl.innerHTML = template;
};

function scroll() {
    const ul = document.querySelector(".movie_wrap");
    let scrollAmount = 4;
    let scrollMin = 0;
    let scrollMax = 300;


    document.querySelector(".btn1").onclick = function () {

    ul.scrollTo({
        left: Math.max((scrollAmount += 1000), scrollMax),
        behavior: "smooth",
    });
    };

    document.querySelector(".btn2").onclick = function () {
    ul.scrollTo({
        left: Math.min((scrollAmount -= 1000), scrollMin),
        behavior: "smooth",
    });
};
}
scroll();
