
<template>
  <p>Request URL</p>
</template>

<script setup>
  console.log('1')
  // const url = useRequestURL()
  // console.log('url', url)
  const { data } = await useAsyncData('request-url', () => {
    console.log('2')
    return $fetch('/api/request-url')
  })
console.log('3')
</script>