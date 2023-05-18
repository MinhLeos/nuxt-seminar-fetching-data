<template>
    <div>
        <p>Test Composable</p>
    </div>
</template>
<script setup>
    const appConfig = useAppConfig()
    console.log('In Components', appConfig.theme)
</script>
<style scoped>
    p {
        color: green;
    }
</style>