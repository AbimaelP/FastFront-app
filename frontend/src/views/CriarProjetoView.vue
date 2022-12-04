<template>
  <div class="screen-master">
    <div class="container-master">
      <div class="container">
        <select id="dispositivo">
          <option value="0">Selecione o Dispositivo</option>
          <option value="1" class="smart-size-none">Desktop</option>
          <option value="2">Smartphone</option>
          <option value="3" class="smart-size-none">Tablet</option>
        </select>
        <button v-on:click="screenSelect()" class="btn-screen-select">Escolher</button>
      </div>
      <div class="container">
          <div id="tela">
            <UserWebPagePreview/>
          </div>
      </div>
    </div>
    <scroll-container id="hidden">
    <div id="user_style_desktop">
      Texto do logo <input type="text" id="logo-txt" class="input-text"><button v-on:click="logoText()">Mudar</button><br>
      Imagem do logo <input type="text" id="image-logo"><button v-on:click="logoImage()">Mudar</button><br>
      Tamanho do logo <input type="range" min="40" max="150" id="logo-input-size" v-on:change="logoSize()"><br>
      Cor do cabeçario <input type="color" id="hdr-color" v-on:change="headerColor()"><br><br>

      Fundo da pagina:<br>Cor <input type="color" id="bg-color" v-on:change="bgPage()"><br>
      Imagem de fundo<input type="text" id="bg-image" placeholder="Cole o link da imagem"> <button v-on:click="bgPage()">Escolher</button><br>
      Incluir botão para contato? <input type="checkbox" v-on:click="contactButton()"><br>

      Titulo <input type="text" placeholder="Digite seu nome, ou o da sua empresa" id="title"> <button @click="setTitle()">Escolher</button><br>
      Profissão <input type="text" placeholder="Com o que você trabalha" id="work"> <button @click="setWork()">Escolher</button><br>
      Logotipo <input type="text" placeholder="Cole o link do seu logotipo" id="logotype"> <button @click="setLogotype()">Escolher</button><br>
      Imagem de fundo da sessão <input type="text" placeholder="Cole um link de imagem" id="session-img"> <button @click="setSessionImg()">Escolher</button><br>
      
      Sua foto <input type="text" placeholder="Cole o link da sua foto" id="perfil-image"> <button @click="setPerfilImg()">Escolher</button><br>
      Frase de apresentação <button @click="setPerfilText()">Escolher</button><br><textarea id="perfil-text" cols="30" rows="4"></textarea><br>
      Notas do autor <input type="text" id="note"> <button @click="setNote()">Escolher</button><br>
      Link do Portfolio <input type="text" placeholder="Cole o link aqui" id="link-portf"> <button @click="setLinkPortf()">Escolher</button><br>
      Rede Social <input type="text" placeholder="Cole o link aqui" id="social"> <button @click="setLinkSocial()">Escolher</button>
    </div>
    </scroll-container>
    <button id="dropdown-left" @click="hiddenOpt()">Exibir</button>
    <div id="bd-save" >
      <button type="button" @click="createProject">Salvar</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import UserWebPagePreview from '../components/UserWebPagePreview.vue'
