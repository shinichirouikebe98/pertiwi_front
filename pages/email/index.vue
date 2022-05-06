<template>
    <div class="container">
       <h1 align="center">SEND EMAIL TO US!</h1>
      
        <div class="layout">
            
            <form @submit.prevent="onSubmit">
                
                <div class="basic-info">
                    <div class="purpose">
                        <label for="">Purpose Of Contacting :</label>
                        <b-form-select v-model="data.purpose" :options="purposeOptions"></b-form-select>

                        <div v-if="validation.purpose" class="mt-2">
                            <b-alert show variant="danger">{{ validation.purpose[0] }}</b-alert>
                        </div>                    
                    </div>
                    <hr>
                    
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

                    <div class="country">
                        <label for="">Country :</label>
                        <b-form-input placeholder="Country" v-model="data.country"></b-form-input>
                        <div v-if="validation.country" class="mt-2">
                            <b-alert show variant="danger">{{ validation.country[0] }}</b-alert>
                        </div>  
                    </div>

                    <div class="number">
                        <label for="">Phone Number :</label>
                        <b-form-input type="number"  placeholder="Number" v-model="data.phone"></b-form-input>
                        <div v-if="validation.phone" class="mt-2">
                            <b-alert show variant="danger">{{ validation.phone[0] }}</b-alert>
                        </div>  
                    </div>
                    <div class="activity">
                        <label for="">Activity :</label>
                        <b-form-select v-model="data.activity" :options="options"></b-form-select>

                        <div v-if="validation.activity" class="mt-2">
                            <b-alert show variant="danger">{{ validation.activity[0] }}</b-alert>
                        </div>                    

                    </div>
                    <div class="person">
                        <label for="">Person</label>
                        <b-form-input type="number" placeholder="Person" v-model="data.person"></b-form-input>
                        <div v-if="validation.person" class="mt-2">
                            <b-alert show variant="danger">{{ validation.person[0] }}</b-alert>
                        </div>  
                    </div>
                    <div class="messege">
                        <label for="">Messege :</label>
                        <b-form-textarea
                        id="textarea"
                        v-model="data.messege"
                        placeholder="Enter Messege..."
                        rows="8"
                        max-rows="8"
                        ></b-form-textarea>
                        <div v-if="validation.messege" class="mt-2">
                            <b-alert show variant="danger">{{ validation.messege[0] }}</b-alert>
                        </div>  
                    </div>


                    <hr>
                    <b-button type="submit" variant="outline-primary" @click.stop>SEND EMAIL</b-button>
                    <hr>
                    <b-alert show :variant="variant" v-model="alert">{{result_messege}}</b-alert>

                    <div class="messages" v-if="notificationMessage">
                        <p class="notification-text" :style="errorStatus ? 'color: red;' : ''">
                        {{ notificationMessage }}
                    </p>
      </div>


                </div>
            </form>



        </div>
    </div>
