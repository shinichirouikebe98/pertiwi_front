<template> 
<div>
  <div class="container-fluid">
    <div class="logo-layout">
      <div class="logo">PERTIWI ADVENTURE</div>
    </div>
    <div class="hamburger" @click="show = !show">
          <div class="hamburger-line" :class="{rotation_first:show}"></div>
          <div class="hamburger-line" :class="{rotation_last:show}"></div>          
          <div class="hamburger-line" :class="{stealth:show}"></div>         
    </div>


    <div class="nav-layout">   
         
      <div class="menus" :class="{open:show}">
        <nuxt-link to="/">HOME</nuxt-link>
        <nuxt-link :to="{name:'admin-dashboard'}" @click.native="show = false">DASHBOARD</nuxt-link>
        <nuxt-link :to="{name:'admin-news'}"  @click.native="show = false">NEWS</nuxt-link>
        <nuxt-link :to="{name:'admin-video'}"  @click.native="show = false">VIDEO</nuxt-link>
        <nuxt-link :to="{name:'admin-promotion'}" @click.native="show = false">PROMOTION</nuxt-link>
        <nuxt-link :to="{name:'admin-image'}" @click.native="show = false">IMAGE</nuxt-link>
        <nuxt-link to="/" @click.native="logout">LOGOUT</nuxt-link>
        <nuxt-link to="/" class="user"><img src="@/assets/img/user_small.svg" style="width:23px; height:23px" @click="show = false">&nbsp;{{user.name}}</nuxt-link>
      </div>

    </div>
  </div>


</div>
</template>
<script>
  export default {
    data(){
      return{
        show:false,
        rotate:false,
      }
    },

    computed: {
      user() {
        return this.$auth.user
      }
    },

    methods: {

      async logout() {

        //logout auth
        await this.$auth.logout()

        //redirect route login
        this.$router.push({
          name: 'login'
        })

      }

    }
  }
</script>
<style lang='scss' scoped>
.user{
  color: #FF785A;
}
.setting{
    margin: 0;
    padding: 0;
}
.logo-layout{
  display: grid;
  align-items: center;
  justify-content: center; 
}
.logo{
  font-family: 'Kanit', sans-serif;
  font-size: 60px;
      font-style: italic;
}
a{
  text-decoration: none;
  color: black;
  letter-spacing: 1px;
}
a:hover{
  color: silver;
}
.nav-layout{
  display: flex;
  align-content: center;
  justify-content: center;
}
.menus{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  font-size: 25px;
  font-family: 'Bebas Neue', cursive;
  font-weight: bold;
}
.mobile-logo{
  display:none;
}
.hamburger-line{
  width: 35px;
  height: 5px;
  background-color: black;
  margin: 6px 0;
}
.hamburger{
  display: none;
  width: 40px;
  height: 40px;
  margin-bottom:10px;
}
.hamburger:hover{
  cursor: pointer;
}
.hamburger > div:hover{
  background-color: cornflowerblue;
}


@media screen and (max-width: 1000px) {
  .hamburger{
    display: block;
    margin: auto;
  }
  .hamburger-line{
    &.stealth{
      display: none;
    }
  }
  .menus{
    display: none;
    transform: translateX(-100%);
    margin-bottom: 30px;

    &.open{
      display: grid;
      grid-auto-rows: auto;
      align-items: center;
      justify-content: center;
      transform: translateX(0%);
    }
  }
  .logo{
    font-size: 30px;
  }
  .container-fluid{
    background-color: silver;
    grid-template-columns: auto auto;
    grid-template-rows: auto;
  }

    
}
@media screen and (max-width: 480px) {
  .hamburger{
    display: block;
  }
  .hamburger-line{
    &.stealth{
      display: none;
    }
  }
  .menus{
    transition: 0.4s;
    display: none;
    transform: translateX(-100%);
    

    &.open{
      display: grid;
      grid-auto-rows: auto;
      align-items: center;
      justify-content: center;
      transform: translateX(0%);
      color: black;
    }
  }
  .logo{
    font-size: 30px;
  }
  .container-fluid{
    background-color: silver;
  }

    
    
}



</style>