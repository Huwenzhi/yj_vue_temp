import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
/* Layout */
import Layout from '@/layout'

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
    icon: 'svg-name'             the icon show in the sidebar
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
        component: () => import('@/views/login/index'),
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
            component: () => import('@/views/dashboard/index'),
            meta: {title: '首页', icon: 'dashboard', affix: true, noCache: true}
        }]
    },

    {
        path: '/example',
        component: Layout,
        redirect: '/example/table',
        name: 'Example',
        meta: {title: '基本档案', icon: 'example'},
        children: [
            {
                path: 'table',
                name: 'Table',
                component: () => import('@/views/table/index'),
                meta: {title: '集团', icon: 'table'}
            },
            {
                path: 'tree',
                name: 'Tree',
                component: () => import('@/views/dd/dd'),
                meta: {title: '公司', icon: 'tree'}
            },
            {
                path: 'test',
                name: 'test',
                component: () => import('@/views/test/index'),
                meta: {title: '测试按钮', icon: 'tree'}
            },
            {
                path: 'tabletest',
                name: 'tabletest',
                component: () => import('@/views/tabletest/index'),
                meta: {title: '测试动态列', icon: 'tree'}
            },
            {
                path: 'rightplan',
                name: 'rightplan',
                component: () => import('@/views/rightplan/index'),
                meta: {title: '侧边栏', icon: 'tree'}
            },{
                path: 'slot',
                name: 'slot',
                component: () => import('@/views/newslot/index'),
                meta: {title: '插槽', icon: 'tree'}
            },{
                path: 'treetable',
                name: 'treetable',
                component: () => import('@/views/treetable/treetable'),
                meta: {title: '树表', icon: 'tree'}
            },{
                path: 'newtabletest',
                name: 'newtabletest',
                component: () => import('@/views/newtabletest/newtabletest'),
                meta: {title: '别人的表', icon: 'tree'}
            },{
                path: 'formcreat',
                name: 'formcreat',
                component: () => import('@/views/formcreat/formcreat'),
                meta: {title: '表单', icon: 'tree'}
            },{
                path: 'movetree',
                name: 'movetree',
                component: () => import('@/views/movetree/movetree'),
                meta: {title: '拖动的树', icon: 'tree'}
            },{
                path: 'skeleton',
                name: 'skeleton',
                component: () => import('@/views/skeleton/skeleton'),
                meta: {title: '骨架屏', icon: 'tree'}
            }

        ]
    },

    // 404 page must be placed at the end !!!
    {path: '*', redirect: '/404', hidden: true}
]

const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({y: 0}),
    routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router
