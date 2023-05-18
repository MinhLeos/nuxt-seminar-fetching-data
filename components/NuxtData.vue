<template>
    <div>
        <h2>Nuxt data</h2>
        <ul>
            <li v-for="{id, title} in datas" :key="id">{{ title }}</li>
        </ul>
        <button @click="showAdd">Add Data</button>
        <div v-if="isShowAdd">
            <AddData @changeData="changeData" />
        </div>
    </div>
</template>
<script setup>
    
    const { data: datas } = useAsyncData('use-data-nuxt', () => $fetch('/api/data'))
    console.log('datas', datas)
    const isShowAdd = ref(false)
    function showAdd() {
        isShowAdd.value = true
    }
    function changeData(newData) {
        datas.value.push(newData)
    }
</script>