<template>

    <div class="container">
        <h1>TAMBAH PERMISSION</h1>
        <form @submit.prevent="storePermission">
            <div class="add-permission">
                <div class="permission">
                        <b-form-input type="text" v-model="data.permission" name="permission" placeholder="Permission"></b-form-input>
                        <div v-if="validation.permission" class="mt-2">
                        <b-alert show variant="danger">{{ validation.permission[0] }}</b-alert>
                        </div>
                </div>  
                <b-button type="submit" variant="outline-primary" style="margin-left:5px;">+ TAMBAH PERMISSION</b-button>

            </div>

        </form>
        <hr>
        <div class="search"><b-form-input v-model="search" @keypress.enter="searchData" placeholder="SEARCH - Press Enter After Typing Keyword" style="letter-spacing:1px"></b-form-input></div>

        <div class="layout">
          <div class="list-content" v-for="permission in permissions" :key="permission.id">
              <div class="basic-info">
                  <div class="uploaded">{{permission.created_at}}, &nbsp;
                  <div class="title">{{permission.name}}</div>
              </div>
          </div>
          <div class="list-actions">
              <b-button variant="outline-danger" @click="deletePermission(permission.id)">- HAPUS PERMISSION</b-button>
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
                permission:'',
            },
            validation: [],
            search:''
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
      const permissions = await $axios.$get(`/api/admin/authorization/permissions?q=${search}&page=${page}`)
      return {
        'permissions': permissions.data.data,
        'pagination': permissions.data
      }
    },
    methods:{
        async storePermission(){
           let dataPermission = new FormData();

            dataPermission.append('name', this.data.permission);

           await this.$axios.post('/api/admin/authorization/permissions', dataPermission)
           .then(() => {
               this.$nuxt.refresh()
           })
           .catch(error => {
                //assign error to state "validation"a
                this.validation = error.response.data
           })
       },
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
        deletePermission(id){
            //delete data from server
            this.$axios.delete(`/api/admin/authorization/permissions/${id}`)
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
.add-permission{
  display: grid;
  grid-template-columns: 70% 30%;
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
  .add-permission{
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
  .add-permission{
    grid-template-columns: auto;
    grid-template-rows: auto auto;
  }
}

</style>
