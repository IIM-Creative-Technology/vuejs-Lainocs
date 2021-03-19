<template>
  <div v-if="$route.name !== 'CreateArticle'">
    <button><router-link to="create-article">Créer Une Page</router-link></button>
    <Article/>
  </div>
  <div v-else>
    <createArticle/>
  </div>
</template>

<script>

import Article from "../components/Article"
import CreateArticle from "../components/CreateArticle"

export default {
  name: 'Admin',
  components: {
    Article,
    CreateArticle
  },
}

</script>

<style>

</style>
