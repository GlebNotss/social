import { createRouter, createWebHistory } from 'vue-router'

// components import

import News from '@/views/News.vue'
import Messages from '@/views/Messages.vue'
import MyProfile from '@/views/MyProfile.vue'

const routes = [
  {path: '/', component: News},
  {path: '/messages', component: Messages},
  {path: '/my-profile', component: MyProfile},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
