<template>
    <div class="container video-layout">
        <div class="video">
            <iframe width="300" height="215" :src="link" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture" allowfullscreen></iframe>
        </div>
        
        <div class="basic-info">
            <div class="title">
                {{title}}
            </div>
            <div class="info">Uploaded by : {{user}} , {{upload}}. Last Update: {{update}}.</div>
            <div class="deskripsi" v-html="desc"></div>
            <div class="actions">
                <nuxt-link :to="{name:'admin-video-edit-id',params:{id:id}}"><b-button variant="outline-warning">UPDATE</b-button></nuxt-link>&nbsp;
                <b-button variant="outline-danger" @click="deleteVideo">DELETE</b-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{id:Number,link:String,title:String,desc:String,user:String,upload:String,update:String},
    methods:{
        deleteVideo(){
            this.$emit('deleteFunction', this.id)
        }
    }
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
        max-width: 400px;
        max-height: calc(400px * .5625);
    }
    @media screen and (max-width: 800px) {
        .video-layout{
            grid-template-columns: auto;
            grid-template-rows: auto auto;
            gap: 10px;
        }
        .video{
            margin:auto;
        }
        .basic-info{
            width: 350px;
        }
        
    }
    @media screen and (max-width: 800px) {
        .video-layout{
            grid-template-columns: auto;
            grid-template-rows: auto auto;
            gap: 10px;
        }
        .basic-info{
            width: 350px;
        }
        .video{
            margin:auto;
        }
        iframe{
            width: 100% !important;
        }
        
    }

</style>