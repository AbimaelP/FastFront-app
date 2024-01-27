(function(){"use strict";var e={1454:function(e,t,n){var o=n(9242),a=n(3396);const r={class:"screen-main"};function i(e,t,n,o,i,s){const c=(0,a.up)("Navbar"),d=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a.Wm)(c,{logo:i.logo_src,alt:e.app_name},null,8,["logo","alt"]),(0,a.Wm)(d)])}var s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAB0SURBVHic7dixCcNAEETRj6uzcP8NSO7DjmUUKLDgOL0Hm+8Nl+wUAAAAVL2qd/WZbLZqORPANsCyV836+9jHmUTuZmnOX7BWzz/mBAAATEYfMMCyV16EO/qAA/oAAADglvQBAyx75UW4ow84oA8AAABgcl/68uuep+bHfQAAAABJRU5ErkJggg==";const c=e=>((0,a.dD)("data-v-cc5cf336"),e=e(),(0,a.Cn)(),e),d=["src"],l={class:"navbar"},u={id:"navbar-nav"},g=(0,a.Uk)("Inicio"),f=(0,a.Uk)("Cadastrar-se"),p=(0,a.Uk)("Projetos"),m=(0,a.Uk)("Criar Projeto"),v=(0,a.Uk)("Login"),h={key:0,class:"menu"},b=c((()=>(0,a._)("img",{src:"/img/user.png",width:"50"},null,-1))),A=[b],y={id:"container"},w={class:"user-utilities"},k=c((()=>(0,a._)("img",{src:s},null,-1))),_=[k];function j(e,t,n,o,r,i){const s=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("nav",null,[(0,a.Wm)(s,{to:"/",id:"logo-url"},{default:(0,a.w5)((()=>[(0,a._)("img",{src:n.logo,id:"logoImg"},null,8,d)])),_:1}),(0,a._)("div",l,[(0,a._)("div",u,[(0,a.Wm)(s,{to:"/",class:"btn"},{default:(0,a.w5)((()=>[g])),_:1}),r.user.validate?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(s,{key:0,to:"/register",class:"btn"},{default:(0,a.w5)((()=>[f])),_:1})),r.user.validate?((0,a.wg)(),(0,a.j4)(s,{key:1,to:"/projetos",class:"btn"},{default:(0,a.w5)((()=>[p])),_:1})):(0,a.kq)("",!0),r.user.validate?((0,a.wg)(),(0,a.j4)(s,{key:2,to:"/criar-projeto",class:"btn"},{default:(0,a.w5)((()=>[m])),_:1})):(0,a.kq)("",!0),r.user.validate?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(s,{key:3,to:"/login",class:"btn"},{default:(0,a.w5)((()=>[v])),_:1})),r.user.validate?((0,a.wg)(),(0,a.iD)("div",{key:4,id:"perfil-router",class:"btn user-router",onClick:t[0]||(t[0]=e=>i.perfil())},"Perfil")):(0,a.kq)("",!0),r.user.validate?((0,a.wg)(),(0,a.iD)("div",{key:5,id:"config",class:"btn user-router",onClick:t[1]||(t[1]=e=>i.config())},"Configurações")):(0,a.kq)("",!0),r.user.validate?((0,a.wg)(),(0,a.iD)("div",{key:6,id:"logout",class:"btn user-router",onClick:t[2]||(t[2]=e=>i.logout())},"Sair")):(0,a.kq)("",!0)]),r.user.validate?((0,a.wg)(),(0,a.iD)("div",h,[(0,a._)("div",{class:"user",id:"user",onClick:t[3]||(t[3]=e=>i.menuShow())},A),(0,a._)("div",y,[(0,a._)("div",w,[(0,a._)("div",{id:"perfil",onClick:t[4]||(t[4]=e=>i.perfil())},"Perfil"),(0,a._)("div",{id:"config",onClick:t[5]||(t[5]=e=>i.config())},"Configurações"),(0,a._)("div",{id:"logout",onClick:t[6]||(t[6]=e=>i.logout())},"Sair")])])])):(0,a.kq)("",!0)]),(0,a._)("div",{class:"menu-dropdown",onClick:t[7]||(t[7]=(...e)=>i.menuDropDown&&i.menuDropDown(...e))},_)])])}var C=n(6265),B=n.n(C),S={name:"Navbar",props:["logo","alt"],data(){return{authenticated:!0,user:{validate:!1}}},methods:{authUser(){B().get("http://127.0.0.1:8000/api/user",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((e=>{this.user=e.data,this.user.validate=!0})).catch((e=>{console.log(e)}))},menuShow(){let e=document.getElementById("container");"none"==window.getComputedStyle(e).display?e.style.display="block":e.style.display="none"},menuDropDown(){let e=document.getElementById("navbar-nav");"none"==window.getComputedStyle(e).display?e.style.display="flex":e.style.display="none"},async logout(){await B().get("http://127.0.0.1:8000/api/logout",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}),window.location.href="/login",localStorage.removeItem("token")},config(){window.location.href="/config"},perfil(){window.location.href="/perfil"}},created(){this.authUser()}},U=n(89);const D=(0,U.Z)(S,[["render",j],["__scopeId","data-v-cc5cf336"]]);var E=D,O={components:{Navbar:E},data(){return{logo_src:"./img/logo.png",alt:"Make your site"}},methods:{tela(){console.log("pronto")}}};const q=(0,U.Z)(O,[["render",i]]);var N=q,P=n(2483);const I=e=>((0,a.dD)("data-v-68d244b0"),e=e(),(0,a.Cn)(),e),T={class:"screen"},L={class:"container-main"},z=I((()=>(0,a._)("div",{class:"container first_container"},[(0,a._)("h3",null,"Bem vindo ao front fast"),(0,a._)("h3",null,"Uma solução pratica para criar e personalizar templates de maneira simples e amigavel"),(0,a._)("div",null,[(0,a._)("img",{src:"https://th.bing.com/th/id/R.44eb09b4af03a265f742c2ca617d6218?rik=yiKW6uPyFUD7oA&pid=ImgRaw&r=0",width:"300"})])],-1))),x={class:"container"},H=(0,a.uE)('<h3 data-v-68d244b0>Tenha acesso a diversos templates</h3><h3 data-v-68d244b0>E de o seu toque em cada um deles</h3><div class="content-main" data-v-68d244b0><div class="content show-container" data-v-68d244b0><div class="content-img" data-v-68d244b0><img src="https://static.vecteezy.com/system/resources/previews/000/641/158/original/landing-page-template-of-system-maintenance-illustration-concept-modern-flat-design-concept-of-web-page-design-for-website-and-mobile-website-vector-illustration.jpg" alt="" data-v-68d244b0></div> <div class="content-img" data-v-68d244b0><img src="https://static.vecteezy.com/system/resources/previews/000/457/007/original/landing-page-template-of-market-analysis-illustration-concept-flat-design-concept-of-web-page-design-for-website-and-mobile-website-vector-illustration.jpg" alt="" data-v-68d244b0></div><div class="content-img" data-v-68d244b0><img src="https://image.freepik.com/vetores-gratis/fundo-de-analise-de-mercado-para-o-site_19426-57.jpg" alt="" data-v-68d244b0></div><div class="content-img" data-v-68d244b0><img src="https://img.freepik.com/vetores-gratis/modelo-de-pagina-de-destino-de-marketing-digital_23-2148245776.jpg?size=626&amp;ext=jpg" alt="" data-v-68d244b0></div><div class="content-img" data-v-68d244b0><img src="https://i.pinimg.com/originals/8b/ee/22/8bee22c475409ea4f4e8ea1cf70c62d5.png" alt="" data-v-68d244b0></div><div class="content-img" data-v-68d244b0><img src="https://cdn.dribbble.com/users/1520719/screenshots/4052245/gramblast_dribbble.png" alt="" data-v-68d244b0></div><div class="content-img" data-v-68d244b0><img src="https://gillde.com/wp-content/uploads/2019/01/UIUX-Interaction-Design1.png" alt="" data-v-68d244b0></div><div class="content-img" data-v-68d244b0><img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/181964074/original/8fbc77844426415acb35c0644917f515a3ebdaac/do-professional-html-landing-page-or-sass-product.png" alt="" data-v-68d244b0></div><div class="content-img" data-v-68d244b0><img src="https://cdn.dribbble.com/users/2388616/screenshots/5752935/doc_2x.jpg" alt="" data-v-68d244b0></div></div></div>',3),R={class:"container_button"},W=["href"],V=I((()=>(0,a._)("div",null,null,-1)));function Z(e,t,n,o,r,i){return(0,a.wg)(),(0,a.iD)("div",T,[(0,a._)("div",L,[z,(0,a._)("div",x,[H,(0,a._)("div",R,[(0,a._)("a",{href:r.redirectButton,id:"button_start"},"< Começar />",8,W)]),V])])])}var F={name:"HomeScreen",data(){return{redirectButton:"/register"}},methods:{redirectBtn(){B().get("http://127.0.0.1:8000/api/project",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((e=>{this.redirectButton="/criar-projeto"})).catch((e=>{console.log(e)}))}},mounted(){this.redirectBtn()}};const M=(0,U.Z)(F,[["render",Z],["__scopeId","data-v-68d244b0"]]);var K=M;const X=[{path:"/",name:"home",component:K},{path:"/projetos",name:"projetos",component:()=>n.e(571).then(n.bind(n,2250))},{path:"/criar-projeto",name:"criarProjeto",component:()=>n.e(320).then(n.bind(n,6283))},{path:"/login",name:"login",component:()=>n.e(535).then(n.bind(n,6547))},{path:"/register",name:"register",component:()=>n.e(685).then(n.bind(n,3938))},{path:"/perfil",name:"perfil",component:()=>n.e(681).then(n.bind(n,4857))},{path:"/config",name:"config",component:()=>n.e(497).then(n.bind(n,3569))}],Q=(0,P.p7)({history:(0,P.PO)("/"),routes:X});var Y=Q;(0,o.ri)(N).use(Y).mount("#app")}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,r){if(!o){var i=1/0;for(l=0;l<e.length;l++){o=e[l][0],a=e[l][1],r=e[l][2];for(var s=!0,c=0;c<o.length;c++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(s=!1,r<i&&(i=r));if(s){e.splice(l--,1);var d=a();void 0!==d&&(t=d)}}return t}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[o,a,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+{320:"criar-projeto",497:"config",535:"login",571:"projetos",681:"perfil",685:"register"}[e]+"."+{320:"09b48464",497:"c9f2880a",535:"8a33581c",571:"c2bf9d18",681:"70d5e0eb",685:"a9d4ef48"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+{320:"criar-projeto",497:"config",535:"login",571:"projetos",681:"perfil",685:"register"}[e]+"."+{320:"942b177d",497:"935d20be",535:"8f549f68",571:"950434aa",681:"24eae42a",685:"1fb84bde"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="fastfront:";n.l=function(o,a,r,i){if(e[o])e[o].push(a);else{var s,c;if(void 0!==r)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var u=d[l];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==t+r){s=u;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+r),s.src=o),e[o]=[a];var g=function(t,n){s.onerror=s.onload=null,clearTimeout(f);var a=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(g.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=g.bind(null,s.onerror),s.onload=g.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var r=function(r){if(a.onerror=a.onload=null,"load"===r.type)n();else{var i=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,a.parentNode.removeChild(a),o(c)}};return a.onerror=a.onload=r,a.href=t,document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var a=n[o],r=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(r===e||r===t))return a}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){a=i[o],r=a.getAttribute("data-href");if(r===e||r===t)return a}},o=function(o){return new Promise((function(a,r){var i=n.miniCssF(o),s=n.p+i;if(t(i,s))return a();e(o,s,a,r)}))},a={143:0};n.f.miniCss=function(e,t){var n={320:1,497:1,535:1,571:1,681:1,685:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=o(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,o){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var r=new Promise((function(n,o){a=e[t]=[n,o]}));o.push(a[2]=r);var i=n.p+n.u(t),s=new Error,c=function(o){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var r=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",s.name="ChunkLoadError",s.type=r,s.request=i,a[1](s)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,r,i=o[0],s=o[1],c=o[2],d=0;if(i.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(c)var l=c(n)}for(t&&t(o);d<i.length;d++)r=i[d],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(l)},o=self["webpackChunkfastfront"]=self["webpackChunkfastfront"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(1454)}));o=n.O(o)})();
//# sourceMappingURL=app.2b46331e.js.map