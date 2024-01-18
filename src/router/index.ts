import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const NAVBAR_HEIGHT = 104;
const routes = [
  {
    path: "/about",
    name: 'About',
    component: Home,
    meta: {
      name: 'About'
    }
  },
  {
    path: "/experience",
    name: 'Experience',
    component: Home,
    meta: {
      name: 'Experience'
    }
  },
  {
    path: "/portfolio",
    name: 'Portfolio',
    component: Home,
    meta: {
      name: 'Portfolio'
    }
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: {
        name: "About",
        path: '/about'
      }
    },
    {
      path: "/about",
      name: 'About',
      component: Home,
      props: {
        routes: routes
      },
      meta: {
        name: 'About'
      }
    },
    {
      path: "/experience",
      name: 'Experience',
      component: Home,
      props: {
        routes: routes
      },
      meta: {
        name: 'Experience'
      }
    },
    {
      path: "/portfolio",
      name: 'Portfolio',
      component: Home,
      props: {
        routes: routes
      },
      meta: {
        name: 'Portfolio'
      }
    }
  ],
  scrollBehavior(to) {

    switch (to.name) {
      case "home":
        document.getElementById("Content")?.scroll({top: 0, behavior: 'smooth'})
        break;
      case "About":
        {
          const id = to.name
          const offsetTop = document.getElementById(id)?.offsetTop
          document.getElementById("Content")?.scroll(0, offsetTop ? offsetTop - NAVBAR_HEIGHT : 0 )
        }
        break;
      case "Experience":
        {
          const id = to.name
          const offsetTop = document.getElementById(id)?.offsetTop
          document.getElementById("Content")?.scroll(0, offsetTop ? offsetTop - NAVBAR_HEIGHT : 0 )
        }
        break;
      case "Portfolio":
        {
          const id = to.name
          const offsetTop = document.getElementById(id)?.offsetTop
          document.getElementById("Content")?.scroll(0, offsetTop ? offsetTop - NAVBAR_HEIGHT : 0 )
        }
        break;
      default:
        break;
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return {top: 0, behavior: 'smooth'}
  }
})

export default router
