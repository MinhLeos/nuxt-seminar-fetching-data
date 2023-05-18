<template>
    <div class="flex">
        <h2 :style="style">Nuxt App</h2>
    </div>
</template>
<script setup>
    const nuxtApp = useNuxtApp()
    console.log('Nuxt App', nuxtApp)

   //Provide từ plugin
    const { $color, $margin } = nuxtApp
    console.log('Color plugin', $color())
    const style = computed(() => {
        return {
            color: $color(),
            margin: $margin()
        }
    })
    nuxtApp.hook('page:finish', () => {
        console.log(' Page Finish')
    })
</script>
<style>
    .flex {
        display: flex;
        margin-top: 400px;
    }
</style>