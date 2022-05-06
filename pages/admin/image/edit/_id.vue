<template>
    <div class="container" style="margin-top:30px;" >
          <form @submit.prevent="updateImage">
            <div class="header"><h1>UPDATE-IMAGE</h1></div>
            <div class="form-layout">
              
              <div class="name">
                  <input type="text" v-model="data.name" name="name" placeholder="Name">
                  <div v-if="validation.name" class="mt-2">
                    <b-alert show variant="danger">{{ validation.name[0] }}</b-alert>
                  </div>
              </div>
              <div class="keterangan">
                  <input type="text" v-model="data.keterangan" name="keterangan" placeholder="Keterangan">
                  <div v-if="validation.keterangan" class="mt-2">
                    <b-alert show variant="danger">{{ validation.keterangan[0] }}</b-alert>
                  </div>
              </div>
              <div class="category">
                  <select class="select" name="category" id="category" v-model="data.category">
                      
                      <option disabled value="" >Category</option>
                      <option selected>{{data.category}}</option>
                      <option>Slider</option>
                      <option>Logo Banner</option>
                      <option>Logo Navigasi</option>
                      <option>Paintball</option>
                      <option>Atv</option>
                      <option>Rafting</option>
                  </select>
                  <div v-if="validation.category" class="mt-2">
                    <b-alert show variant="danger">{{ validation.category[0] }}</b-alert>
                  </div>
              </div>
              <div class="gambar">
                    <input type="file" class="files" @change="handleFileChange"/>
                    <div v-if="validation.img" class="mt-2">
                        <b-alert show variant="danger">{{ validation.img[0] }}</b-alert>
                    </div>
              </div>
                        
              <div class="submit">
                    <input type="submit" value="UPDATE IMAGE">
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
        title: 'Edit Image',
      }
    },
    data(){
        return{
            data:{
                name:'',
                keterangan:'',
                category:'',
                image:''
            },
            validation: [],

        }
    },
    mounted(){
      //fetching data berita
      this.$axios.get(`/api/admin/images/${this.$route.params.id}`)

        .then(response => {
          console.log(response);

          //assing response data to state "data.name"
          this.data.name = response.data.data.name

          //assing response data to state "data.keterangan"
          this.data.keterangan = response.data.data.keterangan

          //assing response data to state "data.category"
          this.data.category = response.data.data.category

          //assing response data to state "data.image."
          this.data.image = response.data.data.img
        })
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
      async updateImage(){
           let dataImage = new FormData();

           dataImage.append('name', this.data.name);
           dataImage.append('keterangan', this.data.keterangan);
           dataImage.append('category', this.data.category);
           dataImage.append('image', this.data.image);
           dataImage.append("_method", "PATCH");

           await this.$axios.post(`api/admin/images/${this.$route.params.id}`, dataImage)
           .then(() => {
              this.$router.push({
                name: 'admin-image'
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
  border-bottom: silver 1px solid;
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