</template>
<script>
export default {
    layout:'detail',

    async mounted(){
        try {
            await this.$recaptcha.init();
        } 
        catch (e) {
            console.log(e);
        }
    },

    data(){
        return{
            //form data
            data:{
                name:'',
                email:'',
                purpose:'',
                country:'',
                phone:'',
                person:'',
                activity:'',
                messege:''
            },
            //validation
            alert:false,
            validation:[],
            variant:'success',
            result_messege:'',

            //captcha
            notificationMessage: "",
            errorStatus: false,
            loading: false,


            //options
            purposeOptions: [
                { value: '', text: 'Please select a Purpose',disabled: true},
                { value: 'Booking', text: 'Booking' },
                { value: 'Asking More Information', text: 'Asking More Information' },
                { value: 'Other', text: 'Other' },
            ],
            options: [
                { value: '', text: 'Please select an Activity',disabled:true },
                {
                    label: 'Combination Package',
                    options:[
                        {value:'ATV Single + Rafting',text:'ATV Single + Rafting'},
                        {value:'ATV Tandem + Rafting',text:'ATV Tandem + Rafting'},
                        {value:'ATV Single + Paintball full',text:'ATV Single + Paintball full'},
                        {value:'ATV Tandem + Paintball',text:'ATV tandem + Paintball'},
                        {value:'Rafting + Paintball',text:'Rafting + Paintball'},
                        {value:'Private + ATV Single or tandem',text:'Private + ATV Single or tandem'},
                        {value:'ATV Tandem + Private + Paint ball 150',text:'ATV tandem + Private + Paint ball 150'},
                        {value:'ATV Single + Rafting+ Paintball + VW experience',text:'ATV single + Rafting+ Paintball + VW experience'},
                    ]
                },
                {
                    label:'Paintball Package',
                    options:[
                         {value:'Paintball 150 bullet',text:'Paintball 150 bullet'},                                                                                            
                    ]
                },
                {
                    label:'ATV Package',
                    options:[
                         {value:'ATV Single',text:'ATV Single'},  
                         {value:'ATV Tandem',text:'ATV Tandem'},                                                                                                                    
                    ]
                },
                {
                    label:'Rafting Package',
                    options:[
                         {value:'Rafting',text:'Rafting'},  
                         {value:'Private Boat',text:'Private Boat'},                                                                                                                    
                    ]
                },
                {
                    label:'VW Safari Package',
                    options:[
                         {value:'VW Safari',text:'VW Safari'},  
                                                                                                                  
                    ]
                }               

            ]            


        }
    },

    created(){
        this.data.activity = this.$route.params.selected
    },

    watch: {
        notificationMessage(newValue) {
        // check if the new notification message is not of a truthy value
        if (!Boolean(newValue)) return;

        // Clear notification message after 5 seconds
        const context = this;
        setTimeout(() => {
            context.notificationMessage = "";
        }, 5000);
        }
    },


    methods:{
        async onSubmit() {
            try {
                this.loading = true;

                // Start the verification process
                const response = await this.verifyCaptcha();

                // Display error message if verification was not successful
                if (!response.success) {
                this.$recaptcha.reset();
                this.loading = false;
                this.errorStatus = true;
                this.notificationMessage =
                    "There was an error with your reCaptcha verification. Please try again.";
                return;
                }

                // If verification was successful, send the message
                await this.sendMail();

                this.errorStatus = false;
                this.notificationMessage =
                "Thank you for reaching out. We will get back to you as soon as possible";

                this.loading = false;
                this.$recaptcha.reset();
            } 
            catch (error) {
                this.loading = false;
                console.log(error);
            }
        },

        async verifyCaptcha() {
            try {

                const token = await this.$recaptcha.execute();
                console.log(token)
              

            const response = await this.$axios.$post(
            `/captcha-api/siteverify?secret=${this.$config.secretKEY}&response=${token}`
            );

                return response;
            } catch (error) {
                this.loading = false;
                return error;
            }
        },


        async sendMail(){
           let dataMail = new FormData();

           dataMail.append('name', this.data.name);
           dataMail.append('email', this.data.email);
           dataMail.append('purpose', this.data.purpose);
           dataMail.append('activity', this.data.activity);
           dataMail.append('country', this.data.country);
           dataMail.append('person', this.data.person);
           dataMail.append('messege', this.data.messege);
           dataMail.append('phone', this.data.phone);

           await this.$axios.post('api/web/send-email', dataMail)
           .then( response => {
               console.log(response.data)
               this.alert = response.data.show
               this.result_messege = response.data.messege
               this.variant = response.data.type

            //   this.$router.push({
            //     name: 'admin-user'
            //   })
            //   this.$nuxt.refresh()
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
h1{
    font-size: 4em;
    font-family: 'Kanit', sans-serif;

    font-style: italic;
}
.authorization{
    align-self: start;
    width: 500px;
}



</style>