<template>
  <div class="articles">
    <div class="article" v-for="article in posts" :key="article"> <!-- récupérer les données -->
      <div v-if="$route.name === 'Admin' || $route.name === 'Blog'">
        <p>#{{posts.indexOf(article)}}</p>
        <p>{{article.title}}</p>
        <img :src="article.imgurl">
        <p>{{article.mdescription}}</p>
      </div>
      <div v-if="$route.name === 'Admin'">  <!-- si le nom de la route est égale à 'Admin' -->
        <router-link :to="'/admin/' + posts.indexOf(article)"><button class="modify">Modifier</button></router-link>
        <button @click="deleteArticle(posts.indexOf(article))" class="delete">Supprimer</button>
        <hr>
      </div>
      <div v-if="$route.name === 'Blog'">
        <router-link :to="'/blog/' + posts.indexOf(article)"><button>Afficher</button></router-link>
        <hr>
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

  hr {
    width: 50vw;
    margin-top: 50px;
    border: 0.5px solid black;
  }

  .articles {
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .article {
    padding: 30px;
    width: 50%;
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
