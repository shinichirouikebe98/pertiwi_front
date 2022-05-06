<template>
<div class="web">

    <WebNavigationComponent/>

    <Nuxt/>

    <FooterComponent/>       

</div>

</template>
<script>
import WebNavigationComponent from '../components/WebNavigationComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
    component:{
        WebNavigationComponent,
        FooterComponent
    }

}
</script>
<style scoped>
.web{
    width: 100%;
}
*{
    scroll-behavior: smooth;
}
</style>