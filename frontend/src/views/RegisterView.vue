<template>
    <div class="screen-master">
        <div class="frame1"><h1>Bem vindo</h1></div>
        <div class="frame2"><h2>Faça login ou crie sua conta</h2></div>
        <div class="login_container frame3">
            <form>
                <input type="text" placeholder="Digite seu nome" name="name" id="input_name" v-model="formData.name">
                <input type="text" placeholder="Digite seu email" name="email" id="input_email" v-model="formData.email">
                <input type="password" placeholder="Digite sua senha" name="password" id="input_password" v-model="formData.password">
                <input type="password" placeholder="Digite a senha novamente" name="password_confirmation" id="input_password_confirmation" v-model="formData.password_confirmation">
                <button type="button" @click="registerUser">&lt; Cadastrar /&gt;</button>
            </form>
           
        </div>
        <div v-if="error.validate" class="error"><h2>{{error.message}}</h2></div>
   </div>
</template>
<script>
import axios from 'axios'

export default {
    name: 'LoginScreen',
    data(){
        return {
            formData:{},
            error: {
                validate:false,
                message:'',
            }
        }
    },
    methods: {
        registerUser() {
           axios.post(`${process.env.VUE_APP_URL}/register`,this.formData).then((response)=>{
            this.error.validate = false
            window.location.href = '/login'
           })
           .catch((error)=>{
            this.error.validate = true
            this.error.message = error.response.data.message
           })
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
    .login_container #input_name {
        position: absolute;
    }
    .login_container #input_email {
        position: absolute;
        top: 55px;
    }
    .login_container #input_password {
        position: absolute;
        top: 110px;
    }
    .login_container #input_password_confirmation {
        position: absolute;
        top: 165px;
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
    .login_container button {
        width: 110px;
        height: 40px;
        border: none;
        font-size: 18px;
        font-family:Calibri, 'Trebuchet MS', sans-serif;
        position: absolute;
        top: 235px;
        border-radius: 8px;
        color: rgb(250, 221, 168);
        background-color: rgb(37, 37, 73);
    }
    .login_container button:hover {
        color: #cbce50;
        background-color: rgb(40, 40, 148);
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
