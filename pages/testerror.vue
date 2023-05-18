<template>
    <div>
      <h1>{{ message }}</h1>
      <!-- <ThrowError /> -->
    </div>
</template>
<script setup>
    const message = ref('Nuxt 3 Error')

    const {data} = await useFetch('/api/error', {key: 'error'})
    console.log('data', data)
    if(!data.value) {
        throw createError({ statusCode: 404, statusMessage: 'Demo Composable useError!!!!!!', message: "Demo Composable useError!!!!!!!" })
    }
    onMounted(() => {
        const err = useError()
        console.log('Error page', err)
    })
</script>
