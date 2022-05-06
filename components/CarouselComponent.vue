<template>
    <div class="kotak" style="padding:0; margin:0px;">
        <div class="box">
            <div class="quotes">
                <div class="sentence">
                    <div class="jargon">PUMP UP</div>
                    <div class="jargon">YOUR ADRENALINE</div>
                    <div class="jargon">WITH US</div>
                    <div class="jargon">PERTIWI ADVENTURE</div>
                </div>

                <div class="tag-group">               
                     <span class="tag">#atv</span>
                     <span class="tag">#paintball</span>
                     <span class="tag">#rafting</span>
                </div> 
                
                <button class="btn-grad">BOOKING NOW</button> 
            </div>

            <div class="photos">
                <div class="wrapper">
                        <img v-for="image in images" :key="image.img" :src="`${$config.imageURL}/image/`+image.img" :alt="image.name">
                </div>
            </div>

        </div>

    </div>
</template>
<script>

export default {
    data(){
        return{
            images:'',
            homeArticle:'',
            introArticle:'',
        }
    },
    mounted(){
        this.getIntroImg();
    },
    methods:{
        getIntroImg(){
            this.$axios.get(`/api/web/images/carousel`)
            .then(response => {
                let header = [];

                console.log(response.data.data[0])
                for(let i = 0; i<response.data.data.length; i++){
                    header.push({'img':response.data.data[i].img,'name':response.data.data[i].name})
                }
                this.images = header;
                
            })
        },

    }
    
}
</script>
<style lang="scss" scoped>
.kotak{
    height: 90vh;
    background-color: black;
}
.box{
    display: grid;
    grid-template-columns: 50% 50%;
    width: 100vw;
    height: 100%;
    background-size: cover;
}
h6{
    font-family: 'Roboto Condensed', sans-serif;
    letter-spacing: 1px;
}
.tag-group{
    margin-left: 10px;
}
.tag{
    border-radius: 7px;
    background: #e0e0e0;
    padding: 5px;
}
.quotes{
    // background-color:black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
.sentence{
    display: flex;
    flex-direction: column;
    justify-content:left;
    align-items: left;
    padding-bottom: 40px;
    margin-top:-100px
}
.jargon{
    padding: 0;
    margin: 0;
    font-family: 'Oswald', sans-serif;
    font-size: 4rem;
    line-height: 100%;
    color: white;
}

.container-fluid{
    display: grid;
    align-items: center;
    justify-content: center;

}
h1{
    font-family: 'Kanit', sans-serif;
    font-size: 3em;
    color:black;
}
.photos{
    margin-top:-100px;
    overflow: hidden;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    // background-color: black;
}
.wrapper{
  position: relative;
  flex-grow: 1;
  margin: auto;
  max-width: 100%;
  max-height: 1000px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 2vmin;
  justify-content: start;
  align-items: center;
}
img {
  z-index: 1;
  grid-column: span 2;
  max-width: 100%;
  margin-bottom: -52%;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);

  transition: all .25s;
  
  &:nth-child(7n+1) {
    grid-column: 2 / span 2;
  }
  
  &:hover {
    z-index: 2;
    transform: scale(2);
  }
}


.btn-grad {background-image: linear-gradient(to right, #FF512F 0%, #DD2476  51%, #FF512F  100%)}
.btn-grad {
    margin-top: 30px;
    padding: 15px 45px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto; 
    color: white;      
    border: none;      
    border-radius: 10px;
    display: block;
}

.btn-grad:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
}

a{
    text-decoration: none;
    color:white;
}
@media screen and (max-width: 1024px) {
    .kotak{
        height: 100vh;
    }
    .box{
        grid-template-columns: auto;
        grid-template-rows: auto auto;

    }
    .jargon{
        font-size: 2.5rem;
    }
    .sentence{
        margin-top: 0;
    }
    .photos{
        margin-top: 0;
    }
    .photos{
        display: none;
    }



}
@media screen and (max-width: 920px) {
    .kotak{
        height: 100vh;
    }
    .box{
        grid-template-columns: auto;
        grid-template-rows: auto auto;

    }
    .jargon{
        font-size: 2.5rem;
    }
    .sentence{
        margin-top: 0;
    }
    .photos{
        margin-top: 0;
    }
    .photos{
        display: none;
    }



}
@media screen and (max-width: 480px) {
    .kotak{
        height: 100vh;
    }
    .box{
        grid-template-columns: auto;
        grid-template-rows: auto auto;

    }
    .sentence{
        margin-top: 0;
    }
    .photos{
        margin-top: 0;
    }
    .photos{
        display: none;
    }


}
</style>


         