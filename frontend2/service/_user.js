const ENDPOINT = 'http://localhost:8080/user'

export async function loginService (name, password ) {
    let response = await fetch(`${ENDPOINT}/login`, {
        method: 'POST',
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({name, password})
    })
    response = await response.json()
    return response
} 

export async function CreateUserService (data) {
    
    let response = await fetch(`${ENDPOINT}/createUser`, {
        method: 'POST',
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    response = await response.json()
    return response
}