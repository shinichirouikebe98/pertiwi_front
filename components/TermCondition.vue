<template>
 <div class="container" data-aos="fade">
     <div class="box">   
        <h1>TERM & CONDITIONS</h1>
        <div class="messege">Before making a booking with us, it is recommended that you first carefully read and understand the terms and conditions that apply to the activities we offer below. Here are the terms and conditions in our company.</div>
        <br>
        <div class="term">
            <ul>
                <li>Harga tidak termasuk Penjemputan/Tranportasi</li>
                <li>Hanya berlaku jika anda booking disini</li>
                <li>Harga tidak termasuk handuk</li>
                <li>Bebas Mengunakan fasilitas seperti toilet dan shower</li>
                <li>{{term}}</li>
                <li>Termasuk asuransi</li>
                <li>Free Wifi</li>


            </ul>
        </div>        
     </div>

 </div>   
</template>

<script>
export default {

    props:{term:String}

}
</script>

<style scoped>
.box{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.messege{
    width: 70%;
}
h1{
    font-size: 4em;
    font-family: 'Kanit', sans-serif;
    font-style: italic;
}
li{
    list-style-type: decimal;
    font-style: italic;
    font-size: 1rem;
    font-weight: 800;  
}
@media screen and (max-width: 480px) {
    h1{
        font-size: 2.5em;
    }
}

</style>