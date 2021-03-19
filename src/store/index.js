import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: [],
  },
  mutations: {

    // fonction de création

    ADD_POST(state, article){
      state.posts.push(article)
    },
    
    // fonction de suppression

    DELETE_POST(state, index){
      state.posts.splice(index, 1)
    },

  },
  actions: {

    // relier le contenu à la fonction

    createArticle(context, article){
      context.commit('ADD_POST', article)
    }, 

    deleteArticle(context, article){
      context.commit('DELETE_POST', article)
    },
  },
  modules: {
  }
})
