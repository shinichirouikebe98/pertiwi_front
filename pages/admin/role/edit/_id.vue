<template>

    <div class="container">
        <h1>EDIT ROLE</h1>
        <form @submit.prevent="updateRole">
            <div class="update-role">
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
            <b-button type="submit" variant="outline-warning" style="margin-left:5px;">EDIT ROLE</b-button>
            
             
        </form>

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
        this.getAllPermission()
        this.getPermissionOnRoles()
    },

    async updateRole(){
        let dataRole = new FormData();

        dataRole.append('name', this.data.role);
        dataRole.append('permission', this.data.selected);
        dataRole.append("_method", "PATCH");

        await this.$axios.post(`api/admin/authorization/roles/${this.$route.params.id}`, dataRole)
        .then(() => {
            this.$router.push({
            name: 'admin-edit'
            })
        })
        .catch(error => {
            //assign error to state "validation"
            this.validation = error.response.data
        })
    },

    methods:{
        getAllPermission(){
            this.$axios.get(`/api/admin/authorization/permissions-gates`)
            .then(response => {

            //assing response data to state "data.permission"
            this.permissions = response.data;


            })
        },
        getPermissionOnRoles(){
            this.$axios.get(`/api/admin/authorization/roles/${this.$route.params.id}`)
            .then(response => {

                //assing response data to state "data.name"
                this.data.role = response.data.name;

                for(let i=0;i < response.data.permissions.length; i++){

                    this.data.selected.push(response.data.permissions[i].name);
                }
            })
        },
        async updateRole(){
            let dataRole = new FormData();

            dataRole.append('name', this.data.role);
            dataRole.append('permission', this.data.selected);
            dataRole.append("_method", "PATCH");

            await this.$axios.post(`api/admin/authorization/roles/${this.$route.params.id}`, dataRole)
            .then(() => {
                this.$router.push({
                name: 'admin-role'
                })
            })
            .catch(error => {
                //assign error to state "validation"
                this.validation = error.response.data
            })
        },

    }

}
</script>
<style scoped>
*{
  font-family: 'Roboto Condensed', sans-serif;
}

@media screen and (max-width: 720px) {
  .update-role{
    grid-template-columns: auto;
    grid-template-rows: auto auto;
  }
}
@media screen and (max-width: 480px) {
  .update-role{
    grid-template-columns: auto;
    grid-template-rows: auto auto;
  }
}

</style>
