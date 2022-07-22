import { ViteSSG } from 'vite-ssg'
// import type { RouteRecordRaw } from 'vue-router'
import type { RouteRecordRaw } from '@vue-router'
import App from './App.vue'
import type { ViteSetupModule } from './types/ViteSetupModule'
import { router } from '@/modules/router'
import './styles/main.css'

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes: router.getRoutes() as RouteRecordRaw[], base: import.meta.env.BASE_URL },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.glob<{ install: ViteSetupModule }>('./modules/*.ts', { eager: true }))
      .map(i => i.install?.(ctx))
  },
)
