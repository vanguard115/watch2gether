<template>
  <div>
    
   <div id="nav">
      <Header/>
    </div>
    <b-container>
      <router-view/>
    </b-container>
  </div>

</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'App',

  components: {
    Header,
  },

  data: () => ({
    //
  }),
};
</script>
