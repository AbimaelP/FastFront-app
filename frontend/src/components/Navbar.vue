<template>
    <div>
      <nav>
        <router-link to="/" id="logo-url"><img :src="logo" id="logoImg"></router-link>
        <div class="navbar">
          <div id="navbar-nav">
            <router-link to="/" class="btn">Inicio</router-link>
            <router-link to="/register" class="btn" v-if="!user.validate">Cadastrar-se</router-link>
            <router-link to="/projetos" class="btn" v-if="user.validate">Projetos</router-link>
            <router-link to="/criar-projeto" class="btn" v-if="user.validate">Criar Projeto</router-link>
            <router-link to="/login" class="btn" v-if="!user.validate">Login</router-link>
            <div id="perfil-router" class="btn user-router" @click="perfil()" v-if="user.validate">Perfil</div>
            <div id="config" class="btn user-router" @click="config()" v-if="user.validate">Configurações</div>
            <div id="logout" class="btn user-router" @click="logout()" v-if="user.validate">Sair</div>
          </div>
          <div class="menu" v-if="user.validate">
            <div class="user" id="user" @click="menuShow()"><img src="/img/user.png" width="50"></div>
            <div id="container">
                <div class="user-utilities">
                  <div id="perfil" @click="perfil()">Perfil</div>
                  <div id="config" @click="config()">Configurações</div>
                  <div id="logout" @click="logout()">Sair</div>
                </div>
            </div>
          </div>  
        </div>
        <div class="menu-dropdown" @click="menuDropDown"><img src="../../public/img/menu.png">
        </div>
      </nav>
    </div>   
</template>

<script>
  import axios from 'axios' 

  export default {
    name: "Navbar",
    props: ["logo","alt"],
    data(){
      return {
        authenticated: true,
        user:{validate:false},
      }
    },
    methods:{
       authUser(){
        axios.get('https://6b8c-2804-868-d048-6c9e-f145-c9aa-d90d-4d85.sa.ngrok.io/api/user', {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token') //the token is a variable which holds the token
          }
        }).then((response)=>{
          this.user = response.data
          this.user.validate = true
        }).catch((error)=>{
          console.log(error)
        })
    },
      menuShow(){
        let containerDropBox = document.getElementById('container')
        if(window.getComputedStyle(containerDropBox).display == 'none'){
        containerDropBox.style.display = 'block'
        }else {
          containerDropBox.style.display = 'none'
        }
      },
       menuDropDown(){
        let containerDropBox = document.getElementById('navbar-nav')
        
        if(window.getComputedStyle(containerDropBox).display == 'none'){
        containerDropBox.style.display = 'flex'
        }else {
          containerDropBox.style.display = 'none'
        }
      },
      async logout(){
        await axios.get('http://127.0.0.1:8000/api/logout', {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token') //the token is a variable which holds the token
          }
        })
        window.location.href = '/login'
        localStorage.removeItem('token')
      },
      config(){
        window.location.href = '/config'
      },
      perfil(){
        window.location.href = '/perfil'
      }
    },
    created(){
     this.authUser()
    }

  }
  
</script>

<style scoped>
  nav, .navbar, .btn, #logo, #logo-url, .header_messege {
    z-index: 1;
  }
  nav {
    position: relative;
    font-size: 1.2em; 
    display: flex;
    justify-content: end;
  }

  .navbar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: end;
    width: 600px;
  }
  #navbar-nav {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .btn {
    text-align: center;
    width: 120px;
    line-height: 100px;
    color:#635c81;
    height: 100%;
  }
  
  .btn:hover {
    background-color: rgb(21, 21, 46);
    height: 110%;
    position: relative;
    color: #cbce50;
  }
  #logo-url {
    margin: auto;
    padding: 5px;
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 5px;
    width: 255px;
  }
  #logoImg {
    width: 100%;
  }
  .user {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 40px;
    margin-right: 40px;
  }
  .user img{
    width: 35px;
    margin-bottom: 10px;
  }
  .menu {
    position: relative;
  }
  .menu:hover {
    cursor: pointer;
    align-items: center;
  }
  .menu #container {
    display: none;
    position: absolute;
    background-color: #2c3642;
    right: 50px;
    color: #ffff;
    text-align: center;
    border-radius: 5px;
    height: 260px;
    width: 140px;
  }
  .user-utilities {
    height: 100%;
  }
  .menu .user-utilities div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 33%;
  }
  .user-utilities div:hover {
    background-color: #5c6b7e;
  }
  #user-name {
    margin-right: 5px;
  }
  .menu-dropdown {
    display: none;
  }
  .menu-dropdown:hover {
    cursor: pointer;
  }
  /**/
  @media (max-width:860px){

    .navbar {
      position: absolute;
      margin-top: 55px;
      flex-direction: column;
      width: auto;
    }
    #navbar-nav {
      background-color: #5c6b7e;
      margin-right: 25px;
      flex-direction: column;
      display: none;
    }
    .btn {
      color: #fff;
    }

    .menu-dropdown {
      padding-left: 2px;
      padding-right: 2px;
      margin-right: 40px;
      display: block;
    }
    .menu {
      display: none;
    }
  }
  @media (min-width: 861px){
    .user-router {
      display: none;
    }
  }
</style>