export default {
  name: 'CriarProjetoView',
  components: {
    UserWebPagePreview
  },
  data(){
    return {
      page:{},
      user:{},
      items:{}
    }
  },
  mounted(){
    this.authUser()
  },
  methods: {
    authUser(){
        axios.get('https://6b8c-2804-868-d048-6c9e-f145-c9aa-d90d-4d85.sa.ngrok.io/api/user', {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token') //the token is a variable which holds the token
          }
        }).then((response)=>{
          this.user = response.data
        }).catch((error)=>{
          console.log(error)
        })
    },
    createProject(){
      this.items.page = this.page
      this.items.id = this.user.id

      axios.post(`${process.env.VUE_APP_URL}api/create-project`,this.items,{headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token') //the token is a variable which holds the token
            }}).then((response)=>{
                console.log(response.data)
                window.location.href = '/projetos'
           })
           .catch((error)=>{
            console.log(error)
           })
    },
    screenSelect(){
      let screenType = document.getElementById('dispositivo').value
      let tela = document.getElementById('tela')
      tela.style.display = 'flex'
      if(screenType == 1){
        tela.style.width = '1350px'
        tela.style.minHeight = '720px'
      }else if (screenType == 2){
        tela.style.width = '360px'
        tela.style.minHeight = '740px'
      }else if (screenType == 3){
        tela.style.width = '800px'
        tela.style.minHeight = '1280px'
      }
    },

    //
    logoSize(){
      let logoInputSize = document.getElementById('logo-input-size').value
      let logo = document.getElementById('logo')
      this.page.logoSize = (logoInputSize - (logoInputSize/2)) + "px"
      logo.style.fontSize = (logoInputSize - (logoInputSize/2)) + "px"
    },
    headerColor(){
      let hdrColor = document.getElementById('hdr-color').value
      let header = document.getElementById('header')
      this.page.headerColor = hdrColor
      header.style.backgroundColor = hdrColor
    },
    logoText(){
      let textoLogo = document.getElementById('logo-txt').value
      let logo = document.getElementById('logo')
      logo.style.width = '100%'
      this.page.logoText = textoLogo
      logo.innerText = textoLogo
    },
    logoImage(){
      let imageLogo = document.getElementById('image-logo').value
      let logo = document.getElementById('logo')
      this.page.imageLogo = imageLogo
      let imgElement = document.createElement('img')
      logo.appendChild(imgElement)
      imgElement.src = imageLogo
      imgElement.style.width = '100%'
    },
    bgPage(){
      let bgColor = document.getElementById('bg-color').value
      let bgImage = document.getElementById('bg-image').value
      let desktop = document.getElementById('desktop')
      this.page.bgPageColor = bgColor
      this.page.bgPageImg = `url(${bgImage})`
      desktop.style.backgroundColor = bgColor
      desktop.style.backgroundImage = `url(${bgImage})`
    },
    contactButton(){
      let element = document.getElementById('contact')
      if(window.getComputedStyle(element).display == 'none'){
        this.page.btnContact = 'list-item'
        element.style.display = 'list-item'
      }else {
        this.page.btnContact = 'none'
        element.style.display = 'none'
      }
    },
    setTitle(){
      let title = document.getElementById('title').value
      let titleElement = document.getElementById('title-element')
      titleElement.innerText = title
      this.page.title = title
    },
    setWork(){
      let work = document.getElementById('work').value
      let workElement = document.getElementById('work-element')
      workElement.innerText = work
      this.page.work = work
    },
    setLogotype(){
      let logotype = document.getElementById('logotype').value
      let logotypeElement = document.getElementById('logotype-element')
      let logotypeContainer = document.getElementById('logotype-container')
      this.page.logotype = logotype
      logotypeContainer.style.display = 'none'
      logotypeElement.style.width = '200px'
      logotypeElement.src = logotype
    },
    setSessionImg(){
      let sessionImg = document.getElementById('session-img').value
      let sessionImgElement = document.getElementById('session-img-element')
      this.page.sessionImg = sessionImg
      sessionImgElement.style.backgroundImage = `URL(${sessionImg})`
    },
    setPerfilText(){
      let perfilText = document.getElementById('perfil-text').value
      let perfilTextElement = document.getElementById('perfil-text-element')
      this.page.perfilText = perfilText
      perfilTextElement.innerText = perfilText
    },
    setPerfilImg(){
      let perfilImage = document.getElementById('perfil-image').value
      let perfilElement = document.getElementById('perfil-image-element')

      this.page.perfilImage = perfilImage
      perfilElement.src = perfilImage
    },
    setNote() {
      let note = document.getElementById('note').value
      let noteElement = document.getElementById('note-element')

      this.page.note = note
      noteElement.innerText = note
    },
    setLinkPortf(){
      let linkPortf = document.getElementById('link-portf').value
      let linkPortfElement = document.getElementById('link-portf-element')

      this.page.linkPortf = linkPortf
      linkPortfElement.href = linkPortf
    },
    setLinkSocial(){
      let social = document.getElementById('social').value
      let socialElement = document.getElementById('social-element')

      this.page.social = social
      socialElement.href = social
    },
    hiddenOpt(){
      let hidden = document.getElementById('hidden')
      if(window.getComputedStyle(hidden).display == 'block'){
        hidden.style.display = 'none'
      }else {
        hidden.style.display = 'block'
      }
    }
  }
}

