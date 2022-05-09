<template>
    <div class="gallery" data-aos="fade">
        <h1 align="center">OUR MEMORIES</h1>
        <div class="short-messege">
            <p>Our memories with guests who have enjoyed activities with us Pertiwi Adventure.</p> 
        </div>     
        <div class="photos">

          <div v-for="filename in filenames" :key="filename.img"> 
                <img  :src="`${$config.imageURL}/image/`+filename.img" :alt="filename.name" v-lazy-load>

          </div>
        </div>
    </div>
   
</template>
<script>
export default {
    props:{filenames:Array},
    
}
</script>
<style scoped>
/* .gallery{
    display: flex;
    justify-content: center;
    align-items: center;
} */
img{
    width: 100% !important;
    height: auto !important;
}
.short-messege{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.photos {
    width: 100%;
    line-height: 0;
    -webkit-column-count: 4;
    -webkit-column-gap:   10px;
    -moz-column-count:    4;
    -moz-column-gap:      10px;
    column-count:         4;
    column-gap:           10px;
}
.photos img {
    width: 100% !important;
    height: auto !important;
    padding-top: 10px;
}
img:hover{
  transform: scale(1.3);
}

img{
  transition: transform 0.2s;
}
h1{
    font-size: 4em;
    font-family: 'Kanit', sans-serif;
}
@media screen and (max-width: 720px) {
.photos {
    width: 100%;
    line-height: 0;
    -webkit-column-count: 3;
    -webkit-column-gap:   10px;
    -moz-column-count:    3;
    -moz-column-gap:      10px;
    column-count:         3;
    column-gap:           10px;
}
}
@media screen and (max-width: 480px) {
.photos {
    width: 100%;
    line-height: 0;
    -webkit-column-count: 2;
    -webkit-column-gap:   10px;
    -moz-column-count:    2;
    -moz-column-gap:      10px;
    column-count:         2;
    column-gap:           10px;
}
h1{
    font-size: 2.5em;
}
}
</style>