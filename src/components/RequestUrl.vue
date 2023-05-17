
<template>
  <p>Request URL</p>
</template>

<script setup>
  console.log('1')

  const { data } = await useAsyncData('request-url', () => {
    console.log('2')
    const event = new Event()
    const url = getRequestURL(event)
    console.log('url', url)
    return $fetch('/api/todos')
  })
console.log('3')
</script>