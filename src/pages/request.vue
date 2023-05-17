<script setup>
const nuxtApp = useNuxtApp()
// console.log('nuxtapp', nuxtApp)
    // if(process.client){
    //     const url = getRequestURL()
    //     console.log('url', url)
    // }
    // const url = getRequestURL()
    //     console.log('url', url)
    // const headers = useRequestHeaders()
    // console.log('headers', headers)
    // const cookie = useRequestHeaders(['cookie'])
    // console.log('cookie', cookie)
</script>
<template>
    <div>
        <!-- <p>Request Url</p>
        <p>{{ headers }}</p> -->
        <!-- <p>URL is: {{ url }}</p> -->
        <!-- <p>Path is: {{ url.pathname }}</p> -->
        <RequestUrl />
    </div>
</template>

