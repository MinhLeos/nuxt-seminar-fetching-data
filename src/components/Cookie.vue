<template>
    <div>
      <h1>Counter: {{ counter || '-' }}</h1>
      <button @click="counter = null">reset</button>
      <button @click="counter--">-</button>
      <button @click="counter++">+</button>
    </div>
</template>
<script setup>
  const counter = useCookie('counter', {
    default: () => 1,
    httpOnly: true,
    maxAge: 5000
  })
//   console.log('cookies', document.cookie)
//   counter.value = counter.value || Math.round(Math.random() * 1000)
</script>
<style scoped>
    button {
        margin: 5px 10px;
        padding: 5px 15px;
        border: 1px solid green;
    }
</style>