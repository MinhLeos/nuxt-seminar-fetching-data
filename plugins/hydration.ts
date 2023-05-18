import { useHydration } from "nuxt/app"

export default defineNuxtPlugin(nuxtApp => {
    // Doing something with nuxtApp
    function get() {
        return 'Demo useHydration'
    }
    function set(title: any) {
        nuxtApp.payload.data = { title: title }
    }
    const hyd = useHydration('demo-hydration', () => 'Demo useHydration', () => {nuxtApp.payload.data = {test: 'Test useHydration'}})
    // useHydration('demo', get, set)
  })