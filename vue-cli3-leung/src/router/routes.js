/**
  @desc 路由表 vue-cli3.0 初始化的
  下面是自己的项目写法
  **/
// vue-cli-3.0 初始化
// routes: [
//   {
//     path: '/',
//     name: 'home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
//   }
// ]

/* 初始化 */
const home = () => import(/* webpackChunkName: "index" */ '@/views/Home')
const about = () => import(/* webpackChunkName: "index" */ '@/views/About')

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => home(),
    meta: {
      title: '首页'
    },
    beforeEnter: (to, from, next) => {
      next()
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => about(),
    // props: route => ({
    //   name: route.query.name,
    //   num: route.query.num
    // })
    // props:true 针对于name路由的跳转 这个是Path的跳转
    props: route => route.query
  }
]

export default routes
