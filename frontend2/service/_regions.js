const ENDPOINT = 'http://localhost:8080/region'

export async function getRegions ( ) {
    let jwt = localStorage.getItem("jwt")
    let response = await fetch(`${ENDPOINT}/getRegions`, {
        method: 'GET',
        headers: {
        "Authorization": `Bearer ${jwt}`, 
        }
    })
    response = await response.json()
    return response
} 

export async function addRegion (data) {
    let jwt = localStorage.getItem("jwt")
    let response = await fetch(`${ENDPOINT}/region`, {
        method: 'POST',
        headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${jwt}`, 
        },
        body: JSON.stringify(data)
    })
    response = await response.json()
    return response
} 

export async function addCountry (data) {
    let jwt = localStorage.getItem("jwt")
    let response = await fetch(`${ENDPOINT}/country`, {
        method: 'POST',
        headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${jwt}`, 
        },
        body: JSON.stringify(data)
    })
    response = await response.json()
    return response
} 

export async function addCity (data) {
    let jwt = localStorage.getItem("jwt")
    let response = await fetch(`${ENDPOINT}/city`, {
        method: 'POST',
        headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${jwt}`, 
        },
        body: JSON.stringify(data)
    })
    response = await response.json()
    return response
} 

export async function delRegions (data) {
    let jwt = localStorage.getItem("jwt")
    let response = await fetch(`${ENDPOINT}/region`, {
        method: 'DELETE',
        headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${jwt}`, 
        },
        body: JSON.stringify(data)
    })
    response = await response.json()
    return response
} 

export async function delCountry (data) {
    let jwt = localStorage.getItem("jwt")
    let response = await fetch(`${ENDPOINT}/country`, {
        method: 'DELETE',
        headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${jwt}`, 
        },
        body: JSON.stringify(data)
    })
    response = await response.json()
    return response
} 

export async function delCity (data) {
    let jwt = localStorage.getItem("jwt")
    let response = await fetch(`${ENDPOINT}/city`, {
        method: 'DELETE',
        headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${jwt}`, 
        },
        body: JSON.stringify(data)
    })
    response = await response.json()
    return response
} 