import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    count: 0,
    siteTitle: 'Vite / Vue 3 / Tailwind Starter'
  }),
})
