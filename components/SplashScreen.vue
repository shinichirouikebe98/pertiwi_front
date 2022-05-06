<template>
<div class="intro">
    <div class="logo-box">
        <span class="splash-logo">PERTIWI</span> &nbsp; <span class="splash-logo">ADVENTURE</span>
    </div>
</div>
    
</template>
<script>
export default {
    head: {
        link: [
            {
                rel: 'stylesheet',
                href:'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Raleway:wght@500&display=swap',
            },
        ],
    },
    mounted(){
        this.splash();
    },
    methods:{
        splash(){
        let box = document.querySelector('.logo-box');
        let logo = document.querySelectorAll('.splash-logo');
        let intro = document.querySelector('.intro');

        console.log(box)
        window.addEventListener('DOMContentLoaded',()=>{
                //fade-in
                setTimeout(()=>{
                    // logo.forEach((span,idx)=>{
                    //     console.log(idx);
                    //     setTimeout(()=>{
                    //         span.classList.add('active');
                    //     },(idx+1) * 400)
                    // });
                    // //fade-out
                    // setTimeout(()=>{
                    //     logo.forEach((span,idx)=>{
                    //         setTimeout(()=>{
                    //             span.classList.remove('active');
                    //             span.classList.add('fade');
                    //         },(idx+1) * 50)
                    //     })  
                    // },2000)
                    // //closing
                    // setTimeout(()=>{
                    //     intro.style.display = 'none';
                    // },2500)

                })
            })

        }
    }
    
}
</script>
<style scoped>
.intro{
    width: 100vw;
    height: 100vh;
    background-color:#ffff;
    opacity: 1;
    transition: 1s;
    position: fixed;
    z-index: 9999;
}
.logo-box{
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%,-50%);
    
}
.splash-logo{
    display: inline-block;
    position: relative;
    bottom: -20px;
    font-family: 'Kanit', sans-serif;
    opacity: 0;
    font-size: 3em;
    
}
.splash-logo.active{
    bottom: 0;
    opacity: 1;
    transition: ease-in-out 0.5s;
}
.splash-logo.fade{
    bottom: 150px;
    opacity: 0;
    transition: ease-in-out 0.5s;

}

</style>