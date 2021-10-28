const ENDPOINT = 'http://localhost:8080/user'

export default function loginService ({ username, password }) {

    return fetch(`${ENDPOINT}/login`, {
        method: 'POST',
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({username, password})
    }).then(res => {
        if (!res.ok) throw new Error('Response is NOT ok')
        return res.json()
    }).then(res => {
        console.log(res)
        const { jwt } = res
        return jwt
    })
}

export  function CreateUserService (data) {
    // window.sessionStorage.setItem('jwt', jwt)
    return fetch(`${ENDPOINT}/createUser`, {
        method: 'POST',
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(res => {
        if (!res.ok) throw new Error('Response is NOT ok')
        return res.json()
    }).then(res => {
        console.log(res)
        return res
    })
}