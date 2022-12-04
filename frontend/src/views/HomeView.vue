<template>
  <div class="screen">
      <div class="container-main">
          <div class="container first_container">
              <h3>Bem vindo ao front fast</h3>
              <h3>Uma solução pratica para criar e personalizar templates de maneira simples e amigavel</h3>
              <div><img src="https://th.bing.com/th/id/R.44eb09b4af03a265f742c2ca617d6218?rik=yiKW6uPyFUD7oA&pid=ImgRaw&r=0" width="300"></div>
          </div>
          <div class="container">
              <h3>Tenha acesso a diversos templates</h3>
              <h3>E de o seu toque em cada um deles</h3>
              <div class="content-main">
              <div class="content show-container">
                  <div class="content-img">
                      <img src="https://static.vecteezy.com/system/resources/previews/000/641/158/original/landing-page-template-of-system-maintenance-illustration-concept-modern-flat-design-concept-of-web-page-design-for-website-and-mobile-website-vector-illustration.jpg" alt="">
                  </div> <div class="content-img">
                      <img src="https://static.vecteezy.com/system/resources/previews/000/457/007/original/landing-page-template-of-market-analysis-illustration-concept-flat-design-concept-of-web-page-design-for-website-and-mobile-website-vector-illustration.jpg" alt="">
                  </div>
                  <div class="content-img">
                      <img src="https://image.freepik.com/vetores-gratis/fundo-de-analise-de-mercado-para-o-site_19426-57.jpg" alt="">
                  </div>
                  <div class="content-img">
                      <img src="https://img.freepik.com/vetores-gratis/modelo-de-pagina-de-destino-de-marketing-digital_23-2148245776.jpg?size=626&ext=jpg" alt="">
                  </div>
                  <div class="content-img">
                      <img src="https://i.pinimg.com/originals/8b/ee/22/8bee22c475409ea4f4e8ea1cf70c62d5.png" alt="">
                  </div>
                  <div class="content-img">
                      <img src="https://cdn.dribbble.com/users/1520719/screenshots/4052245/gramblast_dribbble.png" alt="">
                  </div>
                  <div class="content-img">
                      <img src="https://gillde.com/wp-content/uploads/2019/01/UIUX-Interaction-Design1.png" alt="">
                  </div>
                  <div class="content-img">
                      <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/181964074/original/8fbc77844426415acb35c0644917f515a3ebdaac/do-professional-html-landing-page-or-sass-product.png" alt="">
                  </div>
                  <div class="content-img">
                      <img src="https://cdn.dribbble.com/users/2388616/screenshots/5752935/doc_2x.jpg" alt="">
                  </div>
              </div>
              </div>
              <div class="container_button">
                <a :href="redirectButton" id="button_start">&lt; Começar /&gt;</a>
              </div>
              <div>
                  
              </div>
          </div>
      </div>
  </div>
</template>
<script>
  import axios from 'axios'
export default {
  name: 'HomeScreen',
  data(){
    return {
      redirectButton:'/register'
    }
  },
  methods: {
    redirectBtn() {
      axios.get("https://9a7c-2804-868-d048-6c9e-458-1ad4-f50f-3f76.sa.ngrok.io/api/project", {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"), //the token is a variable which holds the token
            },
          })
          .then((response) => {
            this.redirectButton = '/criar-projeto'
          })
          .catch((error) => {
            console.log(error);
          });
        }
  },
  mounted() {
    this.redirectBtn()
  },
}
</script>
<style scoped>
.container {
  margin-top: 30px;
}
.container-main {
  width: 500px;
}
.container img {
  margin-top: 20px;
}
.content {
  width: 70%;
}
.content-main {
  display: flex;
  justify-content: center;
}
.content-img {
  display: inline-block;
  width: 80px;
  height: 80px;
  margin-left: 20px;
}
.content-img img {
  width: 100%;
}
.screen {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  text-align: center;
  height: 500px; 
  width: 100%;
}
#button_start {
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 150px;
  display: flex;
  margin-top: 20px;
  border: none;
  font-family:Calibri, 'Trebuchet MS', sans-serif;
  font-size: 22px;
  border-radius: 5px;
  color: rgb(250, 221, 168);
  background-color: rgb(37, 37, 73);
}
.container a:hover {
  cursor: pointer;
  color: #cbce50;
  background-color: rgb(40, 40, 148);
}
.container_button {
  display: flex;
  justify-content: center;
}
</style>