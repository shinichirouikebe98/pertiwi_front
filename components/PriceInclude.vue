<template>
 <div class="container" data-aos="fade">
     <div class="box">   
        <div class="price">PRICE INCLUDE</div>
        <br>
        <div class="condition">
            <ul>
                <li>Hotel Transfer & Pick up service</li>
                <li>Welcome Drink</li>
                <li>Lunch</li>
                <li>Insurance</li>
                <li>Towel and Shower Facilities</li>
                <li>{{condition}}</li>
            </ul>
        </div>        
     </div>

 </div>   
</template>

<script>
export default {

    props:{condition:String}

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

.price{
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
    .price{
        font-size: 2.5em;
    }
}

</style>