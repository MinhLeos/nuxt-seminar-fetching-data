export default defineEventHandler(async (event) => {
    console.log('Call API demo useRequestUrl')
    const url = getRequestURL(event)
    console.log('url', url)
    return {
        title: 'useRequestUrl'
    }
})