export default defineNuxtPlugin(nuxtApp => {
    // Doing something with nuxtApp
    const appConfig = useAppConfig()
    console.log('In Plugins', appConfig.theme)
    appConfig.theme.primaryColor = "#fff"
  })