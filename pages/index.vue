<template>
<div>
    <!---head--->
    <BannerComponent/>
    
    <div class="container main" data-aos="fade-up">
        <div class="wrapper">
             <h1 align="center" style="margin-top:100px;">QUICK INTRODUCTIONS!</h1>
        </div>
        
            
            <div class="layout">
                <div class="banner">
                    <div class="photo">
                        <img src="@/assets/img/menu/b3.jpg" alt="Atv/Quadbike adventure" style="border-radius: 10px 10px 0px 0px;" v-lazy-load>
                     </div>
                     <div class="activity-info">
                         <h3>ATV (QUADBIKE)</h3>
                         <p>
                             Take you to an amazing experience riding on quad bikes with long and challenging tracks along with the
rice fields, jungle, muddy track, and natural Bali traditional village. Guide by our professional guide. It’s
safe and suitable for beginners and professional
                         </p>
                         <h3 align="center">PRICES</h3>
                 
                         <div class="price">
                             <div style="font-size:20px">SINGLE :</div>
                             <h6 align="center"> <font color="salmon" style="font-size:40px;"> USD 90</font>/ Pax. </h6>
                             <h6 align="center">"2 HOURS TRIP".</h6> 

                             <div style="font-size:20px">TANDEM :</div>
                             <h6 align="center"><font color="salmon" style="font-size:40px;"> USD 130</font>/ 2 Pax. </h6>
                             <h6 align="center">"2 HOURS TRIP".</h6>  
                             <br>
                         </div>


                          <b-button class="btn-grad" to="/atv">CHECK!</b-button>
                     </div>
                </div>
                <div class="banner">
                    <div class="photo">
                        <img src="@/assets/img/menu/p3.jpg" alt="Paintball adventure" style="border-radius: 10px 10px 0px 0px; v-lazy-load">
                     </div>
                      <div class="activity-info">
                         <h3>PAINTBALL</h3>
                        <p>
                            In the mood for some adrenaline pumping? Go ahead and try Paintball Bali Pertiwi. This area is one of
the largest paintball arenas in Bali. The area is 3 acres wide with 3 different battlefield scenarios, such as
Junk Yard, The Bunkers, and Vietcong Village. The equipment used for the game is safety ensured. So
you dont have to worry about it hurting while playing and battling your friends.
                        </p>

                        <h3 align="center">PRICES</h3>
                        <div class="price">

                             <div style="font-size:20px">150 Bullets :</div>
                             <h6 align="center"><font color="salmon" style="font-size:40px;"> USD 65</font>/ Pax</h6>
                             <h6 align="center">INCLUDING INTERNATIONAL STANDART EQUIPMENT</h6> 
                             <br>
                         </div>

                          <b-button class="btn-grad" to="/paintball">CHECK!</b-button>
                     </div>                    
                </div>
                <div class="banner">
                    <div class="photo">
                        <img src="@/assets/img/menu/r3.jpg" alt="Rafting adventure" style="border-radius: 10px 10px 0px 0px;" v-lazy-load>
                     </div>
                     <div class="activity-info">
                         <h3>RAFTING</h3>
                         <p>
                                                        Experience white water rafting adventure as descending lush tropical forest to the heart of Bali Ayung
