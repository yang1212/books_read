import axios from 'axios'

export function get(url, config) {
    return new Promise((resolve, reject) => {
        axios.get(url).then((res) => {
            resolve(res.data)
        }).catch((error) => {
            reject(error)
        })
    })
}

export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params).then((res) => {
            resolve(res.data)
        }).catch((error) => {
            reject(error)
        })
    })
}