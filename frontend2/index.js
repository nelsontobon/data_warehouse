import {loginService} from './service/_user.js'

let role = localStorage.getItem("role")
if (role == 'Basico'){
    console.log('hola')
    let header_user = document.getElementById('header_usuarios')
    header_user.style.display = "none"
}


let username = document.getElementById('username')
let password = document.getElementById('password')

let btnLogin = document.getElementById('btn-login')

btnLogin.addEventListener('click',()=>{
    let usernameValue = username.value
    let passwordValue = password.value
    loginService(usernameValue, passwordValue).then(
        (res) =>{
            if (res.jwt){
                localStorage.setItem("jwt", res.jwt);
                localStorage.setItem("role", res.role);

                window.location.replace("/frontend2/views/contactos/contactos.html")
            }else{
                let formUser = document.getElementById('formUser')
                formUser.innerHTML = formUser.innerHTML + "<h3>Usuario o contraseña incorrectos</h3>"
            }
        }
    )
})



