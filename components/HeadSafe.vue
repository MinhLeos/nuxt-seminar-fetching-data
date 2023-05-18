<script setup>
    const title = ref('My App')
    // onMounted(()=> {
    //     useHead({
    //         title: title,
    //         meta: [
    //             { name: 'description', content: 'My amazing site.' }
    //         ],
    //         bodyAttrs: {
    //             class: 'test'
    //         },
    //         script: [ { id: 'xss-script', innerHTML: 'console.log("xss")' },
    //                 { innerHTML: 'document.querySelector("body").innerHTML = "<div>Ha ha ha</div>"; console.log("test 123")' } 
    //         ]
    //     })
    // })

    onMounted(() => {
        useHeadSafe({
            title: title,
            meta: [
                { name: 'description', content: 'My amazing site.' }
            ],
            bodyAttrs: {
                class: 'test'
            },
            script: [ { id: 'xss-script', innerHTML: 'console.log("xss")' },
                    { innerHTML: 'document.querySelector("body").innerHTML = "<div>Ha ha ha</div>"; console.log("test 123")' } 
            ]
        })
    })
    function click() {
        title.value = 'Head'
    }
</script>
<template>
    <div>
        <h1>useHead and useHeadSafe</h1>
        <button @click="click">Click Me</button>
    </div>
</template>