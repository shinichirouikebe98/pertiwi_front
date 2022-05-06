<template>
    <div class="footer">
        <div class="logo">PERTIWI ADVENTURE</div>
        <div class="menu">
            <nuxt-link to="/">HOME</nuxt-link>
            <nuxt-link :to="{ path: getCurrentPath ,hash:'#contact'}" @click.native="show = false">CONTACT</nuxt-link>
            <nuxt-link :to="{name:'atv'}">ATV</nuxt-link>
            <nuxt-link :to="{name:'paintball'}">PAINTBALL</nuxt-link>
            <nuxt-link :to="{name:'rafting'}">RAFTING</nuxt-link>
            <!-- <nuxt-link :to="{name:'vw'}">VW-RIDE</nuxt-link> -->
            <nuxt-link :to="{name:'package'}">PACKAGE</nuxt-link>

        </div>
        <div class="copyright">Copyright © 2021 Pertiwi Adventure.</div>

    </div>
</template>
<script>
export default {
    computed:{
      getCurrentPath: function(){
        return this.$route.path
      }
    }

}
</script>
<style scoped>
/* .footer{
    background-color: white;
    width: 100%;
    border-top: 1px silver solid;
    z-index: 10;
    height: 50px;
    font-family: 'Encode Sans SC', sans-serif;
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    margin-top: 30px;
    position: fixed;
} */

.footer{
    margin-top:30px ;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #252627;

}
.menu{
    display: flex;
    flex-direction: row;
    gap:30px;
    font-family: 'Kanit', sans-serif;
    
}
.logo{
  font-family: 'Kanit', sans-serif;
  font-size: 50px;
  background:linear-gradient(to right, #02AAB0 0%, #00CDAC  51%, #02AAB0  100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

}
.copyright{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
    color: white;
    font-size: 10px;
}
a{
    text-decoration: none;
    color: white;
}
a:hover{
    color: dimgray;
    transition: 0.5s;
}
@media screen and (max-width: 760px){
    .menu{
        display: none;
    }
    .logo{
        font-size: 30px;
    }
}
@media screen and (max-width: 480px){
    .menu{
        display: none;
    }
    .logo{
        font-size: 30px;
    }
}
</style>