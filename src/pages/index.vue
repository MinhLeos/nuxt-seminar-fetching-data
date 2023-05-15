<script setup>
const router = useRouter();
const page = ref(1)

// const { data } = await useAsyncData("quote", () => $fetch(`/api/quote/${page.value}`), {
//   watch: [page]
// });
// console.log('useAsyncData data', data)

// const { data } = await useFetch(`/api/quote/${page.value}`, {
//   watch: [page]
// });
// console.log('useFetch data', data)

// const { data, refresh } = await useFetch(`/api/quote/${page.value}`);

// watch(() => page, () => {
//   refresh()
// }, {
//   deep: true
// })

// const callAPI = async () => {
//   // const { data } = await useAsyncData("quote", () => useFetch("/api/quote/1"));
//   // refreshNuxtData("quote");
// };

const fetchData = await $fetch(`/api/quote/${page.value}`)
console.log('fetchData', fetchData)

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
