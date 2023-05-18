<template>
    <div>
      <h2>Request Header</h2>
    </div>
  </template>
  
  <script setup>
    // Get all request headers
    const allHeaders = useRequestHeaders()
    // Get only cookie request header
    const headers = useRequestHeaders(['cookie'])

    console.log('allHeaders', allHeaders)
    console.log('headers', headers)

    const { data } = useFetch('/api/me', {
        headers: useRequestHeaders(['cookie'])
        // headers: useRequestHeaders(['authorization'])
    })
  </script>