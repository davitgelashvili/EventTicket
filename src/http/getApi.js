import axios from 'axios'

async function getApi(url) {
    try{
        const reset = await axios.get(`http://localhost:3001/${url}`)
        return reset
    }catch (error){
        console.log(error)
    }
}

async function postApi(url, data) {
    try{
        const reset = await axios.post(`http://localhost:3001/${url}`, data)
        return reset
    }catch (error){
        console.log(error)
    }
}

export {getApi, postApi}