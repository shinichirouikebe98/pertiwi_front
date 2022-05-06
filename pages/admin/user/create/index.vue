<template>
    <div class="container">
       
        <div class="layout">
            
            <form @submit.prevent="registerUser">
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

                    <div class="password">
                        <label for="">Password :</label>
                        <b-form-input type="password" placeholder="Password" v-model="data.password"></b-form-input>
                        <div v-if="validation.password" class="mt-2">
                            <b-alert show variant="danger">{{ validation.password[0] }}</b-alert>
                        </div>  
                    </div>

                    <div class="confirm-password">
                        <label for="">Confirm Password :</label>
                        <b-form-input type="password" placeholder="Confirm Your Password" v-model="data.confirm_password"></b-form-input>
                        <div v-if="validation.confirmPassword" class="mt-2">
                            <b-alert show variant="danger">{{ validation.confirmPassword[0] }}</b-alert>
                        </div>  
                    </div>
                    <div class="role">
                        <b-form-group label="Role :">
                            <b-form-radio v-model="data.selected" v-for="role in roles" :key="role.value" :value="role.value">{{role.text}}</b-form-radio>
                        </b-form-group>
                        <div v-if="validation.role" class="mt-2">
                            <b-alert show variant="danger">{{ validation.role[0] }}</b-alert>
                        </div>    
                    </div>
                    <hr>
                    <b-button type="submit" variant="outline-primary">+ REGISTER USER</b-button>

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
                confirm_password:'',
                selected:''
            },
            roles:[],
            validation:[]


        }
    },
    mounted(){
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
                this.roles = tmp;

            })
        },
        async registerUser(){
           let dataUser = new FormData();

           dataUser.append('name', this.data.name);
           dataUser.append('email', this.data.email);
           dataUser.append('password', this.data.password);
           dataUser.append('confirmPassword', this.data.confirm_password);
           dataUser.append('role', this.data.selected);

           await this.$axios.post('api/admin/users', dataUser)
           .then(() => {
              this.$router.push({
                name: 'admin-user'
              })
           })
           .catch(error => {
                //assign error to state "validation"
                this.validation = error.response.data
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
    grid-template-columns: auto;
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



</style>