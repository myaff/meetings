import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0be75901 = () => interopDefault(import('..\\pages\\meetings\\index.vue' /* webpackChunkName: "pages_meetings_index" */))
const _0d12bb93 = () => interopDefault(import('..\\pages\\users\\index.vue' /* webpackChunkName: "pages_users_index" */))
const _167a1fd9 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
const _4c8f42f0 = () => interopDefault(import('.\\nuxt-svg-sprite-icons-list.vue' /* webpackChunkName: "" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/meetings",
    component: _0be75901,
    name: "meetings"
  }, {
    path: "/users",
    component: _0d12bb93,
    name: "users"
  }, {
    path: "/",
    component: _167a1fd9,
    name: "index"
  }, {
    path: "/_icons",
    component: _4c8f42f0,
    name: "icons-list"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
