<template>
  <div>
      <div>
        <label>Titre de la page</label>
        <input v-model="title" type="text">
      </div>
      <div>
        <label>Meta Title</label>
        <input v-model="mtitle" type="text">
      </div>
      <div>
        <label>Meta Description</label>
        <input v-model="mdescription" type="text">
      </div>
      <div>
        <label>Url de l'image</label>
        <input v-model="imgurl" type="text">
      </div>
      <div>
        <label>Corps du post</label>
        <input v-model="text" type="text">
      </div>
      <div>
        <router-link to="/admin"><button @click="createArticle">Créer l'article</button></router-link>
      </div>
  </div>
</template>

<script>

export default {
  name: 'CreateArticle',
      // variables empty par défaut
  data() {
    return {
      title: "",
      mtitle: "",
      mdescription: "",
      imgurl: "",
      text: "",
    }
  },

  methods: {

      // remplir les infos données
    createArticle(){
      let article = {
        title: this.title,
        mtitle: this.mtitle,
        mdescription: this.mdescription,
        imgurl: this.imgurl,
        text: this.text
      }
      
      // chercher la fonction dans store
      this.$store.dispatch('createArticle', article)
    },

  }
}

</script>

<style>

</style>
