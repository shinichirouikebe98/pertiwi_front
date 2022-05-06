<template>
  <div class="container">
    <h1 style="letter-spacing:4px; margin-top:40px;">VIDEO LIST</h1>
    <b-button :to="{name:'admin-video-create'}" variant="outline-primary" style="margin-left:5px;">+ TAMBAH VIDEO</b-button>
    <div class="search"><b-form-input v-model="search" @keypress.enter="searchData" placeholder="SEARCH - Press Enter After Typing Keyword" style="letter-spacing:1px"></b-form-input></div>
   
    <div class="layout">
      <VideoList v-for="video in videos" 
        :key="video.id" 
        :id="video.id"
        :link="video.link" 
        :title="video.title" 
        :desc="video.description"
        :upload="video.created_at"
        :user="video.user.name"
        :update="video.updated_at"
        @deleteFunction="deleteVideo"
      />
    </div>
    

    <b-pagination v-model="pagination.current_page" :total-rows="pagination.total" :per-page="pagination.per_page"
       @change="changePage" align="right" class="mt-3">
    </b-pagination>     
  </div>

</template>
<script>
import VideoList from '@/components/VideoList.vue'
export default {
  components:{
    VideoList
  },
  layout:'admin',
  head: {
    link: [
      {
        rel: 'stylesheet',
        href:'https://fonts.googleapis.com/css2?family=Encode+Sans+SC&family=Roboto+Condensed&display=swap',
      },

    ],
  }, 

  data(){
    return{
        //state search
        search: '',
        link:''
    }
  },
   //watch query URL
    watchQuery: ["q", "page"],

    async asyncData({ $axios, query }) {

      //page
      let page = query.page ? parseInt(query.page) : ''

      //search
      let search = query.q ? query.q : ''

      //fetching news
      const videos = await $axios.$get(`/api/admin/videos?q=${search}&page=${page}`)
      return {
        'videos': videos.data.data,
        'pagination': videos.data
      }
    },
  methods:{
    //change page pagination
    changePage(page) {
        this.$router.push({
          path: this.$route.path,
          query: {
            q: this.$route.query.q,
            page: page
          }
        });
    },

     //searchData   
    searchData() {
        this.$router.push({
          path: this.$route.path,
          query: {
            q: this.search
          }
        });
    },

    deleteVideo(id){
        //delete data from server
        this.$axios.delete(`/api/admin/videos/${id}`)
        .then(() => {
          //refresh
          this.$nuxt.refresh()
        })      
    }
  }
}
</script>
<style scoped>
*{
  font-family: 'Roboto Condensed', sans-serif;
}

.search{
  border-bottom: 1px solid silver;
  padding: 5px;
}
.layout{
  margin-top: 20px;
  gap: 30px;
  display: grid;
  grid-template-columns: auto;

  justify-content: center;
  align-items: center;
  
}


@media screen and (max-width: 720px) {

}
@media screen and (max-width: 480px) {

}
</style>


