<template>
    <div class="container">
       
        <div class="layout">
            
            <form @submit.prevent="updateUser">
                <h1>REGISTER USER</h1>
                <div class="basic-info">
                    <div class="name">
                        <label for="">Name :</label>
                        <b-form-input placeholder="Name" v-model="data.name"></b-form-input>
                        <div v-if="validation.name" class="mt-2">
                            <b-alert show variant="danger">{{ validation.name[0] }}</b-alert>
                        </div>  
                    </div>
                    <div class="email">
                        <label for="">Email :</label>
                        <b-form-input placeholder="Email" v-model="data.email"></b-form-input>
                        <div v-if="validation.email" class="mt-2">
                            <b-alert show variant="danger">{{ validation.email[0] }}</b-alert>
                        </div>  
                    </div>
                    <div class="authorization">
                        <div class="role">
                            <label for="">Role</label>
                            <b-form-select v-model="data.selected_role" :options="data.role"></b-form-select>
                        </div>
                        <div v-if="validation.role" class="mt-2">
                            <b-alert show variant="danger">{{ validation.role[0] }}</b-alert>
                        </div>  
                    </div>
                    <hr>
                    <h3>Change Password</h3>
    

                    <b-form-checkbox v-model="checked">Change Your Password?</b-form-checkbox>

                    <div class="password">
                        <label for="">New Password:</label>
                        <b-form-input v-model="data.password" type="password" id="password" :readonly="checked == false" placeholder="New Password"></b-form-input>
                        <div v-if="validation.password" class="mt-2">
                            <b-alert show variant="danger">{{ validation.password[0] }}</b-alert>
                        </div>  
                    </div>
                    <div class="password">
                        <label for="">Confirm New Password:</label>
                        <b-form-input v-model="data.confirm_password" type="password" id="confinrmPassword" :readonly="checked == false"  placeholder="Confirm Password" ></b-form-input>
                        <div v-if="validation.confirmPassword" class="mt-2">
                            <b-alert show variant="danger">{{ validation.confirmPassword[0] }}</b-alert>
                        </div>  
                    </div>
                    {{data.password}}
                    <hr>
                    <b-button type="submit" variant="outline-warning">EDIT USER</b-button>
                   
                </div>
            </form>



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
                password:'',
                role:[],
                selected_role:'',
                confirm_password:'',

            },
            checked:false,
            validation:[]


           

       
        }
    },

    created(){
        this.getUserDetail()
        this.getAllRoles()

        
    },
    methods:{
        getAllRoles(){
            this.$axios.get(`/api/admin/authorization/roles-names`)
            .then(response => {
                let tmp = []
                for(let i = 0; i < response.data.data.length; i++){
                    tmp.push({value:response.data.data[i].name,text:response.data.data[i].name})
                }
                this.data.role = tmp;

            })
        },
        getUserDetail(){
            this.$axios.get(`/api/admin/users/${this.$route.params.id}`)
            .then(response => {

                this.data.name = response.data.data.name,
                this.data.email = response.data.data.email,
                this.data.selected_role = response.data.data.roles[0].name

                //readonly the password and conf pass field 
                // this.checked = false

            })
        },
        async updateUser(){
           let dataUser = new FormData();

           dataUser.append('name', this.data.name);
           dataUser.append('email', this.data.email);
           dataUser.append('password', this.data.password);
           dataUser.append('confirmPassword', this.data.confirm_password);
           dataUser.append('role', this.data.selected_role);
           dataUser.append("_method", "PATCH");

           await this.$axios.post(`api/admin/users/${this.$route.params.id}`, dataUser)
           .then(() => {
              this.$router.push({
                name: 'admin-user'
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
.layout{
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: auto auto;
    grid-template-rows: auto;
    gap: 30px;
}
.basic-info{
    width: 500px;
}
.authorization{
    align-self: start;
    width: 500px;
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