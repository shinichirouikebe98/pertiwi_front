<template>
  <div class="container">
    <div class="card">
        <div class="imgBx">
          <img :src="require(`@/assets/img/${img}`)" alt="" >
        </div>
        <div class="contentBx">
        <h2>{{title}}</h2>
        <nuxt-link :to="{name:link}">Manage</nuxt-link>
        </div>
    </div>
</div>
</template>
<script>
export default {
  props: { title: String, link: String, number: Number ,img: String},
}
</script>
<style scoped>
*{
  font-family: 'Poppins', sans-serif;
}
body{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #131313;
}
.container{
  position: relative;
  padding-top: 30px;
}
img{
  height: 150px;
  width: 150px;
  color:white;
}
.container .card{
  position: relative;
  width: 320px;
  height: 450px;
  background: #232323;
  border-radius: 20px;
  overflow: hidden;
}
.container .card:after{
  position: absolute;
  top: 30%;
  left: -20%;
  color: rgba(255,255,25,0.05)
}

.container .card .imgBx{
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  z-index: 9;
  width: 100%;
  height: 220px;
  transition: 0.5s;
}

.container .card:hover .imgBx{
  top: 0%;
  transform: translateY(0%);
}

.container .card .imgBx img{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 270px;
}

.container .card .contentBx{
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  text-align: center;
  transition: 0.5s;
  z-index: 10;
}

.container .card:hover .contentBx{
  height: 210px;
}

.container .card .contentBx h2{
  position: relative;
  font-weight: 600;
  letter-spacing: 1px;
  color: #fff;
  margin: 0;
}

.container .card .contentBx a{
  display: inline-block;
  padding: 10px 20px;
  background: #fff;
  border-radius: 4px;
  margin-top: 10px;
  text-decoration: none;
  font-weight: 600;
  color: #111;
  opacity: 0;
  transform: translateY(50px);
  transition: 0.2s;
  margin-top: 25;
}

.container .card:hover .contentBx a{
  opacity: 1;
  transform: translateY(0px);
  transition-delay: 0.3s;
  
}

</style>