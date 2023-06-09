// làm chậm thời gian gọi API để test useFetch và useLazyFetch hoặc useAsyncData và useLazyAsyncData

export default defineEventHandler(async (event: any) => {
  console.log('call api quote')
    try {
      const res = await $fetch(`https://636322ac66f75177ea3e0792.mockapi.io/quote/${event.context.params.id}`, {
        method: "GET",
      });
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(res);
        }, 2000);
      });
    } catch (error: any) {
      return {
        error: error.message,
      };
    }
  });