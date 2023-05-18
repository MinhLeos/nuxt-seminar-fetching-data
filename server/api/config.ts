export default defineEventHandler((event) => {
    const config = useRuntimeConfig()
    console.log('config', config)

    return {
        title: 'useRuntimeConfig'
    }
  })