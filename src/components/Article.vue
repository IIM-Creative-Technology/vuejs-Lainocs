<template>
  <div class="articles">
    <div class="article" v-for="article in posts" :key="article"> <!-- récupérer les données -->
      <p>#{{posts.indexOf(article)}}</p>
      <p>{{article.title}}</p>
      <img :src="article.imgurl">
      <p>{{article.mdescription}}</p>
      <div v-if="$route.name === 'Admin'">  <!-- si le nom de la route est égale à 'Admin' -->
        <router-link :to="'/admin/' + posts.indexOf(article)"><button class="modify">Modifier</button></router-link>
        <button @click="deleteArticle(posts.indexOf(article))" class="delete">Supprimer</button>
      </div>
      <div v-if="$route.params.id == posts.indexOf(article)">
        <router-view v-bind:article="article"/>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState } from "vuex"

export default {
  name: 'Article',
  computed: {
    ...mapState(["posts"]) // chercher 'posts'
  },

  methods: {
    deleteArticle(index) {
      this.$store.dispatch('deleteArticle', index) // chercher la fonction dans le store
    },
  }
}
</script>

<style>
  .articles {
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .article {
    padding: 30px;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid black;
  }

  .article img {
    width: 200px;
  }

  .article .modify {
    background-color: yellow;
  }

  .article .delete {
    background-color: red;
  }
</style>