</script>
<style scoped>
  /*------- Estilo dos botoes de config do user--------*/
  scroll-container {
    display: block;
    width: 250px;
    height: 600px;
    top: 5%;
    left: 40px;
    overflow: hidden;
    position: absolute;
    overflow-y: scroll;
    scroll-behavior: smooth;
  }
  scroll-container::-webkit-scrollbar {
  width: 12px;              
}
#dropdown-left {
  position: absolute;
  top: 40px;
  left: 3px;
  height: 600px;
  color: rgb(250, 221, 168);
  background-color: rgb(37, 37, 73);
  border: 2px solid rgb(37, 37, 73);;
}

scroll-container::-webkit-scrollbar-track {
  background: rgb(37, 37, 73);       
  border-bottom-right-radius: 5px;
}

scroll-container::-webkit-scrollbar-thumb {
  background-color: rgb(45, 45, 53);    
  border-radius: 20px;      
  border: none;  
}
  #user_style_desktop {
    color: rgb(241, 217, 164);
    padding: 10px;
    border-radius: 5px;
    background-color: #1a1a1a;
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
  }
  #user_style_desktop button,.btn-screen-select{
    padding-left: 5px;
    border: none;
    height: 25px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    font-size: 13px;
    font-family:Arial, Helvetica, sans-serif;
    color: rgb(250, 221, 168);
    background-color: rgb(37, 37, 73);
    cursor: pointer;
  }
  #user_style_desktop button:hover {
    color: #cbce50;
    background-color: rgb(22, 22, 39);
  }
  #user_style_desktop button:focus {
    color: #d49e28;
    background-color: rgb(41, 41, 49);
    transition-duration: 1s;
  }
  #dropdown-left:hover {
    cursor: pointer;
    color: #cbce50;
    background-color: rgb(22, 22, 39);
  }
  #dropdown-left:focus {
    color: #d49e28;
    background-color: rgb(41, 41, 49);
    transition-duration: 1s;
  }
  input::placeholder {
    color: rgb(145, 145, 145);
  }
  #dispositivo {
    background-color: rgb(41, 41, 49);
    color: #fff;
  }
  #user_style_desktop input {
      height: 25px;
      background: rgb(45, 45, 53);
      text-indent: 5px;
      border: none;
      text-align: center;
      color: #9e97be;
  }
  .screen-master {
    display: flex;
    justify-content: center;
  }
  .container-master {
    margin-top: 20px;
  }
  .container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
  #tela {
    zoom: 50%;
    border-radius: 8px;
    background-color: aquamarine;
    display: none;
    justify-content: center;
    align-items: center;
  }
  #bd-save {
    position: absolute;
    display: block;
    bottom: 0;
    margin: 0 30%;
  }
  #bd-save button {
    width: 110px;
    height: 40px;
    border: none;
    font-size: 18px;
    font-family:Calibri, 'Trebuchet MS', sans-serif;
    border-radius: 8px;
    color: rgb(250, 221, 168);
    background-color: rgb(37, 37, 73);
  }
  #bd-save button:hover {
    color: #cbce50;
    cursor: pointer;
    background-color: rgb(40, 40, 148);
  }

  @media(max-width: 760px){
    .smart-size-none {
      display: none;
    }
    scroll-container {
      width: 170px;
    }
  }
</style>
