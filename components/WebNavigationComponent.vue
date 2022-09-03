<template> 
  <div class="nav"  :class="{sticky_nav:sticky}" style="background-color:black;">
    <div class="box-layout-dekstop" :class="{row:layout}">
        <div class="logo-hamburger">

          <div class="logo-layout">
            <div class="logo">PERTIWI ADVENTURE</div>
          </div>

          <div class="close" @click="show = !show" :class="{stealth:show}"></div>


          <div class="hamburger" @click="show = !show ,layout = !layout" :class="{stealth:show}">
            <div class="hamburger-line"></div>
            <div class="hamburger-line"></div>          
            <div class="hamburger-line"></div>         
          </div> 

         
        </div>


        <div class="nav-layout">    
          <div class="menus" :class="{open:show}">
            <nuxt-link to="/">HOME</nuxt-link>
            <nuxt-link :to="{name:'atv'}"  @click.native="show = false, getCurrentPath">ATV</nuxt-link>
            <nuxt-link :to="{name:'paintball'}"  @click.native="show = false, getCurrentPath">PAINTBALL</nuxt-link>
            <nuxt-link :to="{name:'rafting'}"  @click.native="show = false, getCurrentPath">RAFTING</nuxt-link>
            <!-- <nuxt-link :to="{name:'vw'}"  @click.native="show = false, getCurrentPath">VW-RIDE</nuxt-link> -->
            <nuxt-link :to="{ path: getCurrentPath ,hash:'#contact'}" @click.native="show = false">CONTACT</nuxt-link>
            <nuxt-link :to="{name:'package'}"  @click.native="show = false, getCurrentPath">PACKAGE</nuxt-link>
          </div>
        </div>
    </div>
    <div class="nav-layout-mobile">         
        <div class="mobile-menus" :class="{open:show}">
          <nuxt-link to="/">HOME</nuxt-link>
          <nuxt-link :to="{name:'atv'}"  @click.native="show = false, getCurrentPath">ATV</nuxt-link>
          <nuxt-link :to="{name:'paintball'}"  @click.native="show = false, getCurrentPath">PAINTBALL</nuxt-link>
          <nuxt-link :to="{name:'rafting'}"  @click.native="show = false, getCurrentPath">RAFTING</nuxt-link>
          <!-- <nuxt-link :to="{name:'rafting'}"  @click.native="show = false, getCurrentPath">VW-RIDE</nuxt-link> -->
          <nuxt-link :to="{ path: getCurrentPath ,hash:'#contact'}" @click.native="show = false">CONTACT</nuxt-link>
          <nuxt-link :to="{name:'package'}"  @click.native="show = false, getCurrentPath">PACKAGE</nuxt-link>
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
        layout:false,
        sticky:false,
      }
    },
    computed:{
      getCurrentPath: function(){
        return this.$route.path
      }
    },
    methods: {
      handleScroll () {
        // Your scroll handling here
        if(window.scrollY >= 1){
          this.layout = true;
          this.sticky = true;
        }
        else{
          this.layout = false;
          this.sticky = false;
        }
      }
    },
    beforeMount () {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
    },


  }
</script>
<style lang='scss' scoped>

.close {
  display:none;
  position: relative;
  width: 40px;
  height: 40px;
  opacity: 0.7;

}
.close:hover {
  opacity: 1;
}
.close:before, .close:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 40px;
  width: 5px;
  background-color: #333;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}


.nav{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  z-index: 10;
  flex-direction: column;
  position: -webkit-sticky;
  position: sticky;

      &.sticky_nav{
        position: -webkit-sticky;
        position: sticky;
        top:0;

      }

}
.box-layout-dekstop{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &.row{
    flex-direction: row;
  }
}
.user{
  color: #FF785A;
}
.setting{
    margin: 0;
    padding: 0;
}
.logo-layout{
  display: grid;
  grid-template-rows: auto auto; 
  align-items: center;
  justify-content: center; 
}
.logo{
  font-family: 'Kanit', sans-serif;
  font-style: italic;
  font-size: 50px;
  background:linear-gradient(to right, #02AAB0 0%, #00CDAC  51%, #02AAB0  100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
a{
  text-decoration: none;
  color: white;
  letter-spacing: 1px;
}
.nav-layout{
  display: flex;
  margin-left: 40px;
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
.mobile-menus{
  display: none;
  opacity: 0;
  gap:20px;
  padding-top:50px;
  align-items: center;
  font-family: 'Bebas Neue', cursive;
  font-weight: bold;

}
.mobile-logo{
  display:none;
}
.hamburger-line{
  width: 40px;
  height: 5px;
  background-color: black;
  margin: 6px 0;
}
.hamburger{
  display: none;
  position: relative;
  width: 40px;
  height: 40px;
}
.hamburger:hover{
  cursor: pointer;
}
.hamburger > div:hover{
  background-color: cornflowerblue;
}
.logo-hamburger{
    display: flex;
    flex-direction: row;
    gap: 40px;
}
.nav-position{
  position: sticky;
  top: 0;
}

.close:hover{
  cursor: pointer;
}


@media screen and (max-width: 820px) {

  .close{
    &.stealth{
      display: flex;
      margin: auto;
      align-items: center;
      justify-content: center;
      color: black;
    }
  }
  .box-layout-dekstop{
    height: 10vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    color: black;
    gap:0px;
     &.row{
      flex-direction: column;
      transition: 0.5s;
    }
    
  }
  .mobile-menus{
   &.open{
    font-size: 60px;
    opacity: 1;
    width: 100vw;
    height: 100vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    position: relative;
    transition: ease-in-out 0.5s;
   }

 }
  a:hover{
    color: white;
  }
  a{
    color: black;
  }
  .hamburger{
    display: block;
    margin: auto;
    &.stealth{
      display: none;
    }
  }
  .menus{
    display: none;
  }

  .logo{
    font-size: 50px;
  }

    
    
}
@media screen and (max-width: 540px) {
  .div{
    display: flex;
  }
  .menus{
    display: none;
  }
 .mobile-menus{
   &.open{
    font-size: 40px;
    opacity: 1;
    width: 100vw;
    height: 100vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    position: relative;


   }

 }
  .hamburger{
    display: block;
  }
  .hamburger-line{
    &.stealth{
      display: none;
    }

  }
  .menus{
    display: none;
  }
  .logo{
    font-size: 25px;
  }
  .container-fluid{
    background-color: silver;
  }

    
    
}



  

                

</style>