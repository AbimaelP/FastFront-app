<template>
    <div class="screen-master">
        <div class="screen">
                <div class="content">
                    <div class="form">
                            <div class="login_container frame3">
                            
                            <input type="text" placeholder="Digite um novo nome" name="name" id="input_name" v-model="formData.name">
                            <input type="text" placeholder="Confirme seu email" name="email" id="input_email" v-model="formData.email">
                            <ButtonDefault @click="edit" id="button-component"/>
                           
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import ButtonDefault from '../components/ButtonDefault.vue'
import axios from 'axios'

export default {
    name: 'Config',
    components:{
        ButtonDefault
    },
    data(){
        return {
            formData:{},
            message: {
                error:false,
                sucess:false,
            }
        }
    },
    mounted(){
        this.buttonComponent()
    },
    methods: {
        edit() {
           axios.post(`${process.env.VUE_APP_URL}api/edit`,this.formData,{headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token') //the token is a variable which holds the token
            }}).then((response)=>{
                console.log(response.data)
                window.location.href = '/projetos'
           })
           .catch((error)=>{
            console.log(error)
           })
        },
        buttonComponent(){
        const buttonComponent = document.getElementById('button-component')
        buttonComponent.innerText = 'Editar'
    }
    }
}
</script>

<style scoped>
    @keyframes frame3 {
    0%{left: -120%;}
    110%{left: 26%;}
    }
    .screen-master {
        display: flex;
        align-items: center;
        position: relative;
        bottom: 20%;
    }
    .screen {
        display: flex;
    }
    .content {
        position: absolute;
        left: 20%;
        right: 20%;
        display: flex;
        justify-content: center;
    }
    .frame3 {   
        top: 35%;
        animation: frame3 1s;
    }
    .login_container input {
        background: rgb(21, 21, 46);
        text-indent: 5px;
        font-size: 25px;
        margin-top: 15px;
        margin-left: 10px;
        height: 50px;
        width: 80%;
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
</style>