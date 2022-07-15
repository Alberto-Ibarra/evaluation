
const Api = (() => {
    const baseUrl = 'http://localhost:3000'
    const path = "movies"
    
    const getMovies = () => {
        fetch([baseUrl, path].join("/"))
        .then(response => response.json())
        .then(json => console.log(json))
        console.log(123);
    }
        return {
            getMovies
        }

    })()