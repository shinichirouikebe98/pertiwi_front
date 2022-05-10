<template>
<div class="wrapper">

      <div class="layout-card" data-aos="fade-up"> 

          <CardComponent 
            v-for="menu in menus" :key="menu.number" 
            :title="menu.title" :link="menu.link" 
            :img="menu.img" 
          />

      </div>

      <div class="layout-card"  v-role='"Admin"'> 

          <CardComponent
            v-for="menu in supermenus" :key="menu.number" 
            :title="menu.title" :link="menu.link" 
            :img="menu.img" 
          />

      </div>


  
</div>





</template>
<script>
import LazyHydrate from 'vue-lazy-hydration'
import CardComponent from '../../../components/CardComponent.vue'
export default {
  components:{
    LazyHydrate
  },
  computed: {
    user() {
      return this.$auth.user
      
    }
    
  },

  async asyncData ({ $axios, $gates }) {
    const [roles, permissions] = await Promise.all([
      $axios.$get('/api/admin/authorization/roles-gates'),
      $axios.$get('/api/admin/authorization/permissions-gates')
    ])
    $gates.setRoles(roles)
    $gates.setPermissions(permissions)
  },




  


  
  components:{
    CardComponent
  },
  //layout
  layout: 'admin',

  //meta
  head() {
    return {
      title: 'Dashboard',
    }
  },
  data(){
    return{
      menus:[
        { number:1, title:'Videos', link:'admin-video', img:'video.svg'},
        { number:2, title:'Promosi', link:'admin-promotion',img:'promo.svg'},
        { number:3, title:'News',link:'admin-news',img:'news.svg'},
        { number:4, title:'Image',link:'admin-image',img:'image.svg'},
        { number:5, title:'Article',link:'admin-article',img:'newspaper.svg'},
 
      ],
      supermenus:[
        { number:1, title:'User', link:'admin-user', img:'video.svg'},
        { number:2, title:'Role', link:'admin-role',img:'promo.svg'},
        { number:2, title:'Permission', link:'admin-permission',img:'promo.svg'},
      ],

    }
    
  }
  
}
</script>
<style scoped>
  .layout-card{
    display: grid;
    grid-template-columns: 25% 25% 25%;
    gap: 5px;
    justify-content: center;
    align-items: center;
    margin-bottom: 60px;
    
  }
  @media screen and (max-width: 720px) {
    .layout-card{
      grid-template-columns: auto;

    }
    
  }
  @media screen and (max-width: 480px) {
    .layout-card{
      grid-template-columns: auto;

    }
    
  }
</style>

