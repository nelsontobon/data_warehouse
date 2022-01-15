const ENDPOINT = 'http://localhost:8080/contacts'

export async function searchContact(data) {
    let jwt = localStorage.getItem("jwt")
    let response = await fetch(`${ENDPOINT}/search?data=${data}`, {
        method: 'GET',
        headers: {
        "Authorization": `Bearer ${jwt}`, 
        }
    })
    response = await response.json()
    return response
} 

export async function getContacts() {
    let jwt = localStorage.getItem("jwt")
    let response = await fetch(`${ENDPOINT}/`, {
        method: 'GET',
        headers: {
        "Authorization": `Bearer ${jwt}`, 
        }
    })
    response = await response.json()
    return response
}

export async function getContactId(id) {
    let jwt = localStorage.getItem("jwt")
    let response = await fetch(`${ENDPOINT}/contactid?id=${id}`, {
        method: 'GET',
        headers: {
        "Authorization": `Bearer ${jwt}`, 
        }
    })
    response = await response.json()
    return response
} 

export async function addContact (data) {
    let jwt = localStorage.getItem("jwt")
    let response = await fetch(`${ENDPOINT}/contact`, {
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

export async function deleteId(id) {
    let jwt = localStorage.getItem("jwt")
    let response = await fetch(`${ENDPOINT}/deleteid?id=${id}`, {
        method: 'DELETE',
        headers: {
        "Authorization": `Bearer ${jwt}`, 
        }
    })
    response = await response.json()
    return response
} 

export async function updateId(id, data) {
    console.log('data', data)
    let jwt = localStorage.getItem("jwt")
    let response = await fetch(`${ENDPOINT}/updateid?id=${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${jwt}`, 
        },
        body: JSON.stringify(data)
    })
    response = await response.json()
    return response
} 