export const getUser = async () => {
    let response = await axios.get('/contacts/api/getUser')
    return { type: 'UPDATE_USER', payload: response.data.result };
}