River. Welcome you with friendly staff and professional guides who are experts in water safety and
highly skilled in white water rafting. After a thorough safety briefing, you will pass through stunning
scenery as you do thrilling class 2-3 rapids and discover hidden waterfalls.
                         </p>
                         <h3 align="center">PRICES</h3>
                        <div class="price">
                             <div style="font-size:20px">Rafting :</div>
                             <h6 align="center"> <font color="salmon" style="font-size:40px;"> USD 70</font>/ Pax</h6>


                             <div style="font-size:20px">Private Boat :</div>
                             <h6 align="center"><font color="salmon" style="font-size:40px;"> USD 210</font><br>/Up to 4 person</h6>
                             <br>
                         </div>

                          <b-button class="btn-grad" to="/rafting">CHECK!</b-button>
                     </div>
                </div>
            </div>
    </div>
    <!---topics--->
    <div class="container topics" data-aos="fade-up">
      <div class="wrapper">      
          <h1 align="center" style="margin-top:100px;">TOPICS</h1>
          <div class="short-messege">Daily Topic About Us Pertiwi Adventure.</div>
      </div>

      <div class="layout">
            <div class="banner" v-for="berita in news" :key="berita.id">
                 <nuxt-link :to="{name:'news-slug',params:{slug:berita.slug}}">
                     
                    <div class="basic-info">
                      {{berita.title.substr(0, 60)}}....

                        <div class="tanggal"><font color="salmon">{{berita.created_at}}</font>, Di Terbitkan Oleh : <font color="lightblue">{{berita.user.name}}</font></div>
                    </div>
                    <div class="photo">
                        <img :src="`${$config.imageURL}/berita/`+berita.img" alt="">
                    </div>
                     
                 </nuxt-link>
            </div>
      </div>
      <b-pagination v-model="beritaPagination.current_page" :total-rows="beritaPagination.total" :per-page="beritaPagination.per_page"
       @change="changeBeritaPage" align="right" class="mt-3">
      </b-pagination>  
    </div>  
    <!---promosi--->
    <div class="container promotions" v-show="promotions !== null"  data-aos="fade-up">
     <div class="wrapper">
        <h1 align="center" style="margin-top:100px;">PROMOTION</h1>
        <div class="short-messege">Check Also And Don't Miss The Promos We Offer.</div>
     </div>


      <div class="layout">
            <div class="banner" v-for="promosi in promotions" :key="promosi.id">
                <nuxt-link :to="{name: 'promotion-slug', params: {slug: promosi.id}}">
                    <div class="photo">
                        <img :src="`${$config.imageURL}/promotion/`+promosi.img" alt="">
                    </div>
                    <div class="basic-info" style="border-radius: 0px 0px 30px 30px;">
                      {{promosi.title.substr(0, 100)}}....

                        <div class="tanggal"><font color="salmon">{{promosi.created_at}}</font>, Uploaded By : <font color="lightblue">{{promosi.user.name}}</font></div>
                    </div>
                </nuxt-link>

            </div>
      </div>
    <b-pagination v-model="promotionPagination.current_page" :total-rows="promotionPagination.total" :per-page="promotionPagination.per_page"
       @change="changePromotionPage" align="right" class="mt-3">
    </b-pagination> 
    </div> 

    <!---videolist--->
    <div class="container videoList" data-aos="fade-up" id="video">
        <div class="wrapper">
            <h1 align="center" style="margin-top:70px;">VIDEO</h1>
            <div class="short-messege" style="margin-bottom:30px;">
            For those of you who are curious about our activities, we provide interesting content on the most popular social media Youtube.
            </div>
        </div>
        <LazyHydrate when-visible>
            <WebVideoList v-for="video in videos" 
                :key="video.id" 
                :link="video.link" 
                :title="video.title" 
                :desc="video.description"
                :upload="video.created_at"
                :user="video.user.name"
                :update="video.updated_at"
            />
        </LazyHydrate>

    <b-pagination v-model="videoPagination.current_page" :total-rows="videoPagination.total" :per-page="videoPagination.per_page"
       @change="changeVideoPage" align="right" class="mt-3">
    </b-pagination> 
    </div> 

    <!---contact--->
    <div class="container contact" id="contact">
        <div class="wrapper">
            <h1 align="center">CONTACT US!</h1>
            <div class="short-messege">
                <p>Reach us by contacting the social media below, bookings will be very quickly responded to on WHATSAPP social media.</p> 
            </div>
            <div>
                <LazyHydrate when-visible>
                    <ContactComponent />
                </LazyHydrate>
            </div>
        </div>
    </div>
</div>

</template>
<script>

import WebVideoList from '@/components/WebVideoList.vue'
import ContactComponent from '@/components/ContactComponent'
import BannerComponent from '@/components/BannerComponent'
import LazyHydrate from 'vue-lazy-hydration'

