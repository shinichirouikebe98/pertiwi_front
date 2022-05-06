<template>
  <div class="container">
    <h1 style="letter-spacing:4px; margin-top:40px;">IMAGE LIST</h1>
    <b-button :to="{name:'admin-image-create'}" variant="outline-primary" style="margin-left:5px;">+ TAMBAH IMAGE</b-button>
    <div class="search"><b-form-input v-model="search" @keypress.enter="searchData" placeholder="SEARCH - Press Enter After Typing Keyword" style="letter-spacing:1px"></b-form-input></div>
   
    <div class="layout">
        <div class="photos" >
          <div v-for="image in images" :key="image.id"> 
            <nuxt-link :to="{name: 'admin-image-edit-id', params: {id: image.id}}">
                <img  :src="`${$config.imageURL}/image/`+image.img" alt="">
            </nuxt-link>
            <b-button @click="deleteImage(image.id)" variant="outline-danger" style="margin-top:5px; width:100%;">DELETE</b-button>
             
          </div>
        </div>
      <!-- <div class="list-content" v-for="berita in news" :key="berita.id">
        <div class="basic-info">
            <div class="uploaded">{{berita.created_at}}, &nbsp; Uploaded By :{{berita.user.name}}</div>
            <div class="title">{{berita.title}}</div>
        </div>
        <div class="list-actions">
            <ul>
              <li><b-button variant="outline-info" :to="{name: 'admin-news-detail-id', params: {id: berita.id}}">DETAIL</b-button></li>
              <li><b-button variant="outline-warning" :to="{name: 'admin-news-edit-id', params: {id: berita.id}}">UPDATE</b-button></li>
              <li><b-button variant="outline-danger"  @click="deleteBerita(berita.id)">DELETE</b-button></li>
            </ul>
        </div>
      </div> -->

    </div>


    <b-pagination v-model="pagination.current_page" :total-rows="pagination.total" :per-page="pagination.per_page"
       @change="changePage" align="right" class="mt-3">
    </b-pagination>     
  </div>

</template>
<script>
export default {

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
        search: ''
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
      const images = await $axios.$get(`/api/admin/images?q=${search}&page=${page}`)
      return {
        'images': images.data.data,
        'pagination': images.data
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

    deleteImage(id){
        //delete data from server
        this.$axios.delete(`/api/admin/images/${id}`)
        .then(() => {
          //feresh data
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
img{
    width: 100% !important;
    height: auto !important;
}
.photos {
    width: 100%;
    line-height: 0;
    -webkit-column-count: 4;
    -webkit-column-gap:   10px;
    -moz-column-count:    4;
    -moz-column-gap:      10px;
    column-count:         4;
    column-gap:           10px;
}
.photos img {
    width: 100% !important;
    height: auto !important;
    padding-top: 10px;
}


img{
  transition: transform 0.2s;
}
@media screen and (max-width: 720px) {
.photos {
    width: 100%;
    line-height: 0;
    -webkit-column-count: 3;
    -webkit-column-gap:   10px;
    -moz-column-count:    3;
    -moz-column-gap:      10px;
    column-count:         3;
    column-gap:           10px;
}
}
@media screen and (max-width: 480px) {
.photos {
    width: 100%;
    line-height: 0;
    -webkit-column-count: 2;
    -webkit-column-gap:   10px;
    -moz-column-count:    2;
    -moz-column-gap:      10px;
    column-count:         2;
    column-gap:           10px;
}
}
</style>


