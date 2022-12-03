<template>
    <div class="screen-master">
        <div class="screen">
            <div class="container">
                <div class="content">
                    <h2>Nome: {{user.name}}</h2>
                    <h2>Email: {{user.email}}</h2>
                    <ButtonDefault @click="configRedirect()" id="button-component"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import ButtonDefault from '../components/ButtonDefault.vue'

export default {
  name:'UserPerfilView',
  components:{
    ButtonDefault
},
  data(){
    return {
        user:{validate:false}
    }
  },
  mounted(){
    this.authUser(),
    this.buttonComponent()
  },
  methods: {
    async authUser(){
        let response = await axios.get('http://127.0.0.1:8000/api/user', {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token') //the token is a variable which holds the token
          }
        })
        this.user = response.data
        console.log(this.user)
  },
    configRedirect(){
        window.location.href = '/config'
    },
    buttonComponent(){
        const buttonComponent = document.getElementById('button-component')
        buttonComponent.innerText = 'Mudar'
    }
}
}
</script>

<style scoped>
    .screen {
        text-align: center;
        display: flex;
        justify-content: center;
    }
    .container {
        margin-top: 20px;
    }
    .container h2 {
        margin-top: 50px;
    }
</style>
