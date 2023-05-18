<template>
    <div>
      <h1>{{ message }}</h1>
      <button @click="triggerError">Trigger Error</button>
      <!-- <ThrowError /> -->
    </div>
</template>
<script setup>
    const message = ref('Nuxt 3 Error')
    // const err = useError()
    // console.log('err', err)
    if(true) {
        throw createError({ statusCode: 404, statusMessage: 'Demo Composable useError!!!!!!', message: "Demo Composable useError!!!!!!!" })
    }
    const triggerError = () => {
       throw createError({ statusCode: 404, statusMessage: 'Demo Composable useError!!!!!!', message: "Demo Composable useError!!!!!!" })
    }
    onMounted(() => {
        const err = useError()
        console.log('Error page', err)
    })
</script>

