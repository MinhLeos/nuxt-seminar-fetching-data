<script setup>
    const page = ref(1)
    function prev() {
        if (page.value > 1) {
            page.value--;
        }
    }
    function next() {
        page.value++
    }
    async function getTodos() {
        //await clearNuxtData('todos')
        // await nextTick()
        // const { data } = await useAsyncData('todos', () => $fetch('/api/todos'))
        const { data: todos } = await useFetch('/api/todos', {
            key: "todos",
            transform: (todos) =>
                todos.map((todo) => ({
                    id: todo.id,
                    titleFull: `${todo.title} - ${todo.completed}`,
                })),
        })
        console.log('todos', todos.value)
    }

    onMounted(async () => {
        console.log('Mounted')
        await nextTick()
        await getTodos()
    })

    const nuxtApp = useNuxtApp()
    // nuxtApp.hook("page:start", () => {
    //     console.log('page start')
    //     getTodos()
    // })
    // *** "page:finish" ***  >>> chạy ở tất cả các page
    // nuxtApp.hook("page:finish", async () => {
    //     console.log('page finish')
    //     // getTodos()
    //     const { data: dataPageFinish } = await useFetch('/api/todos', {
    //         key: "todos"
    //     })
    // })
</script>

<template>
     <div class="flex justify-around w-[200px] mt-10 mx-auto">
      <!-- <button class="page-btn" @click="prev">Prev</button>
      <p>{{ page }}</p>
      <button class="page-btn" @click="next">Next</button> -->
        <p>Todos page</p>
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