import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login/index.vue'
// import Login from './views/Login.vue'
// import Main from './views/Main.vue'

import Layout from '@/layout'

import index from './views/index.vue'

// 内容管理
// 添加图片
import ItemEdit from './views/ItemEdit.vue'
import ItemList from './views/ItemList.vue'
// 添加人员
import HeroEdit from './views/HeroEdit.vue'
import HeroList from './views/HeroList.vue'
// 添加文章
import ArticleEdit from './views/ArticleEdit.vue'
import ArticleList from './views/ArticleList.vue'

// 运营管理
// 广告位
import AdEdit from './views/AdEdit.vue'
import AdList from './views/AdList.vue'

// 系统管理
// 分类
import CategoryEdit from './views/CategoryEdit.vue'
import CategoryList from './views/CategoryList.vue'

import AdminUserEdit from './views/AdminUserEdit.vue'
import AdminUserList from './views/AdminUserList.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    // { path: '/login', name: 'login', component: Login, meta: { isPublic: true }
    {
    path: '/login',
    component: Login,
    hidden: true
    },
    {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      // component: () => import('@/views/dashboard/index'),
      component: index,
      meta: { title: '首页', icon: 'dashboard', affix: true }
    }]
  },
  //  {
  //     path: '/coreFoundation',
  //     component: Layout,
  //     redirect: '/coreFoundation/CategoryEdit',
  //     name: 'CoreFoundation',
  //     meta: { title: '内容管理', icon: 'dashboard' },
  //     children: [
  //       {
  //         path: 'ItemEdit',
  //         component: ItemEdit,
  //         name: 'ItemEditryEdit',
  //         meta: { title: '添加图片' }
  //       },
  //       {
  //         path: 'ItemList',
  //         component: ItemList,
  //         name: 'ItemListryList',
  //         meta: { title: '图片列表' }
  //       },
  //       {
  //         path: 'HeroEdit',
  //         component: HeroEdit,
  //         name: 'HeroEditit',
  //         meta: { title: '添加人员' }
  //       },
  //       {
  //         path: 'HeroList',
  //         component: HeroList,
  //         name: 'HeroListst',
  //         meta: { title: '人员列表' }
  //       },
  //       {
  //         path: 'ArticleEdit',
  //         component: ArticleEdit,
  //         name: 'ArticleEdit',
  //         meta: { title: '添加文章' }
  //       },
  //       {
  //         path: 'ArticleList',
  //         component: ArticleList,
  //         name: 'ArticleList',
  //         meta: { title: '文章列表' }
  //       }
  //     ]
  //   },
    {
    path: '/content',
    component: Layout,
    redirect: '/content/Item',
    name: 'content',
    meta: {
      title: '内容管理',
      icon: 'dashboard'
    },
    children: [
      {
        path: 'Item',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Item',
        redirect: '/content/Item/ItemEdit',
        meta: { title: '图片' },
        children: [
          {
            path: 'ItemEdit',
            component: ItemEdit,
            name: 'ItemEdit',
            meta: { title: '添加图片' }
          },
          {
            path: 'ItemList',
            component: ItemList,
            name: 'ItemList',
            meta: { title: '图片列表' }
          }
        ]
      },
      {
        path: 'Hero',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Hero',
        redirect: '/Hero/HeroEdit',
        meta: { title: '人员' },
        children: [
          {
            path: 'HeroEdit',
            component: HeroEdit,
            name: 'HeroEdit',
            meta: { title: '添加人员' }
          },
          {
            path: 'HeroList',
            component: HeroList,
            name: 'HeroList',
            meta: { title: '人员列表' }
          }
        ]
      },
      {
        path: 'Article',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Article',
        redirect: '/Article/ArticleEdit',
        meta: { title: '广告' },
        children: [
          {
            path: 'ArticleEdit',
            component: ArticleEdit,
            name: 'ArticleEdit',
            meta: { title: '添加广告' }
          },
          {
            path: 'ArticleList',
            component: ArticleList,
            name: 'ArticleList',
            meta: { title: '广告列表' }
          }
        ]
      }
    ]
    },
     {
      path: '/operate',
      component: Layout, // Parent router-view
      redirect: '/operate/AdEdit',
      name: 'operate',
      meta: { title: '运营管理', icon: 'dashboard' },
      children: [
        {
          path: 'AdEdit',
          component: AdEdit,
          name: 'AdEdit',
          meta: { title: '添加广告位' }
        },
        {
          path: 'AdList',
          component: AdList,
          name: 'AdList',
          meta: { title: '广告位列表' }
        }
      ]
    },
    // {
    //   path: '/microecologicalServices',
    //   component: Layout,
    //   redirect: '/microserviceCore/CategoryEdit',
    //   name: 'microecologicalServices',
    //   meta: { title: '系统管理', icon: 'dashboard' },
    //   children: [
    //      {
    //       path: 'CategoryEdit',
    //       component: CategoryEdit,
    //       name: 'CategoryList',
    //       meta: { title: '添加分类' }
    //     },
    //     {
    //       path: 'CategoryList',
    //       component: CategoryList,
    //       name: 'CategoryList',
    //       meta: { title: '分类列表' }
    //     },
    //     {
    //       path: 'AdminUserEdit',
    //       component: AdminUserEdit,
    //       name: 'AdminUserEdit',
    //       meta: { title: '添加管理员' }
    //     },
    //     {
    //       path: 'AdminUserList',
    //       component: AdminUserList,
    //       name: 'AdminUserList',
    //       meta: { title: '管理员列表' }
    //     }
    //   ]
    // },
     {
    path: '/system',
    component: Layout,
    redirect: '/system/Category',
    name: 'system',
    meta: {
      title: '系统管理',
      icon: 'dashboard'
    },
    children: [
      {
        path: 'Category',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Category',
        redirect: '/system/Category/CategoryEdit',
        meta: { title: '分类' },
        children: [
          {
            path: 'CategoryEdit',
            component: CategoryEdit,
            name: 'CategoryEdit',
            meta: { title: '添加分类' }
          },
          {
            path: 'CategoryList',
            component: CategoryList,
            name: 'CategoryList',
            meta: { title: '分类列表' }
          }
        ]
      },
      {
        path: 'AdminUser',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'AdminUser',
        redirect: '/AdminUser/AdminUserEdit',
        meta: { title: '管理员' },
        children: [
          {
            path: 'AdminUserEdit',
            component: AdminUserEdit,
            name: 'AdminUserEdit',
            meta: { title: '添加管理员' }
          },
          {
            path: 'AdminUserList',
            component: AdminUserList,
            name: 'AdminUserList',
            meta: { title: '管理员列表' }
          }
        ]
      }
    ]
    },
    { path: '*', redirect: '/404', hidden: true }
    // {
    //   path: '/',
    //   name: 'main',
    //   component: Main,
    //   children: [
    //     { path: '/home/index', component: index },

    //     { path: '/categories/create', component: CategoryEdit },
    //     { path: '/categories/edit/:id', component: CategoryEdit, props: true },
    //     { path: '/categories/list', component: CategoryList },

    //     { path: '/items/create', component: ItemEdit },
    //     { path: '/items/edit/:id', component: ItemEdit, props: true },
    //     { path: '/items/list', component: ItemList },

    //     { path: '/heroes/create', component: HeroEdit },
    //     { path: '/heroes/edit/:id', component: HeroEdit, props: true },
    //     { path: '/heroes/list', component: HeroList },

    //     { path: '/articles/create', component: ArticleEdit },
    //     { path: '/articles/edit/:id', component: ArticleEdit, props: true },
    //     { path: '/articles/list', component: ArticleList },

    //     { path: '/ads/create', component: AdEdit },
    //     { path: '/ads/edit/:id', component: AdEdit, props: true },
    //     { path: '/ads/list', component: AdList },

    //     { path: '/admin_users/create', component: AdminUserEdit },
    //     { path: '/admin_users/edit/:id', component: AdminUserEdit, props: true },
    //     { path: '/admin_users/list', component: AdminUserList }

    //   ]
    // }

  ]
})
// router.beforeEach((to, from, next) => {
//   if (!to.meta.isPublic && !localStorage.token) {
//     return next('/login')
//   }
//   next()
// })
export default router
