<script setup>
const router = useRouter();
const page = ref(1)

/*1. $fetch*/
const fetchData = await $fetch(`/api/quote/${page.value}`)
console.log('fetchData', fetchData.value)

/*2.useFetch */
// const {data: fetchData} = await useFetch(`/api/quote/${page.value}`, {key: 'quote'})
// console.log('useFetch data', fetchData.value)
// const nuxtData = useNuxtData('quote')
// console.log('nuxtData', nuxtData)


/* demo watch */
// const { data } = await useFetch(`/api/quote/${page.value}`, {
//   key: 'quote',
//   watch: [page]
// });
// console.log('useFetch data', data.value)

// const { data } = await useAsyncData("quote", () => {
//   //do anything
//   return $fetch(`/api/quote/${page.value}`)
// }, {
//   watch: [page]
// });
// console.log('useAsyncData data', data.value)

/* Demo Refresh */
// const { data, refresh } = await useFetch(`/api/quote/${page.value}`, {key: 'quote-refresh'});
// watch(() => page, async () => {
//   await refresh()
// }, {
//   deep: true
// })

// const { data, refresh } = await useAsyncData('quote-refresh', () => $fetch(`/api/quote/${page.value}`));
// watch(() => page, async () => {
//   await refresh()
// }, {
//   deep: true
// })



const goToTestPage = () => {
  router.push("/test");
};
const goToTodosPage = () => {
  router.push("/todos");
};

function prev() {
  if (page.value > 1) {
    page.value--;
  }
}
function next() {
  page.value++
}

</script>

<template>
  <div>
    <div class="flex flex-col mt-4 ml-4 gap-8 text-[red]">
      <!-- <button @click="callAPI" class="mr-4 px-2 py-1 cursor-pointer">Call API</button> -->
      <button @click="goToTestPage" class="cursor-pointer">go to test page</button>
      <button @click="goToTodosPage" class="cursor-pointer">go to todos page</button>
    </div>
    <div class="flex justify-around w-[200px] mt-10 mx-auto">
      <button class="page-btn" @click="prev">Prev</button>
      <p>{{ page }}</p>
      <button class="page-btn" @click="next">Next</button>
    </div>
    <div>
      <!-- Demo refresh ko dùng các data cũ -->
      <!-- {{ data?.id }} -->
    </div>
  </div>

</template>

<style scoped>
.page-btn {
  padding: 0 15px;
  background-color: rgb(37, 224, 224);
  color: #fff;
}
.page-btn:hover {
  opacity: 0.7;
}
.page-btn:active {
  opacity: 0.3;
}
</style>
