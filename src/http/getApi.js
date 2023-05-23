import axios from 'axios'
const API = process.env.REACT_APP_API_URL;
const TICKET_API = process.env.REACT_APP_TICKET_API_URL;

async function getData(url) {
    try{
        const reset = await axios({
            method: 'get',
            url: API + url
        })
        return reset
    }catch (error){
        console.log(error)
    }
}

async function sendData(url, method, data) {
    try{
        const reset = await axios({
            baseURL: API,
            method: method,
            url: API + url,
            data: {
                ...data
            }
        })
        return reset
    }catch (error){
        console.log(error)
    }
}

async function sendTicket(url, method, data) {
    try{
        const reset = await axios({
            baseURL: TICKET_API,
            method: method,
            url: TICKET_API + url,
            data: {
                ...data
            }
        })
        return reset
    }catch (error){
        console.log(error)
    }
}


async function getTicket(url) {
    try{
        const reset = await axios({
            method: 'get',
            url: TICKET_API + url
        })
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

export {getData, sendData, getTicket, sendTicket, postQrCode}