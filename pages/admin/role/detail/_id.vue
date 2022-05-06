<template>

    <div class="container">
        <h1>DETAIL ROLE</h1>
        <b-table striped hover :items="items"></b-table>
    </div>

    
</template>
<script>
export default {
    layout:'admin',
    data(){
        return{
            items:[
                {
                    role:'',
                    dibuat:'',
                    permissions:''

                }
            ]
            

        }
    },
    mounted(){
        this.getPermissionOnRoles()
    },

    methods:{
        getPermissionOnRoles(){
            this.$axios.get(`/api/admin/authorization/roles/${this.$route.params.id}`)
            .then(response => {

                //assing response data to state "data.name"
                this.items[0].role = response.data.name;
                this.items[0].dibuat = response.data.created_at;
                let array = [];
                for(let i=0;i < response.data.permissions.length; i++){

                    array.push(response.data.permissions[i].name);
                }

                this.items[0].permissions = array.join(' , ');
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
