<template>
<div class="container-fluid">
    <div class="left-box">
        <span class="splash-text text-style">TRUST</span>
        <span class="splash-text text-style">YOUR</span>
        <span class="splash-text text-style">HOLIDAYS
        </span>
    </div>
    <div class="box">
        <img src="@/assets/img/logo/Logo.png" alt="">
    </div>
    <div class="right-box">
        <span class="splash-text text-style" style="text-align:right;">WITH US</span>
        <span class="splash-text text-style-pertiwi" style="text-align:right;">PERTIWI</span>
        <span class="splash-text text-style-pertiwi" style="text-align:right;">ADVENTURE</span>
    </div>
</div>

    
</template>
<script>
export default {
    mounted(){
        this.splash()
    },
    methods:{
        splash(){
            let text = document.querySelectorAll('.splash-text');
           
            setTimeout(()=>{
                
                text.forEach((span,idx)=>{
                    setTimeout(()=>{
                        span.classList.add('active');
                    },(idx+1) * 400)
    
                });
            })

            

        }
    }
    
}
</script>
<style scoped>
img{
    height: 100%;
    width: 100%;
    object-fit: contain;
   
}
.splash-text.active{
    bottom: 0;
    opacity: 1;
    transition: ease-in-out 0.5s;
}
.splash-text.fade{
    bottom: 0;
    opacity: 1;
    transition: ease-in-out 0.5s;
}
.box{
    width: 550px;
    height: 650px;
    margin-top: -100px;
}
.container-fluid{
    height: 90vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    background-image: url('@/assets/img/intro/intro.jpg');
    background-size: cover;
    
}
.left-box{
    margin-top: -100px ;
    width: 350px;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto auto auto;
    gap: 20px;

}
.right-box{
    margin-top: -100px ;
    width: 350px;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto auto auto;
    gap: 20px;

}

.splash-text{
    display: inline-block;
    position: relative;
    bottom: -20px;
    opacity: 0;

    
}
.text-style{
    font-family: 'Kanit', sans-serif;
    font-size: 65px;
    font-style: italic;
    animation: flow 3s ease-in-out infinite;
    background: linear-gradient(-60deg, #904e95, #e73c7e, #ee7752);
    background-size: 300%;

    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;

}
.text-style-pertiwi{
    font-family: 'Kanit', sans-serif;
    font-size: 65px;
    font-style: italic;
    animation: flow 3s ease-in-out infinite;
    background:linear-gradient(to right, #02AAB0 0%, #00CDAC  51%, #02AAB0  100%);
    background-size: 300%;

    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
@media screen and (max-width: 1280px) {

    .left-box{
        width: 300;
    }
    .right-box{
        width: 300;
        
    }
    .splash-text{
        font-size: 60px;
    }

}
@media screen and (max-width: 1024px) {
    .left-box{
        width: 300;
    }
    .right-box{
        width: 300;
        
    }
    .splash-text{
        font-size: 50px;
    }

}

@media screen and (max-width: 520px) {
    .container-fluid{
        background-size:unset;
    }
    .left-box{
        display: none;
    }
    .right-box{
        display: none;
    }


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

</style>