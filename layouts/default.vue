<template>
    <div>
        <p>Header</p>
        <slot></slot>
    </div>
</template>
<script setup>
    useServerSeoMeta({
        title: "Server Seo Meta",
        description: () => `description: Server Seo Meta`
    })
    // cũng có thể dùng useHead ở đây để áp dụng cho nhiều pages
</script>