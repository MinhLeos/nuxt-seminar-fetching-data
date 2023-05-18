<script setup>
// const { data } = await useFetch("/api/quote/1");
// const { data } = await useLazyFetch("/api/quote/1");

// const { data } = await useAsyncData("quote", () => $fetch("/api/quote/1"));
const { data } = await useLazyAsyncData("quote", () => $fetch("/api/quote/1"), {
  default: () => ({}),
  // pick: ["author"],
});
watch(() => data, () => {
    console.log('data', data.value)
},{
    immediate: true,
    deep: true
})
</script>

<template>
  <div class="mt-4 ml-4">
    <div>Test page</div>
    <div><span>Author: </span>{{ data.author }}</div>
  </div>
</template>

<style scoped></style>
