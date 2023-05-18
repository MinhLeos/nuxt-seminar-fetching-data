<template>
    <div>
      <h1>Counter: {{ counter || '-' }}</h1>
      <button @click="counter = null">reset</button>
      <button @click="counter--">-</button>
      <button @click="counter++">+</button>
      <button @click="callAPI">Call API</button>
    </div>
</template>
<script setup>
  const counter = useCookie('counter', {
    default: () => Math.round(Math.random() * 1000),
    // httpOnly: true,
    // maxAge: 5000
  })
  onMounted(() => {
    console.log('Cookie', counter.value)
  })
  watch(() => counter, () => {
    console.log('watch Cookie', counter.value)
  }, {
    deep: true
  })
  counter.value = counter.value || Math.round(Math.random() * 1000)

  async function callAPI() {
    const data = await $fetch('/api/cookie')
    console.log('data', data)
  }
</script>
<style scoped>
    button {
        margin: 5px 10px;
        padding: 5px 15px;
        border: 1px solid green;
    }
</style>