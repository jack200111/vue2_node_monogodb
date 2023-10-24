import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/views/Login.vue'
import Login from '@/views/login/index'
import Main from '@/views/Main.vue'

import index from '@/views/index.vue'

import CategoryEdit from '@/views/CategoryEdit.vue'
import CategoryList from '@/views/CategoryList.vue'

import ItemEdit from '@/views/ItemEdit.vue'
import ItemList from '@/views/ItemList.vue'

import HeroEdit from '@/views/HeroEdit.vue'
import HeroList from '@/views/HeroList.vue'

import ArticleEdit from '@/views/ArticleEdit.vue'
import ArticleList from '@/views/ArticleList.vue'

import AdEdit from '@/views/AdEdit.vue'
import AdList from '@/views/AdList.vue'

import AdminUserEdit from '@/views/AdminUserEdit.vue'
import AdminUserList from '@/views/AdminUserList.vue'

Vue.use(Router)

export const constantRoutes = [
    { path: '/login', name: 'login', component: Login, meta: { isPublic: true }},
    {
      path: '/',
      name: 'main',
      component: Main,
      children: [
        { path: '/home/index', component: index },

        { path: '/categories/create', component: CategoryEdit },
        { path: '/categories/edit/:id', component: CategoryEdit, props: true },
        { path: '/categories/list', component: CategoryList },

        { path: '/items/create', component: ItemEdit },
        { path: '/items/edit/:id', component: ItemEdit, props: true },
        { path: '/items/list', component: ItemList },

        { path: '/heroes/create', component: HeroEdit },
        { path: '/heroes/edit/:id', component: HeroEdit, props: true },
        { path: '/heroes/list', component: HeroList },

        { path: '/articles/create', component: ArticleEdit },
        { path: '/articles/edit/:id', component: ArticleEdit, props: true },
        { path: '/articles/list', component: ArticleList },

        { path: '/ads/create', component: AdEdit },
        { path: '/ads/edit/:id', component: AdEdit, props: true },
        { path: '/ads/list', component: AdList },

        { path: '/admin_users/create', component: AdminUserEdit },
        { path: '/admin_users/edit/:id', component: AdminUserEdit, props: true },
        { path: '/admin_users/list', component: AdminUserList }

      ]
    }
  ]

// router.beforeEach((to, from, next) => {
//   if (!to.meta.isPublic && !localStorage.token) {
//     return next('/login')
//   }
//   next()
// })
const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
export default router
