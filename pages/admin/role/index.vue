<template>

    <div class="container">
        <h1>TAMBAH ROLE</h1>
        <form @submit.prevent="storeRole">
            <div class="add-role">
                <div class="role">
                        <b-form-input type="text" v-model="data.role" name="permission" placeholder="Role"></b-form-input>
                        <div v-if="validation.name" class="mt-2">
                        <b-alert show variant="danger">{{ validation.name[0] }}</b-alert>
                        </div>
                </div>  
                

            </div>
            <div class="permission">
              <br>
              <h3>PERMISSIONS LIST</h3>
              <b-form-group v-slot="{ ariaDescribedby }">
                <b-form-checkbox-group
                  id="checkbox-group-2"
                  v-model="data.selected"
                  :aria-describedby="ariaDescribedby"
                >
                  <b-form-checkbox v-for="permission in permissions" :key="permission" :value="permission">{{permission}}</b-form-checkbox>
                </b-form-checkbox-group>
              </b-form-group>
            </div>

            <div v-if="validation.permission" class="mt-2">
              <b-alert show variant="danger">{{ validation.permission[0] }}</b-alert>
            </div>
            <b-button type="submit" variant="outline-primary" style="margin-left:5px;">+ TAMBAH ROLE</b-button>
            
             
        </form>
        <hr>
        <div class="search"><b-form-input v-model="search" @keypress.enter="searchData" placeholder="SEARCH - Press Enter After Typing Keyword" style="letter-spacing:1px"></b-form-input></div>

        <div class="layout">
          <div class="list-content" v-for="role in roles" :key="role.id">
              <div class="basic-info">
                  <div class="uploaded">{{role.created_at}}, &nbsp;
                  <div class="title">{{role.name}}</div>
              </div>
          </div>
          <div class="list-actions">
              <b-button variant="outline-info" :to="{name: 'admin-role-detail-id', params: {id: role.id}}">DETAIL</b-button>
              <b-button variant="outline-warning" :to="{name: 'admin-role-edit-id', params: {id: role.id}}">EDIT</b-button>
              <b-button variant="outline-danger" @click="deleteRole(role.id)">- HAPUS ROLE</b-button>
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
                role:'',
                selected:[]
            },
            
            validation: [],
            search:'',
            permissions:''
        }
    },
    mounted(){

        this.$axios.get(`/api/admin/authorization/permissions-gates`)

        .then(response => {

          //assing response data to state "data.title"
          this.permissions = response.data;


        })

    },
       //watch query URL
    watchQuery: ["q", "page"],
    async asyncData({ $axios, query }) {

      //page
      let page = query.page ? parseInt(query.page) : ''

      //search
      let search = query.q ? query.q : ''

      //fetching news
      const roles = await $axios.$get(`/api/admin/authorization/roles?q=${search}&page=${page}`)
      
      return {
        'roles': roles.data,
        'pagination': roles
      }
    },
    methods:{
        async storeRole(){
           let dataRole = new FormData();

            dataRole.append('name', this.data.role);
            dataRole.append('permission', this.data.selected);


           await this.$axios.post('/api/admin/authorization/roles', dataRole)
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
        deleteRole(id){
            //delete data from server
            this.$axios.delete(`/api/admin/authorization/roles/${id}`)
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
