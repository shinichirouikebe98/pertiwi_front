<template>
    <div class="layouts" data-aos="fade">
        <div class="sosmed">
            
            <div class="content whatsapp">
                <img src="@/assets/img/contact/whatsapp.png" alt="">
                <div class="info">
                    <div class="name"><h3>WHATSAPP</h3></div>
                    <div class="address"><h5>+62 361 467015 / +62 813 3859 7825</h5></div>
                    <div class="desc">The main communication platform that we use, we are very active on whatsapp, bookings etc will be responded to very quickly on whatsapp.</div>
                    <a href="https://wa.me/+6281338597825">
                        <b-button class="btn-grad">DIRECT TO OUR WHATSAPP</b-button>
                    </a>
                </div>
                
            </div>
        
    
            <div class="content ig">
                <img src="@/assets/img/contact/instagram.png" alt="">
                <div class="info">
                    <div class="name"><h3>INSTAGRAM</h3></div>
                    <div class="address"><h5>pertiwiadventurebali</h5></div>
                    <div class="desc">Also check our Instagram because there are many daily story updates that we share with you.</div>
                    <a href="https://instagram.com/pertiwiadventurebali">
                        <b-button class="btn-grad">GOTO OUR INSTAGRAM</b-button>
                    </a>
                
                </div>
            </div>
         
            <div class="content email">
                <img src="@/assets/img/contact/email.png" alt="" style="margin:auto; width:120px; height:120px;">
                <div class="info">
                    <div class="name"><h3>MAIL US</h3></div>
                    <div class="address"><h5>pertiwiadventure@gmail.com</h5></div>
                    <div class="desc">Send us email for futher information of our activity , prices etc.</div>
                    <b-button class="btn-grad" to="email">SEND US MAIL</b-button>
                </div>
            </div>

            

        </div>

        <div class="maps">
            <h3>ADDRESS</h3>
            <div class="map_address">Jl.Dewi Saraswati No 2 , Bongkasa Pertiwi, Kec. Abiansemal, Kabupaten Badung, Bali 80352</div>
            <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=-8.46572009581312,%20115.23794200461074&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
               </div>
            </div>
        </div>




        
    </div>
</template>
<script>

export default {

}
</script>
<style scoped>
.mapouter{position:relative;text-align:right;height:100%;width:100%;}
.gmap_canvas {overflow:hidden;background:none!important;height:80%;width:100%;}
.layouts{
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto;
    gap: 20px;
    
}
.sosmed{
    display: grid;
    grid-template-rows: auto auto auto;
    grid-template-columns: auto;
    gap: 30px;
}
.content{
    width: 550px;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: auto auto;
    gap:20px;
}
iframe{
    width: 100%;
    height: 100%;
}
h3{
    font-family: 'Kanit', sans-serif;
}
h6{
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
    letter-spacing: 2px;
}
.desc{
   font-family: 'Raleway', sans-serif;;
}
a{
    color: black;
}
a:hover{
    cursor: pointer;
}
.btn-grad {background-image: linear-gradient(to right, #77A1D3 0%, #79CBCA  51%, #77A1D3  100%)}
.btn-grad {
    margin-top:10px ;
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;            
    border-radius: 10px;
    display: block;
    border: none;
}

.btn-grad:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
}
a{
    text-decoration: none;
}
    @media screen and (max-width: 1260px) {
        .layouts{
            grid-template-columns: auto;
            grid-template: auto auto;
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
            grid-template: auto auto;
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