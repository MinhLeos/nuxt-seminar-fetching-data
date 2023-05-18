<template>
    <div>
      <h1>{{ message }}</h1>
    </div>
</template>
  
<script setup>

    const message = ref('Hydration')
    const nuxtApp = useNuxtApp()
    console.log('nuxtApp.payload', nuxtApp.payload)

  </script>