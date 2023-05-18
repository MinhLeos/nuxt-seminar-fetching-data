<template>
    <div>
        <h2>useRouter</h2>
        <button @click="click">Click Me to test useRoute</button>
    </div>
</template>
<script setup>
    const router = useRouter()
    console.log('router', router)
    function click(){
        router.push('/route/123?q=abc')
    }
</script>
<style scoped>
    div {
        margin-top: 100px;
        margin-left: 250px;
    }
    button {
        margin-top: 100px;
    }
</style>