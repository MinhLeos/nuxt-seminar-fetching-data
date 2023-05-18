<template>
    <div>
        <button @click="addData">Click Here To Add Data</button>
    </div>
</template>
<script setup>
    const emits = defineEmits(['changeData'])
    const { data: nuxtData } = useNuxtData('use-data-nuxt')
    console.log('nuxtData', nuxtData)
    console.log('nuxtData.value', nuxtData.value)

    const newData = { id: '2', title: 'Todo 2' }
    const preData = ref([])

    async function addData(){
        await refreshNuxtData('add-new-data')
        console.log('add data 1111111')
        const { data } = await useFetch('/api/add-data', {
            key: 'add-new-data',
            method: 'POST',
            body: newData,
            onRequest() {
                preData.value = nuxtData.value;
                console.log('nuxtData.value onRequest', nuxtData.value)
                emits('changeData', newData)
            },
            onRequestError(){
                console.log('onRequestError')
            },
            onResponseError(){
                console.log('onResponseError')
            },
            async onResponse() {
                console.log('add data success')
                
            }
        })
    }
</script>
<style scoped>
    div {
        margin-top: 200px;
        margin-left: 300px;
    }
</style>