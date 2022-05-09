<template>
    <div class="paintball">
        <div class="container" data-aos="fade">
            <div class="top">
                <h1 align="center">PAINTBALL</h1>
            </div>
            <div class="content">
                
                <img src="@/assets/img/page/paintball_top.webp" alt="">
                <div class="article">
                    <h1 align="center">WHAT WE OFFER?</h1>
                    <p  v-html="bannerArticle">

                    </p>
                </div>
            </div>
        </div>

        <div class="container" data-aos="fade">
            <h1 align="center">PAINTBALL STANDART PACKAGE</h1>
            <div class="packet">
                <div class="box">
                    <b-table striped hover :items="normal" :fields="table_fields">
                        <template v-slot:cell(book) = book>
                           <nuxt-link :to="{name: 'email', params: {selected: normal[book.index].package}}"> <button class="btn-grad" >BOOK THIS PACKAGE</button> </nuxt-link>
                        </template>
                    </b-table>
                </div>

            </div>
             <div class="wear-and-bring" align="center">
               <h5>To Wear & Bring: Sport shoes, Casual Clothes, Pocket Camera, Extra Money</h5> 
            </div>           

        </div>
        <div class="price-include">
            <PriceInclude condition="Paintball Equipment"/>
        </div>
        <div class="pickup-schedule">
            <PickUpSchedule/>
        </div>
        <div class="container" id="contact">
            <h1 align="center">CONTACT US</h1>
                <LazyHydrate when-visible>
                    <ContactComponent />
                </LazyHydrate>
        </div>
        <div class="container">
                <GaleryComponent :filenames="data" />
        </div>

    </div>
</template>
<script>
import LazyHydrate from 'vue-lazy-hydration'
import ContactComponent from '@/components/ContactComponent'
import PriceInclude from '@/components/PriceInclude'
import GaleryComponent from '@/components/GaleryComponent'
import PickUpSchedule from '@/components/PickUpSchedule'
export default {
    head: {
        title: 'Conquer Most Terrific Atv Ride Road in Bali',

        htmlAttrs: {
            lang: 'en'
        },

        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description', 
                name: 'description',
                content: 'Pump Your Adrenaline Feels the Headshot With Us Pertiwi Paintball' 
            },
            { name: 'format-detection', content: 'telephone=6281338597825' },

            { hid: 'og:site_name', property: 'og:site_name', content: 'Pertiwi Adventure' },
            { hid: 'og:type', property: 'og:type', content: 'website' },
            { hid: 'og:url', property: 'og:url', content: 'www.pertiwiadventures.com/paintball' },
            { hid: 'og:title', property: 'og:title', content: 'Pump Your Adrenaline Feels the Headshot With Us Pertiwi Paintball' },
            { hid: 'og:description', property: 'og:description', content: 'Pump your adrenaline, Paintballing on the very best themed scenarios in Bali, featuring international standart equipment and game zones with us Pertiwi Adventure' },
            { hid: 'og:image', property: 'og:image', content: '/menu/p3.jpg' },
        ],      
    },
    layout:'detail',
    mounted(){
        this.getPaintballImage(),
        this.getBannerArticle()

    },
    components:{
        LazyHydrate,
        ContactComponent,
        PriceInclude,
        GaleryComponent,
        PickUpSchedule,


    },
    methods:{
        getPaintballImage(){
            this.$axios.get(`/api/web/images/paintball`)
            .then(response => {
                this.data = response.data.data;
            })
        },
        getBannerArticle(){
            this.$axios.get('/api/web/article/bpa')
            .then(response =>{
                this.bannerArticle = response.data.data[0].article;
            })
        },     
    },

    data(){
        return{
            normal:[
                {package:'Paintball 150 bullet',Price:'USD 65/ Pax'},
            ],
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
            data:[],
            bannerArticle:'',
            activitiesArticle:''

        }
    }
}
</script>
<style scoped>
a{
    text-decoration: none;
}
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
.content{
    background-color:#EEEBD3 ;
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: row;
    padding: 20px;
    gap: 30px;
}  

.article{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
    .content{
        flex-direction: column;
        height: auto;
    }
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
    .content{
        flex-direction: column;
        height: auto;
    }
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