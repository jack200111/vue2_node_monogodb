import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
// import Main from './views/Main.vue'

import Login from '@/views/Login.vue'

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
/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => Login,
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
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
  // 添加路由
    {
      path: '/coreFoundation',
      component: Layout,
      redirect: '/coreFoundation/01java',
      name: 'CoreFoundation',
      meta: { title: '内容管理', icon: 'dashboard' },
      children: [
        {
          path: '01java',
          component: CategoryEdit,
          name: '01java',
          meta: { title: '添加图片' }
        },
        {
          path: '02mysql',
          component: CategoryList,
          name: '02mysql',
          meta: { title: '图片列表' }
        },
        {
          path: '03jdbc',
          component: ItemEdit,
          name: '03jdbc',
          meta: { title: '添加人员' }
        },
        {
          path: '04JavaWeb',
          component: ItemList,
          name: '04JavaWeb',
          meta: { title: '人员列表' }
        },
        {
          path: '05Maven',
          component: HeroEdit,
          name: '03jdbc',
          meta: { title: '添加文章' }
        },
        {
          path: '06Gradle',
          component: HeroList,
          name: '04JavaWeb',
          meta: { title: '文章列表' }
        }
      ]
    },
     {
      path: '/microserviceCore',
      component: Layout,
      redirect: '/microserviceCore/05Maven',
      name: 'microserviceCore',
      meta: { title: '运营管理', icon: 'dashboard' },
      children: [
        {
          path: '07Spring6',
          component: ArticleEdit,
          name: '05Maven',
          meta: { title: '添加广告位' }
        },
        {
          path: '08SpringMVC',
          component: ArticleList,
          name: '06Gradle',
          meta: { title: '广告位列表' }
        }
      ]
    },
  //   {
  //   path: '/javaPage',
  //   component: Layout,
  //   redirect: '/javaPage/coreFoundation',
  //   name: 'JavaPage',
  //   meta: {
  //     title: '内容管理',
  //     icon: 'dashboard'
  //   },
  //   children: [
  //     {
  //       path: 'coreFoundation',
  //       component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: 'CoreFoundation',
  //       meta: { title: '图片' },
  //       children: [
  //         {
  //           path: '01java',
  //           component: CategoryEdit,
  //           name: '01java',
  //           meta: { title: '添加图片' }
  //         },
  //         {
  //           path: '02mysql',
  //           component: () => CategoryList,
  //           name: '02mysql',
  //           meta: { title: '图片列表' }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'coreFoundation',
  //       component: import('@/views/nested/menu2/index'), // Parent router-view
  //       name: 'CoreFoundation',
  //       meta: { title: '人员' },
  //       children: [
  //         {
  //           path: '01java',
  //           component: () => ItemEdit,
  //           name: '01java',
  //           meta: { title: '添加人员' }
  //         },
  //         {
  //           path: '02mysql',
  //           component: () => ItemList,
  //           name: '02mysql',
  //           meta: { title: '人员列表' }
  //         }
  //       ]
  //     }
  //   ]
  // },
     {
      path: '/microecologicalServices',
      component: Layout,
      redirect: '/microserviceCore/11SSM',
      name: 'microecologicalServices',
      meta: { title: '系统管理', icon: 'dashboard' },
      children: [
         {
          path: '11SSM',
          component: () => AdEdit,
          meta: { title: '添加分类' }
        },
        {
          path: '12Redis7',
          component: () => AdList,
          name: '10MyBatisPlus',
          meta: { title: '分类列表' }
        },
        {
          path: '13SpringBoot2',
          component: () => AdminUserEdit,
          name: '17Elasticsearch',
          meta: { title: '添加管理员' }
        },
        {
          path: '14SpringCloud',
          component: () => AdminUserList,
          name: '18ZooKeeper',
          meta: { title: '管理员列表' }
        },
        // {
        //   path: '11SSM',
        //   component: () => import('@/views/microserviceCore/11SSM.vue'),
        //   name: '11SSM',
        //   meta: { title: '11SSM' }
        // },
        // {
        //   path: '12Redis7',
        //   component: () => import('@/views/microserviceCore/12Redis7.vue'),
        //   name: '12Redis7',
        //   meta: { title: '12Redis7' }
        // },
        // {
        //   path: '13SpringBoot2',
        //   component: () => import('@/views/microserviceCore/13SpringBoot2.vue'),
        //   name: '13SpringBoot2',
        //   meta: { title: '13SpringBoot2' }
        // },
        // {
        //   path: '14SpringCloud',
        //   component: () => import('@/views/microserviceCore/14SpringCloud.vue'),
        //   name: '14SpringCloud',
        //   meta: { title: '14SpringCloud' }
        // },
        {
          path: '19Nginx',
          component: () => import('@/views/microecologicalServices/19Nginx.vue'),
          name: '19Nginx',
          meta: { title: '19Nginx' }
        },
        {
          path: '20SpringSecurity',
          component: () => import('@/views/microecologicalServices/20SpringSecurity.vue'),
          name: '20SpringSecurity',
          meta: { title: '20SpringSecurity' }
        },
        {
          path: '21ActiveMQ',
          component: () => import('@/views/microecologicalServices/21ActiveMQ.vue'),
          name: '21ActiveMQ',
          meta: { title: '21ActiveMQ' }
        },
        {
          path: '22RabbitMQ',
          component: () => import('@/views/microecologicalServices/22RabbitMQ.vue'),
          name: '22RabbitMQ',
          meta: { title: '22RabbitMQ' }
        },
        {
          path: '23RocketMQ',
          component: () => import('@/views/microecologicalServices/23RocketMQ.vue'),
          name: '23RocketMQ',
          meta: { title: '23RocketMQ' }
        },
        {
          path: '24K8S',
          component: () => import('@/views/microecologicalServices/24K8S.vue'),
          name: '24K8S',
          meta: { title: '24K8S' }
        }
      ]
    },
    //  {
    //   path: '/interviewQuestions',
    //   component: Layout,
    //   redirect: '/interviewQuestions/25MySQL面试题',
    //   name: 'interviewQuestions',
    //   meta: { title: '面试题', icon: 'dashboard' },
    //   children: [
    //     {
    //       path: '25MySQL面试题',
    //       component: () => import('@/views/interviewQuestions/25MySQL面试题.vue'),
    //       name: '25MySQL面试题',
    //       meta: { title: '25MySQL面试题' }
    //     },
    //     {
    //       path: '26大厂面试题第2季',
    //       component: () => import('@/views/interviewQuestions/26大厂面试题第2季.vue'),
    //       name: '26大厂面试题第2季',
    //       meta: { title: '26大厂面试题第2季' }
    //     },
    //     {
    //       path: '27大厂面试题第3季',
    //       component: () => import('@/views/interviewQuestions/27大厂面试题第3季.vue'),
    //       name: '27大厂面试题第3季',
    //       meta: { title: '27大厂面试题第3季' }
    //     }
    //   ]
    // },
  // {
  //   path: '/javaPage',
  //   component: Layout,
  //   redirect: '/javaPage/coreFoundation',
  //   name: 'JavaPage',
  //   meta: {
  //     title: '嵌套',
  //     icon: 'dashboard'
  //   },
  //   children: [
  //     {
  //       path: 'coreFoundation',
  //       component: () => import('@/views/javaPage/coreFoundation/index'), // Parent router-view
  //       name: 'CoreFoundation',
  //       meta: { title: '核心基础' },
  //       children: [
  //         {
  //           path: '01java',
  //           component: () => import('@/views/javaPage/coreFoundation/01java.vue'),
  //           name: '01java',
  //           meta: { title: '01java基础' }
  //         },
  //         {
  //           path: '02mysql',
  //           component: () => import('@/views/javaPage/coreFoundation/02mysql.vue'),
  //           name: '02mysql',
  //           meta: { title: '02mysql' }
  //         },
  //         {
  //           path: '03jdbc',
  //           component: () => import('@/views/javaPage/coreFoundation/03jdbc.vue'),
  //           name: '03jdbc',
  //           meta: { title: '03jdbc' }
  //         },
  //         {
  //           path: '04JavaWeb',
  //           component: () => import('@/views/javaPage/coreFoundation/04JavaWeb.vue'),
  //           name: '04JavaWeb',
  //           meta: { title: '04JavaWeb' }
  //         }
  //       ]
  //     }
  //     // ,
  //     // {
  //     //   path: 'Microservice Core',
  //     //   component: () => import('@/views/javaPage/menu2/index'),
  //     //   meta: { title: '菜单2' }
  //     // }
  //   ]
  // },
  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: '例子', icon: 'el-icon-s-help' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: '表格', icon: 'table' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: '树形控件', icon: 'tree' }
  //     }
  //   ]
  // },

  // {
  //   path: '/form',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Form',
  //       component: () => import('@/views/form/index'),
  //       meta: { title: '表单', icon: 'form' }
  //     }
  //   ]
  // },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: '嵌套',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: '菜单1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: '菜单2' }
      }
    ]
  },

  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: '外部链接', icon: 'link' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

router.beforeEach((to, from , next) => {
  // if (!to.meta.isPublic && !localStorage.token) {
  //   return next('/login')
  // }
  next()
})
// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
