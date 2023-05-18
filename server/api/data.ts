// làm chậm thời gian gọi API để test useFetch và useLazyFetch hoặc useAsyncData và useLazyAsyncData

export default defineEventHandler(async (event: any) => {
    console.log('call api get data to demo Nuxt data')
      return [
        {
            id: '1',
            title: 'Todo 1'
        }
      ]
    });