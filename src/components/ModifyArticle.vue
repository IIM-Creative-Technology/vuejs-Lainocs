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
        <router-link to="/admin"><button>Modifier l'article</button></router-link>
        <router-link to="/admin"><button>Retour</button></router-link>
      </div>
  </div>
</template>

<script>

export default {
  name: "ModifyArticle"
}

</script>
