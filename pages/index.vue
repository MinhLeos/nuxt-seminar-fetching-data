<script setup>
    const appConfig = useAppConfig()
    console.log('In pages', appConfig.theme)
    appConfig.theme.primaryColor = '#aaa'
</script>

<template>
  <div>
      <AppConfig />
      <!-- <Cookie /> -->
      <!-- <HeadSafe /> -->
      <!-- <HydrationComponent /> -->
      <!-- <NuxtApp /> -->
      <!-- <NuxtData /> -->
      <!-- <RequestEvent /> -->
      <!-- <RequestHeader /> -->
      <!-- <RequestUrl/> -->
      <!-- <RuntimeConfig /> -->
      <!-- <SeoMeta /> -->
      <button><NuxtLink to="/route">Go to Route Page</NuxtLink></button>
  </div>
</template>
<style scoped>
  button {
    position: fixed;
    bottom: 50px;
    left: 300px;
  }
</style>
