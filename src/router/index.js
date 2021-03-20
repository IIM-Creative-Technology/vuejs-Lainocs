import { createRouter, createWebHashHistory } from 'vue-router'
import Article from '../views/Admin.vue'
import ModifyArticle from '../components/ModifyArticle'
import SingleArticle from '../components/SingleArticle'

const routes = [
  {
    path: '/admin',
    name: 'Admin',
    component: Article,
    children: [{
      props: true,
      path: '/admin/:id',
      name: 'ModifyArticle',
      component: ModifyArticle
    }],
  },
  {
    path: '/create-article',
    name: 'CreateArticle',
    component: Article,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue'),
    children: [{
      props: true,
      path: '/blog/:id',
      name: 'SingleArticle',
      component: SingleArticle
    }],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