export default {
    head: {

    },
    layout:'home',
    data(){
        return{

        }
    },
    components:{
       LazyHydrate,
       WebVideoList,
       ContactComponent,
       BannerComponent,

    },
    methods:{
        //change page pagination
        changeBeritaPage(page) {
            this.$router.push({
            path: this.$route.path,
            query: {
                beritaPage: page
            }
            });
        },
        changePromotionPage(page) {
            this.$router.push({
            path: this.$route.path,
            query: {
                promotionPage: page
            }
            });
        },
        changeVideoPage(page) {
            this.$router.push({
            path: this.$route.path,
            query: {
                videoPage: page
            }
            });
        },

    },

  //watch query URL
  watchQuery: ["beritaPage","promotionPage","videoPage"],
  async asyncData({ $axios, query }) {

        //page
        let beritapage = query.beritaPage ? parseInt(query.beritaPage) : ''
        let promotionpage = query.promotionPage ? parseInt(query.promotionPage) : ''
        let videopage = query.videoPage ? parseInt(query.videoPage) : ''

        //fetching news
        const news = await $axios.$get(`/api/web/beritas?page=${beritapage}`)
        const promotions = await $axios.$get(`/api/web/promotions?page=${promotionpage}`)
        const videos = await $axios.$get(`/api/web/videos?page=${videopage}`)       

        return {
          'videos': videos.data.data,
          'videoPagination': videos.data,
          'news': news.data.data,
          'promotions': promotions.data.data, 
          'beritaPagination': news.data,
          'promotionPagination': promotions.data,
        }
    },
    mounted(){
    
    }

}
</script>
<style scoped>
a:hover{
    text-decoration: none;
}

h3{
 font-family: 'Kanit', sans-serif;
 height: 50px;
}
.activity-info{
    display: grid;
    padding: 20px;
    grid-template-rows: auto auto auto;
    width: 350px;
    background-color: #191716;
    height: auto;
    color: white;
    border-radius: 0px 0px 30px 30px;
}
.short-messege{
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Raleway', sans-serif;
    letter-spacing: 2px;
    
}
.wrapper{
    display: grid;
    justify-items: center;
    align-items: center;
    gap: 20px;
}
.welcome{
    width: 60%;
    font-family: 'Raleway', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
}
.basic-info{
    width: 350px;
    background-color: #191716;
    height: 100px;
    color: white;
    padding: 15px;
}
.rounded{
     border-radius: 0px 0px 30px 30px;
}
.banner{
    margin-top: 30px;
    max-width: 500px;
}
.layout{
    display: grid;
    grid-template-columns: 400px 400px 400px;
    gap: 10px;
    justify-content: center;
}
.photo{
    width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.photo img {

    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%
}
.tanggal{
  font-size:12px;
}
img{
    width: 100% !important;
    height: auto !important;
}
h1{
    font-size: 4em;
    font-family: 'Kanit', sans-serif;
}
.btn-grad {background-image: linear-gradient(to right, #77A1D3 0%, #79CBCA  51%, #77A1D3  100%)}
.btn-grad {
    /* margin: 10px;
    padding: 15px 45px; */
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;            
    border-radius: 10px;
    display: block;
    border: none;
}

.btn-grad:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
}
@media screen and (max-width: 1024px) {
   .layout{
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: repeat(auto);
        gap: 10px;
    } 
    h1{
        font-size: 3em;
        font-family: 'Kanit', sans-serif;
    }
    .banner .photo{
        width: 500px;
    }
    .activity-info{
        width: 500px;
    }
    .basic-info{
        width: 500px;
    }

}

@media screen and (max-width: 520px) {
    .photo{
        width: 300px;
    }
    .activity-info{
        width: 300px;
        height: auto;
    }
    .basic-info{
        width: 300px;
    }
    h1{
        font-size: 3em;
        
    }
    .welcome{
        width: 90%;
    }
    .banner .photo{
        width: 80vw;
    }
    .activity-info{
        width: 80vw;
    }
    .basic-info{
        width: 80vw;
    }
}

span {
  display: inline-block;
  width: auto;
  height: auto;
  position: relative;
}

span::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: red;
  z-index: -1;
  animation: ripple 1s ease-out infinite;
}
@keyframes ripple {
  from {
    opacity: 1;
    transform: scale(0);
  }
  to {
    opacity: 0;
    transform: scale(1.5);
  }
}

</style>