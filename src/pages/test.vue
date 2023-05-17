<script setup>

/*2.useFetch vs useLazyFetch */
const { data } = await useFetch("/api/quote/2", {key: 'quote2', default: () => ({})});
// const { data } = await useLazyFetch("/api/quote/2", {key: 'quote2'});
// const { data } = await useFetch("/api/quote/2", {key: 'quote2', lazy: true});
// const { data } = await useFetch("/api/quote/2", {key: 'quote2', pick: ['author']});
// const { data } = await useFetch("/api/quote/2", {key: 'quote2', transform: (data) => {
//   return {
//     author: data.author + ' - ' + data.id
//   }
// }});
// const { data } = await useFetch("/api/quote/2", {key: 'quote2', lazy: true, default: () => ({author: "Minh"})});
watch(() => data, () => {
    console.log('data', data.value)
},{
    immediate: true,
    deep: true
})

// const { data } = await useAsyncData("quote", () => $fetch("/api/quote/1"));
// const { data } = await useLazyAsyncData("quote", () => $fetch("/api/quote/1"), {
//   default: () => ({}),
//   // pick: ["author"],
// });

</script>

<template>
  <div class="mt-4 ml-4">
    <div>Test page</div>
    <div><span>Author: </span>{{ data?.author || 'Author'}}</div>
  </div>
</template>

<style scoped></style>
