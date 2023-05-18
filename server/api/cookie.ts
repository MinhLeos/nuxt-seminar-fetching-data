export default defineEventHandler(async (event) => {
    console.log('call API cookie')
    let counter = getCookie(event, 'counter') || -111
    console.log('API', counter)
    setCookie(event, 'counter', '123456789')
    return { counter}
})