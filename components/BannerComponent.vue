<template>
    <div class="container-fluid" style="margin-top:30px"  data-aos="fade">
        <h1 align="center">WHAT WE OFFER?</h1>
        <div class="banner-box-top">
            <div class="banner-paintball">
                <div class="jargon-group">
                    <div class="jargon">PUMP UP ADRENALINE</div>
                    <div class="jargon">FEEL THE</div>
                    <div class="jargon">HEADSHOT</div>
                </div>

                <div class="btn-group">
                   <nuxt-link :to="{name:'paintball'}"> <button class="btn-grad" >PAINTBALL</button></nuxt-link>

                </div>

            </div>
            <div class="banner-rafting">
                <div class="jargon">CHALLENGE</div>
                <div class="jargon">THE MOST TERRIFIC</div>
                <div class="jargon">AYUNG RIVER</div>
                <div class="btn-group">
                    <nuxt-link :to="{name:'paintball'}"> <button class="btn-grad" >RAFTING</button></nuxt-link>

                </div>

            </div>
        </div>

        <div class="banner-box-bottom" style="margin-top:30px" data-aos="fade">
            <h1 align="center">OUR BEST SELLER</h1>
            <div class="banner-atv">
                <div class="jargon atv">CONQUER</div>
                <div class="jargon atv">THE BEST</div>
                <div class="jargon atv">AND CHALLENGING</div> 
                <div class="jargon atv">ROAD IN BALI</div>
                <div class="btn-group">
                    <nuxt-link :to="{name:'paintball'}"> <button class="btn-grad" >ATV</button></nuxt-link>

                </div>
                    
            </div>
        </div>

    </div>
</template>
<style scoped>
.jargon{
    font-family: 'Oswald', sans-serif;
    font-size: 3rem;
    line-height: 90%;
    color: #fff;
    margin-left: 30px;
    margin-top:30px
}
.banner-box-top{
    width: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
    justify-content: center;
    align-items: center;
    margin:0px;
    padding: 0px;
}
h1{
    font-size: 4em;
    font-family: 'Kanit', sans-serif;
    font-style: italic;
    animation: flow 3s ease-in-out infinite;
    background: linear-gradient(-60deg, #904e95, #e73c7e, #ee7752);
    background-size: 300%;

    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
.banner-box-bottom{
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
}
.banner-paintball{
    margin: auto;
    width: 95%;
    height: 80vh;
    background-size: cover;
    background-image: url('@/assets/img/banner/paintball.jpg');
    /* border-radius: 20px; */
}
.banner-atv{
    width: 98%;
    height: 80vh;
    background-image: url('@/assets/img/banner/atv.jpg');
    background-size: cover;
    /* border-radius: 20px; */
    margin: auto;
}
.banner-rafting{
    margin: auto;
    width: 95%;
    height: 100%;
    background-size: cover;
    background-image: url('@/assets/img/banner/rafting.JPG');
    /* border-radius: 20px; */
}
.btn-group{
    margin: 30px;
    display: block;

}
.atv{
    font-size: 4em;
}
a{
    text-decoration: none;
}

.btn-grad {background-image: linear-gradient(to right, #FF512F 0%, #DD2476  51%, #FF512F  100%)}
.btn-grad {

    padding: 15px 45px;
    margin-left:5px ;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto; 
    color: white;      
    border: none;      
    border-radius: 10px;
    display: block;
}

.btn-grad:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
}

@keyframes flow {
  0% {
    background-position: 0 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0 50%;
  }
}

@media screen and (max-width: 1024px) {

    .banner-atv{
        width: 100%;
        height: 100%;
    }
    .banner-paintball{
        height: 100%;
    }
    .banner-rafting{
        height: 100%;
    }
    .jargon{
        font-size: 2rem;
    }
    .btn-group{
        flex-direction: column;
        gap: 10px;
    }
    .banner-box-top{
        gap: 20px;
    }
    

}

@media screen and (max-width: 540px) {
    .banner-box-top{
        height: 1000px;
        grid-template-columns: 100%;
        grid-template-rows: auto auto;
    }
    .btn-group{
        flex-direction: column;
        gap: 10px;
        width: auto;
    }
    .book{
        display: none;
    }
    .btn-grad{
       width: 50%;
    }


}   
</style>
<script>
export default {
    
}
</script>