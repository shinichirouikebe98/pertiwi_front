<template>
    <div class="container" style="margin-top:30px;">
      
          <form @submit.prevent="storeVideo">
            <div class="header"><h1>TAMBAH-VIDEO</h1></div>
            <div class="form-layout">
              
              <div class="title">
                  <input type="text" v-model="data.title" name="title" placeholder="Title">
                  <div v-if="validation.title" class="mt-2">
                    <b-alert show variant="danger">{{ validation.title[0] }}</b-alert>
                  </div>
              </div>
              <div class="id">
                    <input type="text" v-model="data.link" name="Video Id" placeholder="Video Id"/>
                    <div v-if="validation.link" class="mt-2">
                        <b-alert show variant="danger">{{ validation.link[0] }}</b-alert>
                  </div>
              </div>
              <div class="deskripsi">
                    <client-only placeholder="loading...">
                      <ckeditor-nuxt v-model="data.deskripsi" :config="editorConfig" />
                    </client-only>
                    <div v-if="validation.deskripsi" class="mt-2">
                      <b-alert show variant="danger">{{ validation.deskripsi[0] }}</b-alert>
                    </div>
              </div>

              <div class="submit">
                    <input type="submit" value="UPLOAD VIDEO">
              </div>
              </div>
          </form>
    </div>
</template>
<script>
export default {
    //layout
    layout: 'admin',

    //meta
    head() {
      return {
        title: 'Tambah - Video',
      }
    },
    components: {
      'ckeditor-nuxt': () => {
        if (process.client) {
          return import('@blowstack/ckeditor-nuxt')
        }
      },
    },
    data(){
        return{
            data:{
                title:'',
                deskripsi:'',
                link:''
            },
            validation: [],
            //config CKEDITOR
            editorConfig: {
                removePlugins: ['Title','pwimage','image'],
                placeholder: 'Ketikan Penjelasan Video Anda!'
            }

        }
    },
    methods:{
       async storeVideo(){
           let dataVideo = new FormData();

           dataVideo.append('title', this.data.title);
           dataVideo.append('description', this.data.deskripsi);
           dataVideo.append('link', this.data.link);

           await this.$axios.post('api/admin/videos', dataVideo)
           .then(() => {
              this.$router.push({
                name: 'admin-video'
              })
           })
           .catch(error => {
                //assign error to state "validation"
                this.validation = error.response.data
           })
       }
    }



}
</script>
<style scoped>
.container{
  display: flex;
  justify-content: center;
  align-content:center;
}
.form-layout{
  display: grid;
  grid-template-rows: auto auto auto auto;
  border: 2px solid black;
}
input[type=text]{
  background-color: transparent;
  border: none;
  border-bottom: solid silver 1px;
  width: 100%;
  padding-left: 10px;
  height: 35px;

}
input[type=file]::file-selector-button {
  background-color:black;
  cursor: pointer;
  border:2px black solid;
  color: white;
  height: 40px;
  width: 200px;
  margin-left:0;
}
input[type=file]::file-selector-button:hover {
  background-color:white;
  color: black;
  transition: 0.6s;
  border: none;
  border-right:1px silver solid;

}

textarea:focus, input:focus{
    outline: none;
}
input[type=submit]{
  background-color: black;
  color: white;
  border:1px black solid;
  width: 100%;
  height:40px
}
input[type=submit]:hover{
  background-color: white;
  color: black;
  transition: 0.6s;
  border: none;
  border-top:1px silver solid;
}
</style>
<style>
  .ck-editor__editable {
      min-height: 250px;
      
  }
  .ck.ck-editor {
    max-width: 800px;
    background-color: transparent;
    border: none;
    
  }

  @media screen and (max-width: 720px) {
    .ck.ck-editor {
      max-width: 480px;
    }
    
  }
  @media screen and (max-width: 480px) {
    .ck.ck-editor {
      max-width: auto;
    }
 
  }
  h1{
    letter-spacing: 8px;
  }

</style>