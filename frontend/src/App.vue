<template>
  <div class="screen-main">
      <Navbar :logo="logo_src" :alt="app_name"/>
      <router-view/>
  </div>
</template>

<script>
  import Navbar from "./components/Navbar.vue";

  export default {
      components: {
          Navbar,
  },
  data(){
      return {
          logo_src: "./img/logo.png",
          alt: "Make your site",
      }
  },
  methods: {
    tela(){
      console.log('pronto')
    }
  }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
.screen-main {
  height: 80vh;
}

.screen-master {
  width: 100%;
  margin: 0;
  position: relative;
  height: 100%;
  color: rgb(31, 30, 30);
}
.screen-master h1 {
  color: rgb(46, 46, 82);
}
</style>