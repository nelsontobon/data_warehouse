import {CreateUserService} from '../../service/_user.js'



let btnCrear = document.getElementById('btn-crear')

btnCrear.addEventListener('click',()=>{
    let name = document.getElementById('name').value
    let lastname = document.getElementById('lastname').value
    let email = document.getElementById('email').value
    let role = document.getElementById('role').value
    let password = document.getElementById('password').value
    let second_password = document.getElementById('password2').value

    let data = {name, lastname, email, role, password, second_password}

    console.log(data)
    CreateUserService(data).then(
        (res) =>{
            if (res.status == 'ok'){
                let content = document.getElementById('createContent')
                content.innerHTML = '<h2>usuario creado correctamente</h2>'
            }
        }
    )
})