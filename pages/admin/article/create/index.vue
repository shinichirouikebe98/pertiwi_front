<template>
    <div class="container" style="margin-top:30px;">
      
          <form @submit.prevent="storeArticle">
            <div class="header"><h1>TAMBAH-PROMOSI</h1></div>
            <div class="form-layout">
              
              <div class="title">
                  <input type="text" v-model="data.title" name="title" placeholder="Title">
                  <div v-if="validation.title" class="mt-2">
                    <b-alert show variant="danger">{{ validation.title[0] }}</b-alert>
                  </div>
              </div>
              <div class="article">
                    <client-only placeholder="loading...">
                      <ckeditor-nuxt v-model="data.article" :config="editorConfig" />
                    </client-only>
                    <div v-if="validation.article" class="mt-2">
                      <b-alert show variant="danger">{{ validation.article[0] }}</b-alert>
                    </div>
              </div>
              <div class="category">
                  <select class="select" name="category" id="category" v-model="data.category">
                      
                      <option disabled value="" selected>Category</option>
                      <option>Introduction</option>
                      <option>Paintball_Banner</option>
                      <option>Atv_Banner</option>
                      <option>Rafting_Banner</option>
                      <option>VW_Banner</option>


                  </select>
                  <div v-if="validation.category" class="mt-2">
                    <b-alert show variant="danger">{{ validation.category[0] }}</b-alert>
                  </div>
              </div>

              <div class="submit">
                    <input type="submit" value="UPLOAD ARTICLE">
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
        title: 'Tambah - Article',
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
                article:'',
                category:''

            },
            validation: [],
            //config CKEDITOR
            editorConfig: {
                removePlugins: ['Title','pwimage','image'],
                placeholder: 'Ketikan Article Anda!'
            }

        }
    },
    methods:{
       async storeArticle(){
           let dataArticle = new FormData();

           dataArticle.append('title', this.data.title);
           dataArticle.append('category', this.data.category);
           dataArticle.append('article', this.data.article);

           await this.$axios.post('api/admin/articles', dataArticle)
           .then(() => {
              this.$router.push({
                name: 'admin-article'
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
.select{
  width:100%;
  height: 40px;
  border: none;
  border-bottom: 1px solid silver;
  padding-left: 5px;
}
textarea:focus, input:focus{
    outline: none;
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