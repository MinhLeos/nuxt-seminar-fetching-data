<script setup>
import { useHydration } from 'nuxt/app';

    // useHeadSafe({
    //     title: 'My App',
    //     meta: [
    //       { name: 'description', content: 'My amazing site.' }
    //     ],
    //     bodyAttrs: {
    //       class: 'test'
    //     },
    //     script: [ { id: 'xss-script', innerHTML: 'console.log("xss")' },
    //             { innerHTML: 'document.querySelector("body").innerHTML = "<div>Ha ha ha</div>"; console.log("test 123")' } 
    //     ]
    // })
    useHydration('demo', () => 'Demo', () => {nuxtApp.payload.data = {test: 'Test'}})
    const nuxtApp = useNuxtApp()
    console.log('nuxtApp.payload', nuxtApp.payload)

    // if(process.server) {
    //     // Get underlying request event
    //   const event = useRequestEvent()
    //   console.log('event', event)
    //   // Get the URL
    //   const url = event.node.req.url
    //   console.log('url', url)
    // }
    // const headers = useRequestHeaders()
    // console.log('headers', headers)
    // const cookie = useRequestHeaders(['cookie'])
    // console.log('cookie', cookie)
    
</script>
<template>
    <div>
        <p>
            useHead
        </p>
    </div>
</template>