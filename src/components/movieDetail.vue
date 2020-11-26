<template>
        <div v-if="this.original_title">
                <b-img v-bind:src="this.poster_path" fluid alt="Responsive image" height="50px"></b-img>
        </div>
</template>

<script>
export default {
    data () {
       return{
           id: this.$route.params.id,
           original_title: "",
           poster_path: "",

       }
    },

    methods: {
      
    },

    mounted () {
        console.log("Running...")
     
        const reqURL = "https://api.themoviedb.org/3/movie/" + this.id  + "?api_key=6042734eb2d75c2d6f32707cd3cc129c&language=en-US"
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
             this.overview = jsonData.overview
             this.popularity = jsonData.popularity
             this.poster_path = "https://image.tmdb.org/t/p/w400/" + jsonData.poster_path
             this.original_title = jsonData.original_title
        })
    }
}
</script>

<style>
.image { 
   position: relative; 
   width: 100%; /* for IE 6 */
}

h2 { 
   position: absolute; 
   top: 200px; 
   left: 0; 
   width: 100%; 
}
</style>