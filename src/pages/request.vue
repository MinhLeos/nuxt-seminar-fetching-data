<script setup>
import { getRequestURL } from '#app'
const nuxtApp = useNuxtApp()
// console.log('nuxtapp', nuxtApp)
    if(process.client){
        const url = getRequestURL()
        console.log('url', url)
    }
</script>
<template>
    <div>
        <p>Request Url</p>
        <!-- <p>URL is: {{ url }}</p> -->
        <!-- <p>Path is: {{ url.pathname }}</p> -->
    </div>
</template>

