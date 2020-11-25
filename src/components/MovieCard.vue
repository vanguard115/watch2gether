<template>
    <!-- To make sure component does notload before the data loads -->
    <div v-if="this.movie"> 

  <b-card 
    :title= movie.title   
    tag="article"
    style="max-width: 25rem;"
    class="mb-2 moviecard"
    @click="expandMovie()"
  >
    <b-card-text>
      <br>
     Rating :: "{{ movie.popularity }}"
     <br><br>
     Overview :: "{{ movie.overview }}"
     <br> <br>
     <b-button >View More</b-button>
    </b-card-text>
  </b-card> 
  

</div>
</template>

<script>
export default {
    props: {
        movie: Object
    },

    data () {
      return {
         
      }
     
    },

    methods: {
      expandMovie() {
        console.log("Searching for " + this.movie.id)
        

      }
    }
}
</script>

<style>

  #moviecard {
    padding: 10px;
  } 

</style>