

    const baseUrl = 'http://localhost:4232'
    const path = "movies"
    

        fetch([baseUrl, path].join("/"))
        .then((response) => response.json())
        .then(json => {
            console.log(json);
            showData(json)
        })


    const showData = (id) => {
        const movieUl = document.querySelector('.movie_wrap')
        let template = ""; //li template
        id // represents item
          .sort((a, b) => b.id - a.id) // compare function a n b/ ids below in delete function
            .forEach((movie) => {
            template +=  `
            <li>
                <img src="${movie.imgUrl}" alt="">
                <p>${movie.name}</p>
                <p>${movie.outlineInfo}</p>
            </li>
            `; //// add edit function to update the text patch or put
            });
    
        movieUl.innerHTML = template;
    }






