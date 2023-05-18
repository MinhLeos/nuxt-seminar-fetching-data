<template>
    <h2>useRoute and useRouter</h2>
</template>
<script setup>
    const route = useRoute()
    const { query, params, path } = route
    console.log('query', query)
    console.log('params', params)
    console.log('path', path)
</script>