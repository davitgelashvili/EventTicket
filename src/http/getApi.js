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

async function postQrCode(data) {
    try{
        const reset = await axios.get(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data}`)
        return reset
    }catch (error){
        console.log(error)
    }
}

async function putApi(url, data) {
    try{
        const reset = await axios.put(`http://localhost:3001/${url}`, data)
        return reset
    }catch (error){
        console.log(error)
    }
}

async function deleteApi(url, data) {
    try{
        const reset = await axios.delete(`http://localhost:3001/${url}`)
        return reset
    }catch (error){
        console.log(error)
    }
}

export {getApi, postApi, postQrCode, putApi, deleteApi}