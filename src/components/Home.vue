<template>
    <div>
         <b-jumbotron header="Search" lead="find movies you like, we'll add it to your list.">
             <div class="input-group">
                <input v-model="searchData" type="text" class="form-control" placeholder="Title, Genre, Mood etc.." @keyup.enter="search(searchData)">
                <span class="input-group-btn">
                    <!-- <button @click="search(searchData)"  type="button" class="btn btn-primary" v-show="searchData.length > 0" >
                        Let's Go            
                    </button> -->
                </span>
            </div>
         </b-jumbotron>
    </div>
</template>

<style>

</style>
<script>
export default {

    data() {
       return {
           searchData: ""
       }
    },

    methods: {
        search: function(searchData){
            console.log(searchData)
            this.$router.push({ path: `/Movies/${searchData}` })
        }
    },

    computed: {
        // isDisable() {
        //     return this.searchData > 0
        // }
    }
}
</script>