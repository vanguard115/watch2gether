<template>
    <div>       
        <h1>Movies</h1>
          <MovieCard
          :movie= moviesList[0]
          />
    </div>
</template>

<script>

import MovieCard from './MovieCard'

export default {
    components: {
        MovieCard
    },

    data () {
        return {
            moviesList: [],
            currentPage: 0,
            totalPage: 0,    
            totalResult: 0,
            errored: false,
            testDet: [
                {
                    mtitle: this.moviesList,
                    moverview: String,
                    mrating: Number
                }
                
            ]    
        }
    },

    methods: {
        getTheMovieDB (searchQuery) {
            console.log("Searching for " + searchQuery)
            const reqURL = "https://api.themoviedb.org/3/search/movie?api_key=<<API KEY>>&language=en-US&page=1&include_adult=true&query=" +  searchQuery
            console.log(reqURL)


             fetch(reqURL, {
                method:'get'
             })

            .then((Response) => {           
            // console.log("Debug::" + Response.json())
            return Response.json()
            })

            .catch(error => {
                console.log(error)
                this.errored = true
            })

             .then((jsonData) => {
             this.moviesList = jsonData.results
             this.currentPage = jsonData.page
             this.totalPage = jsonData.total_pages
             this.totalResult = jsonData.total_results
             })

         }
    },


    mounted () {
        console.log("Started Movies") 
        const searchQuery = this.$route.params.searchQuery
        if(searchQuery != "" && searchQuery != null && searchQuery != "null") {
        this.getTheMovieDB(searchQuery)
        } else {
            console.log("search empty")
        }
    }
}
</script>