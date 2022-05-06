<template>
<div class="web">
    <!-- <SplashScreen /> -->

    <WebNavigationComponent/>


    <Intro/>


    <Nuxt/>

    <FooterComponent/>       

</div>

</template>
<script>

    import WebNavigationComponent from '../components/WebNavigationComponent.vue'
    import FooterComponent from '../components/FooterComponent.vue'
    import Intro from '@/components/Intro.vue'    

    export default {
        component:{
            WebNavigationComponent,
            FooterComponent,
            Intro

        },
        mounted(){

        },
        methods:{

        },


    }
</script>
<style>
h1{
        font-style: italic;
}


</style>