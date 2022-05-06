<template>
<div>
    <div>
        <NavigationComponent/>
    </div>
    <Nuxt/>
    <!-- <div>
       <AdminFooter/>       
    </div> -->

</div>

</template>
<script>
import NavigationComponent from '../components/NavigationComponent.vue'
import AdminFooter from '../components/AdminFooter.vue'

export default {
    middleware: 'auth',

    component:{
        NavigationComponent,
        AdminFooter
    },



}
</script>

