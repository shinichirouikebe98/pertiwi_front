<template>
    <div class="package">

        <div class="container" data-aos="fade">
            <h1 align="center">COMBINATION PACKAGE</h1>
            <div class="packet">
                <div class="box">
                    <b-table striped hover :items="combination" :fields="table_fields">
                        <template v-slot:cell(book) = book>
                            <nuxt-link :to="{name: 'email', params: {selected: combination[book.index].package}}"> <button class="btn-grad" >BOOK THIS PACKAGE</button> </nuxt-link>
                        </template>
                    </b-table>
                </div>
            <div class="wear-and-bring" align="center">
               <h5>To Wear & Bring: Sport shoes, Casual Clothes, Pocket Camera, Extra Money</h5> 
            </div>

            </div>

        </div>

        <div class="container" id="contact">
            <h1 align="center">CONTACT US</h1>
            <ContactComponent/>
        </div>
    </div>
</template>
<script>
import ContactComponent from '@/components/ContactComponent'

export default {
    head: {

    },
    layout:'detail',
    mounted(){


    },
    components:{
        ContactComponent,


    },
    methods:{
      
    },

    data(){
        return{
            table_fields:[
                {
                    label: 'Package',
                    key: 'package'
                },
                {
                    label: 'Price',
                    key: 'Price',
                    tdClass: 'text-center'
                },
                {
                    label: 'Book',
                    key: 'book',
                    tdClass: 'text-center'
                }
            ],
            combination:[
                {package:'ATV Single + Rafting',Price:'USD 140 / pax'},
                {package:'ATV Tandem + Rafting',Price:'USD 250 / per 2 pax'},
                {package:'ATV Single + Paintball full',Price:'USD 135 / per pax'},
                {package:'ATV tandem + Paintball',Price:'USD 240 / per 2 pax'},
                {package:'Rafting + Paintball',Price:'USD 120 / per pax'},
                {package:'Private + ATV Single or tandem',Price:'USD 320/ per 2 pax'},
                {package:'ATV tandem + Private + Paint ball 150',Price:'USD 450/ per 2 pax'},
                {package:'ATV single + Rafting+ Paintball + VW experience',Price:'USD 250/ pax'},

            ],
            data:[],
            bannerArticle:'',
            activitiesArticle:''

        }
    }
}
</script>
<style scoped>
.welcome{
    width: 60%;
    font-family: 'Raleway', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
}
.wrapper{
    display: grid;
    grid-template-columns: 100%;
    grid-auto-rows: auto;
    justify-items: center;
    gap: 20px;
    margin-bottom: 50px;
}
.messege{
    width: 700px;
}
.box{
    width: 600px;
}

h1{
    font-size: 4em;
    font-family: 'Kanit', sans-serif;
}
h2{
    font-family: 'Kanit', sans-serif;
}
h3{
  font-family: 'Kanit', sans-serif;  
}
.container{
    margin-bottom: 50px;
}
.packet{
    display: flex;
    flex-direction:column ;
    justify-content: center;
    align-items: center;
    gap:40px;
    margin-bottom:40px ;

}
.salmon{
    color: red;
}
.btn-grad {background-image: linear-gradient(to right, #FF512F 0%, #DD2476  51%, #FF512F  100%)}
.btn-grad {
    padding: 5px 25px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto; 
    color: white;      
    border: none;      
    border-radius: 10px;
    display: block;
}
@media screen and (max-width: 768px){

    .messege{
        width: auto;
    }
    .packet{
        flex-direction: column;
        width:100%;
    }
    .box{
        width: 100%;
    }

    b-table{
        width:100%;
        font-size: 1rem;
        word-break: break-all;
    }
}
@media screen and (max-width: 480px){

    .messege{
        width: auto;
    }
    .packet{
        flex-direction: column;
        width:100%;
    }
    .box{
        width: 100%;
    }
    b-table{
        width: 100%;
        font-size: 1rem;
        word-break: break-all;
        word-wrap: none;
    }
    h1{
        font-size: 2.5em;
    }
}


</style>