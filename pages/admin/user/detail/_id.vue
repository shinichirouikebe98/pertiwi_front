<template>
    <div class="container">

        <h1>{{name}}</h1>
        <hr>
        <div class="layout">
            <div class="basic-info">
                <div class="email">
                    <label for="">Email:</label>
                    <b-form-input readonly :value="email"></b-form-input>
                </div>

                <div class="Created">
                    <label for="">Created At:</label>
                    <b-form-input readonly :value="created_at"></b-form-input>
                </div>

                    <div class="updated">
                        <label for="">Updated At:</label>
                    <b-form-input readonly :value="updated_at"></b-form-input>
                </div>

            </div>

            <div class="authorization">
                <div class="role">
                    <label for="">Role</label>
                     <b-form-input readonly :value="role"></b-form-input>
                </div>
                <div class="permission">
                    <label for="">Permission</label>
                    <div class="list">

                     <span v-for="permission in permissions" :key="permission.id">{{permission.name}}</span>

                    </div>                
                </div>
            </div>



        </div>
    </div>
</template>
<script>
export default {
    layout:'admin',
    data(){
        return{
            name:'',
            email:'',
            created_at:'',
            updated_at:'',
            role:'',
            permissions:[]
       
        }
    },
    mounted(){
        this.getUserDetail()
    },
    methods:{
        getUserDetail(){
            this.$axios.get(`/api/admin/users/${this.$route.params.id}`)
            .then(response => {
                let tmp = []
                this.name = response.data.data.name,
                this.email = response.data.data.email,
                this.created_at = response.data.data.created_at,
                this.updated_at = response.data.data.updated_at,
                this.role = response.data.data.roles[0].name
                

                for(let i = 0; i<response.data.data.roles[0].permissions.length; i++){
                    tmp.push({id:i , name:response.data.data.roles[0].permissions[i].name})
                }

                this.permissions = tmp


            })
        }
        
    }


}
</script>
<style scoped>
.layout{
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: auto auto;
    grid-template-rows: auto;
    gap: 30px;
}
.basic-info{
    align-self: start;
    width: 500px;
}
.authorization{
    align-self: start;
    width: 500px;
}
.list{
    display: grid;
    grid-template-columns: auto auto auto;
    justify-items: stretch;
    gap:10px
}
span{
    border-radius: 7px;
    background: #e0e0e0;
    padding: 5px;
}
@media screen and (max-width: 1024px) {

.layout{
    grid-template-columns: auto ;
    grid-template-rows: auto auto;

}
.basic-info{
    align-self: start;
    width: auto;
}
.authorization{
    align-self: start;
    width: auto;
}


}
@media screen and (max-width: 920px) {



}
@media screen and (max-width: 480px) {



}



</style>