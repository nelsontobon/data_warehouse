import {getCompanies, addCompany, delCompany, updCompany} from '../../service/_companies.js'

let role = localStorage.getItem("role")
if (role == 'Basico'){
    console.log('hola')
    let header_user = document.getElementById('header_usuarios')
    header_user.style.display = "none"
}

let companyContent = `
    <label class="input-add">Nombre:<input id="add-name-form" type="text"></label>
    <label class="input-add">Direccion:<input id="add-address-form"type="text"></label>
    <label class="input-add">Email:<input id="add-email-form"type="text"></label>
    <label class="input-add">Numero:<input id="add-phone-form"type="text"></label>
    <label class="input-add">Pais:<input id="add-city-form" type="text"></label>
    <div><button id="btn-add">Agregar</button><button id="btn-cancel">cancelar</button></div>
`

let editContent = `
    <label class="input-add">Nombre:<input id="add-name-form" type="text"></label>
    <label class="input-add">Direccion:<input id="add-address-form"type="text"></label>
    <label class="input-add">Email:<input id="add-email-form"type="text"></label>
    <label class="input-add">Numero:<input id="add-phone-form"type="text"></label>
    <label class="input-add">Pais:<input id="add-city-form" type="text"></label>
    <div>
        <button id="btn-edit">Editar</button>
        <button id="btn-del">Eliminar</button>
        <button id="btn-cancel">cancelar</button>
    </div>
`


let createCompany = document.getElementById('agregar-btn')
let addForm = document.getElementById("add-form")
let formContent = document.getElementById("add-form-content")

let name_form = document.getElementById("add-name-form");
let city_form = document.getElementById("add-city-form");
let address_form = document.getElementById("add-address-form");
let phone_form = document.getElementById("add-phone-form");
let email_form = document.getElementById("add-email-form");

let aceptar = document.getElementById("btn-add");
let cancelar = document.getElementById("btn-cancel");
let editar = document.getElementById("btn-edit");

createCompany.addEventListener("click", function(){
    addForm.style.display = "flex"
    formContent.innerHTML = companyContent

    let name_form = document.getElementById("add-name-form");
    let city_form = document.getElementById("add-city-form");
    let address_form = document.getElementById("add-address-form");
    let phone_form = document.getElementById("add-phone-form");
    let email_form = document.getElementById("add-email-form");

    let aceptar = document.getElementById("btn-add");
    let cancelar = document.getElementById("btn-cancel");

    clearInputs()

    aceptar.addEventListener("click", function() {
        let data = {
            "name": name_form.value,
            "city": city_form.value,
            "address": address_form.value,
            "phone": phone_form.value,
            "email": email_form.value,
        }

        addCompany(data).then((res)=>{
            if (res.status = 'ok'){
                createRow(data)
            }
            addForm.style.display = "none"
        })
    })

    cancelar.addEventListener("click", function() {
        addForm.style.display = "none"
    })
})

function renderCompanies(){
    let tbodyRef = document.getElementById('tb_companies').getElementsByTagName('tbody')[0]
    tbodyRef.innerHTML = ''
    getCompanies().then(
        (res) =>{
            for (let [key, data]  of Object.entries(res.data)){
                createRow(data)
            }
        }
    )
}

function createRow (data){
    let tbodyRef = document.getElementById('tb_companies').getElementsByTagName('tbody')[0];
    let newRow = tbodyRef.insertRow();

    // boton borrar
    // let btn_del = document.createElement('button',)
    // btn_del.setAttribute('id', tbodyRef.rows.length );
    // btn_del.innerHTML = 'borrar'

    

    // boton editar
    let btn_edit = document.createElement('button',)
    btn_edit.setAttribute('id', `edit-${data._id}` );
    btn_edit.innerHTML = 'Editar'

    btn_edit.addEventListener('click', function(){
        addForm.style.display = "flex"
        formContent.innerHTML = editContent
        let id_btn =  (this.getAttribute('id')).split('-')[1]
        console.log(id_btn)

        let name_form = document.getElementById("add-name-form");
        let city_form = document.getElementById("add-city-form");
        let address_form = document.getElementById("add-address-form");
        let phone_form = document.getElementById("add-phone-form");
        let email_form = document.getElementById("add-email-form");

        let cancelar = document.getElementById("btn-cancel");
        let editar = document.getElementById("btn-edit");
        let eliminar = document.getElementById("btn-del");

        name_form.value = data.name
        city_form.value = data.city
        address_form.value = data.address
        phone_form.value = data.phone
        email_form.value = data.email

        editar.addEventListener("click", function() {
            
            let newData = {
                "name" : name_form.value,
                "address" : address_form.value,
                "email" : email_form.value,
                "phone" : phone_form.value,
                "city" : city_form.value
            }

            updCompany(id_btn, newData).then(
                (res)=>{
                    console.log(res)
                    if (res.status = 'ok'){
                        addForm.style.display = "none"
                        renderCompanies()
                    }
                }
            )
        })

        eliminar.addEventListener('click', function(){
            data = {
                "name": data.name
            }

            delCompany(data).then(
                (res)=>{
                    addForm.style.display = "none"
                    renderCompanies()
                }
            )
        })

        cancelar.addEventListener("click", function() {
            addForm.style.display = "none"
        })
        
    })

    // agregar filas a tabla

    let company = [
        document.createTextNode(data.name), 
        document.createTextNode(data.address), 
        document.createTextNode(data.city),
        btn_edit
    ]
    
    for (let tr in company){
        let newCell = newRow.insertCell();
        newCell.appendChild(company[tr]);
    }
}


function clearInputs(){
    name_form.value = ''
    city_form.value = ''
    address_form.value = ''
    phone_form.value = ''
    email_form.value = ''
}

renderCompanies()