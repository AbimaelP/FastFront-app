<template>
  <div class="screen-master">
    <h1 class="hdefaults">Projetos</h1>
    <div class="container">
      <div class="project_container color1_default" v-for="(item, i) in pages" :key="i">
        <div class="project_image_screen">
          <img :src="item.page.sessionImg"/>
        </div>
        <div class="project_title_screen">
          <h2>{{ item.page.logoText }}</h2>
        </div>
        <div class="button-group">
          <button @click="downloadPage(item.page)">Baixar</button>
          <button type="button" @click="destroy(item.id)">Excluir</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  
  export default {
    name: "ProjectShow",
    data() {
      return {
        projectName: "Curso de Js",
        date: "17/08/2022",
        pathImage:
          "https://th.bing.com/th/id/R.3d687ca3fdd60516e8dae8c472f9bdfa?rik=KnNc8xSOnMTO1w&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fwp1828925.png&ehk=qQXWl7C3VgQiP3Dsfrxvpw8ikCsSrTyDj39wVBEDkaY%3d&risl=&pid=ImgRaw&r=0",
  
        pages: [],
      };
    },
    mounted() {
      this.authUser();
    },
    methods: {
      authUser() {
        axios
          .get(`${process.env.VUE_APP_URL}api/project`, {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"), //the token is a variable which holds the token
            },
          })
          .then((response) => {
            this.pages = response.data;
            console.log(this.pages);
          })
          .catch((error) => {
            console.log(error);
          });
      },
      destroy(id) {
        axios
          .delete(`${process.env.VUE_APP_URL}api/delete-project/${id}`, {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"), //the token is a variable which holds the token
            },
          })
          .then((response) => {
            window.location.href = "/projetos";
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      },
      downloadPage(data) {
        console.log(data);
        let blobParts = [
          `<!DOCTYPE html><html><head><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"><style>#perfil-text-element {text-align:justify;width:270px;}* {list-style-type: none;background-color: none;margin:0;padding:0;} *{color:black;font-family:'Roboto'}#desktop {width: 100%;min-height: 720px;position: relative;background-color:${data.bgPageColor};background-image:${data.bgPageImg};}#header {color:${data.headerColor};padding-top: 2%;width: 100%;display: flex;justify-content: start;align-items: center;position: relative;}#desktop ul {background: none;margin-right: 7%;display: flex;position: absolute;right: 0;top: 25%;bottom: 25%;}#desktop li {font-size: 25px;margin-right: 4%;}#logo {position: relative;font-size: ${data.logoSize};width: 150px;height: 85%;margin-left: 1.5%;}/*Config templates pre-default */#content-user {height: 100%;}#session-img-element {display: flex;justify-content: space-between;align-items: center;height: 400px;background-image: url(${data.sessionImg});}.container-user h1,h4,h3 {color: #fff;}.container-user {margin-right: 20%;margin-left: 5%;}.main-content {display: flex;margin-top: 20px;justify-content: center;align-items: center;}.main-content .container-user {margin-right: 0;margin-left: 10px;}.main-content h1,h3 {color: black;}.user-image-about {margin-left: auto;}.main-content-port {display: flex;justify-content: center;margin-top: 10px;margin-bottom: 10px;text-align: center;}#title-port {margin-top: 60px;color: black;text-align: center;}#footer {display: flex;justify-content: space-around;align-items: center;background-color: rgb(151, 151, 151);color: #fff;height: 80px;width: 100%;}#redes-sociais div{margin-top: 5px;}#contact {text-decoration:none;display: ${data.btnContact};background-color:rgb(45, 45, 53);color:#fff;padding:4px;border-radius:4px;}#logotype-element {width:200px;} #perfil-image-element {width:200px;}</style></head>
              <body><div id="desktop"><header id="header"><div id="logo">${data.logoText}</div><nav><ul id="btn-contact"><li><a href="${data.social}" target="_blank" id="contact">Contato</a></li></ul></nav></header><div id="content-user"><div id="session-img-element"><div class="container-user"><h1 id="title-element">${data.title}</h1><br><h4 id="work-element">${data.work}</h4></div><div class="container-user"><img src="${data.logotype}" id="logotype-element"><div id="logotype-container"></div></h1><br></div></div><div class="main-content"><div class="container-user user-image-about"><img src="${data.perfilImage}"  id="perfil-image-element"></div><div class="container-user"><h1>About Me</h1><h3 id="perfil-text-element">${data.perfilText}</h3></div></div><div><h1 id="title-port">Portfolio</h1></div><div class="main-content-port"><div id="portfolio"><a href="${data.linkPortf}" target="_blank" id="link-portf-element">VER PORTFÓLIO</a></div></div><div id="footer"><div id="note-element">${data.note}</div><div id="redes-sociais"><div><a href="${data.social}" target="_blank" id="social-element">Rede social</a></div></div></div></div></div></body><html/>`,
        ];
        let myBlob = new Blob(blobParts, { type: "text/html" }); // the blob
        const link = window.document.createElement("a");
        link.href = window.URL.createObjectURL(myBlob);
        link.download = "export.html";
        link.click();
        window.URL.revokeObjectURL(link.href);
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: start;
    align-items: center;
    height: 400px;
  }
  .project_container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(21, 21, 46);
    height: 300px;
    width: 250px;
    border-radius: 8px;
    margin: 20px;
    box-shadow: 8px 8px 10px black;
    position: relative;
  }
  .project_title_screen {
    position: absolute;
    bottom: 16%;
  }
  .project_container:hover {
    cursor: pointer;
    height: 320px;
    width: 270px;
  }
  .color1_default {
    color: #cbce50;
  }
  .project_image_screen {
    margin-bottom: 5px; /*580px*/
    width: 95%;
    overflow: hidden;
  }
  .project_image_screen img {
    width: 100%;
  }
  .project_btn {
    position: absolute;
    bottom: -10px;
  }
  .project_btn button {
    width: 70px;
    border: none;
    height: 30px;
    border-radius: 2px;
    background-color: rgb(37, 37, 73);
  }
  .view:hover {
    color: black;
    background-color: rgb(218, 216, 69);
  }
  .edit:hover {
    color: #fff;
    background-color: #5c9651;
  }
  .del:hover {
    color: #fff;
    background-color: #a73a38;
  }
  .button-group {
    position: absolute;
    width: 100%;
    bottom: 5px;
  }
  .button-group button {
    width: 50%;
    height: 40px;
    border: none;
    font-size: 18px;
    font-family: Calibri, "Trebuchet MS", sans-serif;
    color: rgb(250, 221, 168);
    background-color: rgb(37, 37, 73);
  }
  .button-group button:hover {
    color: #fafd3d;
    cursor: pointer;
    background-color: rgb(38, 38, 46);
  }
  </style>