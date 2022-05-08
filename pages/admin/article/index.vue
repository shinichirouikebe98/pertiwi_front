<template>
  <div class="container">
    <h1 style="letter-spacing:4px; margin-top:40px;">ARTICLE LIST</h1>

    <b-button :to="{name:'admin-article-create'}" variant="outline-primary" style="margin-left:5px;">+ TAMBAH ARTICLE</b-button>
    <div class="search"><b-form-input v-model="search" @keypress.enter="searchData" placeholder="SEARCH - Press Enter After Typing Keyword" style="letter-spacing:1px"></b-form-input></div>

    <div class="layout">
      <div class="list-content" v-for="article in articles" :key="article.id">
        <div class="basic-info">
            <div class="uploaded">{{article.created_at}}, &nbsp; Promoted By :{{article.user.name}}</div>
            <div class="title">{{article.title}}</div>
        </div>
        <div class="list-actions">
            <ul>
              <li><b-button variant="outline-warning" :to="{name: 'admin-article-edit-id', params: {id: article.id}}">UPDATE</b-button></li>
              <li><b-button variant="outline-danger" @click="deleteArticle(article.id)">DELETE</b-button></li>
            </ul>
        </div>
      </div>

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
      const articles = await $axios.$get(`/api/admin/articles?q=${search}&page=${page}`)

      return {
        'articles': articles.data.data,
        'pagination': articles.data
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

    deleteArticle(id){
        //delete data from server
        this.$axios.delete(`/api/admin/articles/${id}`)
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
a:hover{
  text-decoration: none;
}
.list-content{
  border-bottom: 1px solid silver;
  font-family: 'Roboto Condensed', sans-serif;
  padding: 10px;
  letter-spacing:1px;
  display: grid;
  grid-template-columns: 70% 30%;
  width: 100%;
}
.list-content:hover{
  color:silver;
  transition: 0.5s;
}
.uploaded{
  font-size: 10px;
}
ul{
  list-style: none;
}
li{
  display: inline;
}
.button{
  background:none ;
  border:none;
  padding: 0px;
  color: red;
}
.list-actions{
  padding-top: 10px;
  display: grid;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 720px) {
  .list-content{
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    
  }
  ul{
    padding: 0px;
  }
  .list-actions{
    width: auto;
  }
}
@media screen and (max-width: 480px) {
  .list-content{
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto auto;
  }
  .list-actions{
    width: auto;
  }
  ul{
    padding: 0px;
  }
}
</style>


