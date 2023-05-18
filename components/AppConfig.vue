<template>
    <div>
        App Config
    </div>
</template>
<script setup>
    const appConfig = useAppConfig()
    console.log('In Components', appConfig.theme)
</script>