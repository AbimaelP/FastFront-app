<template>
  <div id="desktop">
    <header id="header">
      <div id="logo">
      </div>
      <nav>
        <ul id="btn-contact">
          <button id="contact"><a href="">Contato</a></button>
        </ul>
      </nav>
    </header>
    <div id="content-user">
      <div id="session-img-element">
        <div class="container-user">
          <h1 id="title-element">Title or your name</h1><br>
          <h4 id="work-element">What do you do?</h4>
        </div>
        <div class="container-user">
          <h1><img src="" id="logotype-element"><div id="logotype-container">Image</div></h1><br>

        </div>
      </div>
      <div class="main-content">
        <div class="container-user user-image-about"><img src="https://th.bing.com/th/id/R.aaeb8c77cbf17de1105193d49151f95b?rik=QdJqGjITXCAFlA&riu=http%3a%2f%2fwww.zbrushcentral.com%2fuploads%2fdefault%2foriginal%2f4X%2f2%2f2%2fa%2f22a6f3fbd1c0048113daeee4640fb6193a85cba2.jpeg&ehk=tiJkeRxBMBBxswg6rMH%2fz0YsRZ68xhxcSmhcCfEKZHk%3d&risl=&pid=ImgRaw&r=0" width="200" alt="" id="perfil-image-element"></div>
        <div class="container-user">
          <h1>About Me</h1>
          <h3 id="perfil-text-element">text random throw it is link write text in space</h3>
        </div>
      </div>
      <div><h1 id="title-port">Portfolio</h1></div>
      <div class="main-content-port">
        <div id="portfolio">
            <a href="" id="link-portf-element">VER PORTFÓLIO</a>
        </div>        
      </div>
      <div id="footer">
        <div id="note-element">
          notas do autor
        </div>
        <div id="redes-sociais">
          <div><a href="" id="social-element">Rede social</a></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'UserWebPagePreview'
}
</script>

<style scoped>
  * {
    color: black;
    list-style-type: none;
    background-color: none;
  }
  #desktop {
    width: 100%;
    min-height: 720px;
    position: relative;
  }
  #desktop header {
    padding-top: 2%;
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    position: relative;
  }
  #desktop ul {
    background: none;
    margin-right: 7%;
    display: flex;
    position: absolute;
    right: 0;
    top: 25%;
    bottom: 25%;
  }
  #desktop li {
    font-size: 25px;
    margin-right: 4%;
  }
  #logo {
    position: relative;
    font-size: 40px;
    width: 150px;
    height: 85%;
    margin-left: 1.5%;
  }

/*Config templates pre-default */
  #content-user {
    height: 100%;
  }
  #session-img-element {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 400px;
    background-image: url(https://comindesign.fr/wp-content/uploads/2018/08/website-design-slider-background-stockton.jpg);
  }
  .container-user h1,h4,h3 {
    color: #fff;
  }
  .container-user {
    margin-right: 20%;
    margin-left: 5%;
  }
  
  .main-content {
    display: flex;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
  }
  .main-content .container-user {
    margin-right: 0;
    margin-left: 10px;
  }
  .main-content h1,h3 {
    color: black;
  }
  .user-image-about {
    margin-left: auto;
  }
  .main-content-port {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
  }
  #title-port {
    margin-top: 60px;
    color: rgb(0, 0, 0);
    text-align: center;
  }
  #footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rgb(151, 151, 151);
    color: #fff;
    height: 80px;
    width: 100%;
  }
  #redes-sociais div{
    margin-top: 5px;
  }
  #contact {
    display: none;
  }
</style>