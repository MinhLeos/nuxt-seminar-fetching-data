// làm chậm thời gian gọi API để test useFetch và useLazyFetch hoặc useAsyncData và useLazyAsyncData

export default defineEventHandler(async (event: any) => {
    console.log('call api to demo Request ')
    const header = getHeader(event, 'cookie')
    // const header = getHeader(event, 'authorization')
    console.log('call API header', header)
      return [
        {
            me: 'me'
        }
      ]
    });