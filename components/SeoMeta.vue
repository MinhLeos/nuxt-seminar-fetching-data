<script setup lang="ts">
const title = ref('Seo Meta')
useSeoMeta({
  title,
  description: () => `description: ${title.value}`
})

</script>
<template>
    <div>
        <h2>useSeoMeta</h2>
    </div>
</template>