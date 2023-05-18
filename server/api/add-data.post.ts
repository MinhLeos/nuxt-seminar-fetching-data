export default defineEventHandler(async (event: any) => {
    console.log('call api add data')
    const body = await readBody(event)
    console.log('body', body)
      try {
        const res = {
            status: true,
            message: 'Add data success'
        }
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(res);
          }, 5000);
        });
      } catch (error: any) {
        return {
          error: error.message,
        };
      }
    });