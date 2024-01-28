<template>
    <div class="screen-master">
        <div class="frame1"><h1>Bem vindo</h1></div>
        <div class="frame2"><h2>Faça login ou crie sua conta</h2></div>
        <div class="login_container frame3">
            <form>
                <input type="text" placeholder="Digite seu email" name="email" id="input_email" v-model="formData.email">
                <input type="password" placeholder="Digite sua senha" name="password" id="input_password" v-model="formData.password">
                <ButtonDefault @click="login" id="button-component" type="button"/>
            </form>
        </div>
        <div v-if="error.validate" class="error"><h2>{{error.message}}</h2></div>
    </div>

</template>
<script>
import axios from 'axios'
import ButtonDefault from '../components/ButtonDefault.vue'

export default {
    name: 'LoginScreen',
    components:{
        ButtonDefault
    },
    data(){
        return {
            formData:{},
            error: {
                validate:false,
                message:'',
            }
        }
    },
    mounted(){
        this.buttonComponent()
    },
    methods: {
        login() {
           axios.post(`${process.env.VUE_APP_URL}/login`,this.formData).then((response)=>{
            localStorage.setItem('token',response.data.token)
            this.error.validate = false
            window.location.href = '/projetos'
           })
           .catch((error)=>{
            this.error.validate = true
            this.error.message = error.response.data.message
           })
        },
        buttonComponent(){
        const buttonComponent = document.getElementById('button-component')
        buttonComponent.innerText = 'Login'
    }
    }
}
</script>

<style scoped>
@keyframes frame1 {
   0%{left: -120%;}
   30%{left: 30%;}
}
@keyframes frame2 {
   0%{left: -120%;}
   70%{left: 27%;}
}
@keyframes frame3 {
   0%{left: -120%;}
   110%{left: 26%;}
}
    .screen-master {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .screen-master div {
        position: absolute;
    }
    .frame1 {
        font-size: 1.8em;
        color: #cbce50;
        top: 20%;
        animation: frame1 1s;
    }
    .frame2 {
        font-size: 1.1em;
        color: #5a4a5c;
        top: 30%;
        animation: frame2 1s;
    }
    .frame3 {   
        top: 35%;
        animation: frame3 1s;
    }
    .login_container {
        display: flex;
        justify-content: center;
    }
    .login_container form {
        width: 355px;
        display: flex;
        justify-content: center;
    }
    .login_container #input_email {
        position: absolute;
        top: 55px;
    }
    .login_container #input_password {
        position: absolute;
        top: 110px;
    }
    .login_container input {
        background: rgb(21, 21, 46);
        text-indent: 5px;
        font-size: 25px;
        margin-top: 15px;
        margin-left: 10px;
        height: 50px;
        width: 100%;
        border-radius: 15px;
        border: none;
        text-align: center;
        color: #9e97be;
    }
    input::placeholder {
        color: #635c81;
    }
    #button-component {
        position: absolute;
        top: 235px;
    }
    .error {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 10%;
        color: rgb(143, 40, 40);
        background-color: rgb(251, 170, 170);
        width: 100%;
        height: 50px;
    }
</style>
