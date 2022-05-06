<template>
    <div class="container" style="margin-top:30px;" >
        <div class="layout">
            <div class="banner">
                <div class="banner-positioning">
                    <div class="basic-info">
                        {{title.substr(0, 100)}}...

                        <div class="tanggal"><font color="red">{{tanggal}}</font>, Di Terbitkan Oleh : <font color="blue">{{penerbit}}</font></div>
                    </div>
                    <div class="photo">
                        <img :src="`${$config.imageURL}/berita/`+gambar" alt="">
                    </div>

                </div>

            </div>

            <div class="content">
                <div class="title">
                    {{title}}
                </div>               
                <div class="main_content">
                    <div class="account">
                        <img src="@/assets/img/user_small.svg" style="width:23px; height:23px">
                        <div class="username">{{penerbit}}</div>
                    </div>
                    <div class="news">
                        <img src="@/assets/img/time_med.svg" style="width:23px; height:23px">  {{tanggal}}
                        <div v-html="berita" style="padding-top:10px;"></div>
                    </div>                   
                </div>
            </div>

        </div>

    </div>
    
</template>
<script>
export default {
    head: {
        link: [
            {
                rel: 'stylesheet',
                href:'https://fonts.googleapis.com/css2?family=Encode+Sans+SC&display=swap',
            },
        ],
    },
    computed: {
    //   user() {
    //      return this.$auth.user;
    //   }
    }, 

    layout:'detail',

    data(){
        return{
            berita : "",
            tanggal : "",
            penerbit : "",
            title : "",
            gambar : "",
            update: "",
        }
    },
    mounted(){
      //fetching data berita
      this.$axios.get(`/api/web/beritas/${this.$route.params.slug}`)

        .then(response => {
          //assing response data to state "data.title"
          this.title = response.data.data.title

          //assing response data to state "data.news"
          this.berita = response.data.data.news

          //assing response data to state "data.img"
          this.gambar = response.data.data.img

          //assing response data to state "data.tangal"
          this.tanggal = response.data.data.created_at

          //assing response data to state "data.updatex"
          this.update = response.data.data.updated_at

          this.penerbit = response.data.data.user.name


        })
    },
}
</script>
<style scoped>
.content{
    display: grid;
    grid-template-rows: auto auto;
    align-content: center;
    justify-content: center;

}
.tanggal{
    font-size: 10px;
}
.layout{
    display: grid;
    grid-template-columns: 400px auto;
    align-content: center;
    justify-content: center;
    gap: 40px;
    margin-top: 30px;
}
.title{
    font-family: 'Encode Sans SC', sans-serif;
    text-transform: uppercase;
    font-size: 2em;
    border-bottom: 1px solid silver;
    font-weight: 300;
    max-width: 800px;
}
.main_content{
    display: grid;
    grid-template-columns: auto auto;  
    align-content: center;
    justify-content: center;
    
}
.news{
    font-family: 'Encode Sans SC', sans-serif;
    max-width: 800px;
    letter-spacing: 1px;
    border-spacing: 2px;
    margin-top: 10px;
    overflow: scroll;
}
.account{
    display: flex;
    align-content: center;
    justify-content: center;
    font-family: 'Encode Sans SC', sans-serif;
    writing-mode: vertical-rl;
    text-orientation: upright;
    border-right: 1px solid silver;
    margin: 10px;
    padding-right: 10px;
}
.basic-info{
    width: 400px;
    background-color: #191716;
    max-height: 100px;
    color: white;
    padding: 15px;
}
.banner{
    display: grid;
    margin-top: 30px;
    max-width: 500px;
    align-content: flex-start;
    justify-content: center;
}
.photo{
    width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.photo img {
    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%;
    width: 100% !important;
    height: auto !important;
}
.banner-positioning
{
    position: sticky;
    top: 30px;
}


@media screen and (max-width: 1000px) {
    .main_content{
        grid-template-columns: auto;
        grid-template-rows: auto auto;
    }
    .account{
        writing-mode: horizontal-tb;
        text-orientation: none;
        border-right: none;
    }
    .layout{
        grid-template-columns: auto;
        grid-template-rows: auto auto;
    }
    .banner-positioning
    {
        position:unset;
    }
    .photo{
        width: 400px;
    }   
    .banner{
        margin: auto;
    } 
    
}
@media screen and (max-width: 480px) {
    .layout{
        grid-template-columns: auto;
        grid-template-rows: auto auto;
    }
    .main_content{
        grid-template-rows: auto auto; 
    }
    .account{
        writing-mode: horizontal-tb;
        text-orientation: none;
    } 
    .news{
        width: auto;
    }
    .basic-info{
        max-width: 300px;
    }
    .banner-positioning
    {
        position: unset;
    }
    .photo{
        width: 300px;
    }
    img{
        width: 300px;
    }  
}
</style>