<template>

    <div class="container">
        <h1>USERS</h1>
        <hr>
        <b-button variant="outline-primary" :to="{name: 'admin-user-create'}">+ REGISTER USER</b-button>
        <div class="search"><b-form-input v-model="search" @keypress.enter="searchData" placeholder="SEARCH - Press Enter After Typing Keyword" style="letter-spacing:1px"></b-form-input></div>
        <div class="layout">
          <div class="list-content" v-for="user in users" :key="user.id">
              <div class="basic-info">
                  <div class="uploaded">{{user.created_at}}, Role :{{user.roles[0].name}}&nbsp;
                  <div class="title">{{user.name}}</div>
                  <div class="title">{{user.email}}</div>

              </div>
          </div>
          <div class="list-actions">
              <b-button variant="outline-info" :to="{name: 'admin-user-detail-id', params: {id: user.id}}">DETAIL</b-button>
              <b-button variant="outline-warning" :to="{name: 'admin-user-edit-id', params: {id: user.id}}">EDIT</b-button>
              <b-button variant="outline-danger" @click="deleteUser(user.id)">- HAPUS USER</b-button>
          </div>

        </div>
       




        <b-pagination v-model="pagination.current_page" :total-rows="pagination.total" :per-page="pagination.per_page"
        @change="changePage" align="right" class="mt-3">
        </b-pagination>   

    </div>
    </div>
    
</template>
<script>
export default {
    layout:'admin',
    data(){
        return{
            data:{
                name:'',
                email:'',
                created_at:'',

            },
            
            validation: [],
            search:'',
            permissions:''
        }
    },
    mounted(){

    },
       //watch query URL
    watchQuery: ["q", "page"],
    async asyncData({ $axios, query }) {

      //page
      let page = query.page ? parseInt(query.page) : ''

      //search
      let search = query.q ? query.q : ''

      //fetching news
      const user = await $axios.$get(`/api/admin/users?q=${search}&page=${page}`)
      
      return {
        'users': user.data.data,
        'pagination': user.data
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
        deleteUser(id){
            //delete data from server
            this.$axios.delete(`/api/admin/users/${id}`)
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
  display: grid;
  border-bottom: 1px solid silver;
  font-family: 'Roboto Condensed', sans-serif;
  padding: 10px;
  letter-spacing:1px;
  grid-template-columns: 70% 40%;
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
.title{
  font-size:20px;
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
  .add-role{
    grid-template-columns: auto;
    grid-template-rows: auto auto;
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
  .add-role{
    grid-template-columns: auto;
    grid-template-rows: auto auto;
  }
}

</style>
