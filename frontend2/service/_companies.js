const ENDPOINT = 'http://localhost:8080/companies'

export async function getCompanies( ) {
    let jwt = localStorage.getItem("jwt")
    let response = await fetch(`${ENDPOINT}/getcompany`, {
        method: 'GET',
        headers: {
        "Authorization": `Bearer ${jwt}`, 
        }
    })
    response = await response.json()
    return response
} 

export async function addCompany (data) {
    let jwt = localStorage.getItem("jwt")
    let response = await fetch(`${ENDPOINT}/company`, {
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

export async function delCompany (data) {
    let jwt = localStorage.getItem("jwt")
    let response = await fetch(`${ENDPOINT}/company`, {
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

export async function updCompany(id, data) {
    let jwt = localStorage.getItem("jwt")
    let response = await fetch(`${ENDPOINT}/company?id=${id}`, {
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

