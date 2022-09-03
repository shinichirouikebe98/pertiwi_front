<template>
    <div class="container">
        <div class="logo">
          <img src="@/assets/img/logo/Logo.webp" alt="" style="margin:auto; width:305px; height:340px;">
        </div>
        <h2 class="messege">
            Reach us by Taping or Clicking one of the Links Bellow.
        </h2>
        

        <div class="layout">

            <a href="https://wa.me/+6281338597825">
                <div class="btn-grad-wa">
                    <img src="@/assets/img/sosmedlinks/wa.png" alt="" style="margin:auto; width:40px; height:40px;">&nbsp;
                    WHATSAPP BOOKING (QUADBIKE , RAFTING , PAINTBALL)
                </div>
            </a>
            <a href="https://instagram.com/pertiwiadventurebali">
            <div class="btn-grad-ig">
                <img src="@/assets/img/sosmedlinks/ig.png" alt="" style="margin:auto; width:40px; height:40px;">&nbsp;
                OUR INSTAGRAM
            </div>   
            </a>
            
            <a href="https://pertiwiadventure.com/" target="blank">
            <div class="btn-grad-web">
                <img src="@/assets/img/sosmedlinks/web.png" alt="" style="margin:auto; width:40px; height:40px;">&nbsp;
                OUR OFFICIAL WEBSITE
            </div>
            </a>

            <a href="https://mail.google.com/mail/?view=cm&to=pertiwiadventure@gmail.com&su=SUBJECT&body=Messege" target="blank">
            <div class="btn-grad-mail">
                <img src="@/assets/img/sosmedlinks/mail.png" alt="" style="margin:auto; width:40px; height:40px;">&nbsp;
                MAIL US AT pertiwiadventure@gmail.com
            </div>
            </a>

            <a href="https://goo.gl/maps/mKSh3m2f64CW8B5G6" target="blank">    
            <div class="btn-grad-maps">
                <img src="@/assets/img/sosmedlinks/map.png" alt="" style="margin:auto; width:40px; height:50px;">&nbsp;
                REACH US WITH GOOGLE MAPS
            </div>   
            </a>       
        </div>
        
    </div>
    
</template>
<script>
export default {
    
}
</script>
<style scoped>
.messege{
    display:flex;
    justify-content:center;
    align-item:center;
    width:100%;
    font-family: 'Kanit', sans-serif;

}
.logo{
    display:flex;
    justify-content:center;
    align-item:center;
    flex-direction:column; 
}
.container{
    display:flex;
    justify-content:center;
    align-item:center;
    flex-direction:column;
    font-family: 'Raleway', sans-serif;

}
.layout{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-item:center;
}
         
        .btn-grad-wa {
            background-image: linear-gradient(to right, #02AAB0 0%, #00CDAC  51%, #02AAB0  100%);
            margin: 10px;
            padding: 15px 45px;
            text-align: center;
            text-transform: uppercase;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;            
            box-shadow: 0 0 20px #eee;
            border-radius: 10px;
            display: block;
          }

          .btn-grad-wa:hover ,.btn-grad-web:hover,.btn-grad-ig:hover,.btn-grad-maps:hover,.btn-grad-mail:hover {
            background-position: right center; /* change the direction of the change here */
            color: #fff;
            text-decoration: none;
          }
                   
         .btn-grad-ig {
            background-image: linear-gradient(to right, #ff6e7f 0%, #bfe9ff  51%, #ff6e7f  100%);
            margin: 10px;
            padding: 15px 45px;
            text-align: center;
            text-transform: uppercase;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;            
            box-shadow: 0 0 20px #eee;
            border-radius: 10px;
            display: block;
          }
                   
         .btn-grad-mail{
            background-image: linear-gradient(to right, #D31027 0%, #EA384D  51%, #D31027  100%);
            margin: 10px;
            padding: 15px 45px;
            text-align: center;
            text-transform: uppercase;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;            
            box-shadow: 0 0 20px #eee;
            border-radius: 10px;
            display: block;
          }

                   
         .btn-grad-maps{
            background-image: linear-gradient(to right, #16A085 0%, #F4D03F  51%, #16A085  100%);
            margin: 10px;
            padding: 15px 45px;
            text-align: center;
            text-transform: uppercase;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;            
            box-shadow: 0 0 20px #eee;
            border-radius: 10px;
            display: block;
          }

         
        .btn-grad-web{
            background-image: linear-gradient(to right, #77A1D3 0%, #79CBCA  51%, #77A1D3  100%);
            margin: 10px;
            padding: 15px 45px;
            text-align: center;
            text-transform: uppercase;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;            
            box-shadow: 0 0 20px #eee;
            border-radius: 10px;
            display: block;
          }


         
         

         
         


a{
    text-decoration: none;
}
    @media screen and (max-width: 1260px) {
        .layouts{
            grid-template-columns: auto;
            grid-template-rows: auto ,auto;
        }
        .content{
            width: 100%;
            grid-template-rows: auto auto;
            grid-template-columns: auto;
            justify-content: center;
            align-items: center;
        }
        .info{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
        img{
            margin: auto;
        }
        .desc{
            width: 70%;
        }
        .maps{
            margin-top: 30px;
            margin-bottom: 30px;
        }

    }
    @media screen and (max-width: 520px) {
        .layouts{
            grid-template-columns: auto;
            grid-template-rows: auto ,auto;
        }
        .content{
            width: 100%;
            grid-template-rows: auto auto;
            grid-template-columns: auto;
        }
        .maps{
            margin-top: 30px;
            margin-bottom: 30px;

        }
        


    }

</style>