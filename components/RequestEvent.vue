<template>
    <div>
      <h2>Request Event</h2>
    </div>
  </template>
  
  <script setup>
    if(process.client){
        const event = useRequestEvent()
        console.log('client', event)
    }
    if(process.server){
        const event = useRequestEvent()
        console.log('server', event)
        const req = event.node.req
        const res = event.node.res
        const url = event.node.req.url
        console.log('req', req)
        console.log('res', res)
        console.log('url', url)
    }
  </script>