<template>
    <div class="video-layout">
        <div class="video">
            <iframe :src="link" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture" allowfullscreen v-lazy-load></iframe>
        </div>
        
        <div class="basic-info">
            <div class="title">
                {{title}}
            </div>
            <div class="info">Uploaded by : {{user}} , {{upload}}. Last Update: {{update}}.</div>
            <div class="deskripsi" v-html="desc"></div>
        </div>
    </div>

</template>
<script>
export default {
    props:{id:Number,link:String,title:String,desc:String,user:String,upload:String,update:String},
}
</script>
<style scoped>
    .video-layout{
        display: grid;
        grid-template-columns: auto auto;
        gap:20px;
        align-items:flex-start;
        justify-content: left;
       
    }
    .info{
        font-size: 13px;
        padding-bottom: 6px;
    }
    .title{
        font-size: 30px;
        font-weight: bold;
    }
    .basic-info{
        width: 370px;
        height: 215px;
       
    }
    iframe {
        width: calc(100vw - 30px);
        height: calc((100vw - 30px) * .5625);
        max-width: 500px;
        max-height: calc(500px * .5625);
    }
    @media screen and (max-width: 912px) {
        .video-layout{
            grid-template-columns: auto;
            grid-template-rows: auto auto;
            gap: 10px;
            align-items:center;
            justify-content: center;
        }
        .video{
            margin:auto;
        }
        iframe {
            width: calc(100vw - 30px);
            height: calc((100vw - 30px) * .5625);
            max-width: 500px;
            max-height: calc(500px * .5625);
        }
        
    }
     @media screen and (max-width: 520px) {
        .video-layout{
            grid-template-columns: auto;
            grid-template-rows: auto auto;
            gap: 10px;
            align-items:center;
            justify-content: center;
        }
        .video{
            margin:auto;
        }
        iframe {
            width: calc(100vw - 30px);
            height: calc((100vw - 30px) * .5625);
            max-width: 300px;
            max-height: calc(500px * .5625);
        }
        .basic-info{
            width: 300px;
            height: 215px;
       
        }
        .title{
            font-size: 15px;
        }
    }
</style>