<template>
    <div class="atv">
        <div class="container" id="atv" data-aos="fade">
            <div class="top">
                <h1 align="center">ATV / QUADBIKE</h1>
            </div>
            <div class="content">
                
                <img src="@/assets/img/page/offers.webp" alt="">
                <div class="article">
                    <h2 align="center">WHAT WE OFFER?</h2>
                    <p v-html="bannerArticle">

                    </p>
                </div>
            </div>
        </div>

        <div class="container" data-aos="fade">

            <h2 align="center">ATV STANDART PACKAGE</h2>
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
        <div class="term-condition">
            <PriceInclude condition="Atv Equipment" />
        </div>
        <div class="pickup-schedule">
            <PickUpSchedule/>
        </div>
        <div class="container" id="contact">
            <h1 align="center">CONTACT US</h1>
                <ContactComponent/>
        </div>
        <div class="container">
                <GaleryComponent :filenames="data" />
        </div>

    </div>
</template>
<script>
import LazyHydrate from 'vue-lazy-hydration'

export default {
    head: {
        title: 'Conquer Most Terrific Atv Quad Road in Ubud Bali',

        htmlAttrs: {
            lang: 'en'
        },

        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description', 
                name: 'description',
                content: 'Best and Most Longest Atv Quad Ride Road in Ubud Bali , With Us Pertiwi Adventure We Provide Terrific Atv Ride For 2 Hours Long . Get Ready to Conquesr and Challenge Our Tracks.' 
            },
            { hid: 'keywords', name: 'keywords', content: 'atv, bali, quadbike, ubud' },


            { hid: 'og:site_name', property: 'og:site_name', content: 'Pertiwi Quad Adventure' },
            { hid: 'og:type', property: 'og:type', content: 'website' },
            { hid: 'og:url', property: 'og:url', content: 'www.pertiwiadventures.com/atv' },
            { hid: 'og:title', property: 'og:title', content: 'Conquer Most Terrific Atv Ride Road in Bali' },
            { hid: 'og:description', property: 'og:description', content: 'Best and Most Longest Atv Ride Road in Bali , With Us Pertiwi Adventure We Provide Terrific Atv Ride For 2 Hours Long . Get Ready to Conquesr and Challenge Our Tracks.' },
            { hid: 'og:image', property: 'og:image', content: '/menu/b3.jpg' },
        ],      
    },
    layout:'detail',
    
    components:{
        LazyHydrate,
        ContactComponent: () => import('@/components/ContactComponent'),
        PriceInclude: () => import('@/components/PriceInclude'),
        GaleryComponent: () => import('@/components/GaleryComponent'),
        PickUpSchedule: () => import('@/components/PickUpSchedule'),
        

    },
    created(){
        this.getAtvImage(),
        this.getBannerArticle()
    },
    methods:{
        getAtvImage(){
            this.$axios.get(`/api/web/images/atv`)
            .then(response => {
                this.data = response.data.data;
            })
        },
        getBannerArticle(){
            this.$axios.get('/api/web/article/baa')
            .then(response =>{
                this.bannerArticle = response.data.data[0].article;
            })
        }, 
    },
    data(){
        return{
            normal:[
                {package:'ATV Single',Price:'USD 90 / Pax'},
                {package:'ATV Tandem',Price:'USD 130 / 2 Pax'},

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
    },

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
.single{
    width: 400px;
}
.tandem{
    width: 400px;
}
h1{
    font-size: 4em;
    font-family: 'Kanit', sans-serif;
}
h2{
    font-size: 4em;
    font-family: 'Kanit', sans-serif;
    font-style: italic;
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
    flex-direction:row ;
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
    .single{
        width: 100%;
    }
    .tandem{
        width: 100%;
    }
    b-table{
        width:100%;
        font-size: 1rem;
        word-break: break-all;
    }
    img{
        width: 100% !important;
        height: auto !important;
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
    .single{
        width: 100%;
    }
    .tandem{
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
    h2{
        font-size: 2.5em;
    }
    img{
        width: 100% !important;
        height: auto !important;
    }
}

</style>