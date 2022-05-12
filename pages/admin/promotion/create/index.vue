<template>
    <div class="container" style="margin-top:30px;">
      
          <form @submit.prevent="storePromosi">
            <div class="header"><h1>TAMBAH-PROMO</h1></div>
            <div class="form-layout">
              
              <div class="title">
                  <input type="text" v-model="data.title" name="title" placeholder="Title">
                  <div v-if="validation.title" class="mt-2">
                    <b-alert show variant="danger">{{ validation.title[0] }}</b-alert>
                  </div>
              </div>
              <div class="berita">
                    <client-only placeholder="loading...">
                      <ckeditor-nuxt v-model="data.deskripsi" :config="editorConfig" />
                    </client-only>
                    <div v-if="validation.deskripsi" class="mt-2">
                      <b-alert show variant="danger">{{ validation.deskripsi[0] }}</b-alert>
                    </div>
              </div>
              <div class="gambar">
                    <input type="file" class="files" @change="handleFileChange"/>
                    <div v-if="validation.img" class="mt-2">
                        <b-alert show variant="danger">{{ validation.img[0] }}</b-alert>
                    </div>
              </div>
              <div class="submit">
                    <input type="submit" value="UPLOAD PROMO">
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
        title: 'Tambah - Promosi',
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
                image:''
            },
            validation: [],
            //config CKEDITOR
            editorConfig: {
                removePlugins: ['Title','pwimage','image'],
                placeholder: 'Ketikan Penjelasan Promosi Anda!'
            }

        }
    },
    methods:{
       handleFileChange(e) {

        //get image
        let image = this.data.image = e.target.files[0]

        //check fileType
        if (!image.type.match('image.*')) {

          //if fileType not allowed, then clear value and set null
          e.target.value = ''

          this.data.image = null


        }

      },
       async storePromosi(){
           let dataPromosi = new FormData();

           dataPromosi.append('title', this.data.title);
           dataPromosi.append('description', this.data.deskripsi);
           dataPromosi.append('img', this.data.image);

           await this.$axios.post('api/admin/promotions', dataPromosi)
           .then(() => {
              this.$router.push({
                name: 'admin-promotion'
              })
              this.$nuxt.refresh()
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