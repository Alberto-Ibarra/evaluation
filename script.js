


const Api = (() => {

    const baseUrl = 'http://localhost:4232'
    const path = "movies"
    
    const getMovies = () => 
        fetch([baseUrl, path].join("/"))
        .then((response) => response.json())
        .then(json => console.log(json))

        return {
            getMovies
        }

    })()




//view

const View = (() => {
    const domstr = {
        movieWrap: "#movie_wrap",
    }

    const render = (ele, tmp) => {
        ele.innerHTML = tmp
    }

    const createTmp = (arr) => {
        let tmp = ""
        arr.forEach((movie) => {
            tmp += 
            `
            <li>
                <img src="${movie.imgUrl}" alt="">${movie.outlineInfo}
            </li>
            `
        })
        return tmp
        
    }

    return {
        render,
        createTmp,
        domstr
    }
})()



//model
const Model = ((api, view) => {
    class Movie {
        constructor(id, imgUrl, name, outlineInfo){
            this.id = id
            this.imgUrl = imgUrl
            this.name = name
            this.outlineInfo = outlineInfo
        }
    }
    class State{
        #movies = []

        get movie(){
            return this.#movies
        }

        set movie(movies) {
            this.#movies = [...movies]

            const movieWrap = document.querySelector(view.domstr.movieWrap)
            const tmp = view.createTmp(this.#movies)
            view.render(movieWrap, tmp)
        }
    }

    const { getMovies } = api

    return {
        getMovies,
        State
    }
})(Api, View)


//controller
const Controller = ((model) => {
    
    const state = new model.State();

    const init = () => {
        model.getMovies().then((movies) => {
            state.movie = [...movies]
        })
    }



    return { 
        init 
    }
})(Model)



