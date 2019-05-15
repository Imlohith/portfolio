import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Contact from './views/Contact.vue'
import Projects from './views/Projects.vue'
import Skills from './views/Skills.vue'
import Education from './views/Education.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/education',
      name: 'education',
      component: Education
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
