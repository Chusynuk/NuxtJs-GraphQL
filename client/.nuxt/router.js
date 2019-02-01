import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _a31688e6 = () => interopDefault(import('../pages/checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _989fa0ae = () => interopDefault(import('../pages/signin.vue' /* webpackChunkName: "pages/signin" */))
const _6f72f3c2 = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _7e720cec = () => interopDefault(import('../pages/restaurants/_id.vue' /* webpackChunkName: "pages/restaurants/_id" */))
const _110d6a1b = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/checkout",
      component: _a31688e6,
      name: "checkout"
    }, {
      path: "/signin",
      component: _989fa0ae,
      name: "signin"
    }, {
      path: "/signup",
      component: _6f72f3c2,
      name: "signup"
    }, {
      path: "/restaurants/:id?",
      component: _7e720cec,
      name: "restaurants-id"
    }, {
      path: "/",
      component: _110d6a1b,
      name: "index"
    }],

    fallback: false
  })
}
