<template>
    <div>
        <h2>useRoute</h2>
    </div>
</template>
<script setup>
    const route = useRoute()
    const { query, params, path } = route
    console.log('query', query)
    console.log('params', params)
    console.log('path', path)
</script>
<style scoped>
    div {
        margin-top: 100px;
        margin-left: 250px;
    }
</style>