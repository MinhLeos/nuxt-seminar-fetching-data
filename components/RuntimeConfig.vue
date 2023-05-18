<template>
    <div>
        <h2>useRuntimeConfig</h2>
    </div>
</template>
<script setup lang="ts">
    const config = useRuntimeConfig()
    console.log('config', config)
</script>