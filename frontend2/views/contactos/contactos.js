import {searchContact,getContacts, addContact, getContactId, deleteId, updateId} from '../../service/_contacts.js'
import {planRowContact} from '../../templates/_plantillas.js'
import {addRegion, getRegions} from '../../service/_regions.js'


let role = localStorage.getItem("role")
if (role == 'Basico'){
    console.log('hola')
    let header_user = document.getElementById('header_usuarios')
    header_user.style.display = "none"
}

let buscar_btn = document.getElementById('bus-icon')
let buscar_input = document.getElementById('bus-input')
let tbody_table = document.getElementById('tbody_table')


// ordenar tabla
let tid = "#contactsTable";
let headers = document.querySelectorAll(tid + " th");

headers.forEach(function(element, i) {
    element.addEventListener("click", function() {
    w3.sortHTML(tid, ".item", "td:nth-child(" + (i + 1) + ")");
    });
});

//obtener regiones
let data_regions = {}
getRegions().then((res)=>{
    data_regions = res.data
})

// obtener los contactos
renderContacts()

// para el buscador
buscar_btn.addEventListener('click', function () {
    searchContact(buscar_input.value).then((res) => {
        tbody_table.innerHTML = renderContacts(res.data)
    })
})



// --------------------- AGREGAR CONTACTOS ------------------------------------
let bnt_agregar = document.getElementById('add-contact')
let bnt_save = document.getElementById('in-save')
let bnt_update = document.getElementById('in-update')
let bnt_delete = document.getElementById('in-delete')
let addForm = document.getElementById('new_contact')


let in_name = document.getElementById('in-name')
let in_lastname = document.getElementById('in-lastname')
let in_position = document.getElementById('in-position')
let in_email = document.getElementById('in-email')
let in_company = document.getElementById('in-company')
let in_address = document.getElementById('in-address')
let in_interest = document.getElementById('in-interest')
let in_channel1_contact = document.getElementById('in-channel1-contact')
let in_channel2_contact = document.getElementById('in-channel2-contact')

let selRegion = document.getElementById('sel-region')
let selPais = document.getElementById('sel-pais')
let selCiudad = document.getElementById('sel-ciudad')
let region_sel = ''
let pais_sel = ''
let ciudad_sel = ''

// Abrir ventana de agregar
bnt_agregar.addEventListener("click", function(){
    addForm.style.display = "flex"

    bnt_update.style.display = "none"
    bnt_delete.style.display = "none"
    bnt_save.style.display = "block"

    let cancelar = document.getElementById("add-cancel");

    cancelar.addEventListener("click", function() {
        addForm.style.display = "none"
    })

    // Limpiar inputs
    resetValues()
    //cargar regiones
    regionInputs()
})

//enviar contacto
bnt_save.addEventListener("click", function(){
    let data_contact = getDataInputs()

    addContact(data_contact).then((res)=>{
        addForm.style.display = "none"
        renderContacts()
    })
})


// renderizar contactos
function renderContacts() {
    getContacts().then((res) => {
        let table = ''
        for (let contact in res.data) {
            let row = planRowContact(res.data[contact])
            table = table + row
        }
        tbody_table.innerHTML = table

        addEventEdit()
        addEventCheck()
        deleteContacts()
    })
}

// eventos para editar contactos
function addEventEdit(){
    let btn = document.getElementsByClassName('btn-edit')
    
    for (let i=0; i< btn.length; i++){
        btn[i].addEventListener("click", function(){
            let id = (this.id).split('-')[1]

            getContactId(id).then((res)=>{
                addForm.style.display = "flex"

                bnt_update.style.display = "block"
                bnt_delete.style.display = "block"
                bnt_save.style.display = "none"

                let cancelar = document.getElementById("add-cancel");

                cancelar.addEventListener("click", function() {
                    addForm.style.display = "none"
                })

                regionInputs()
                cargarDataUpdate(res.data)

                bnt_delete.addEventListener('click', ()=>{
                    deleteId(id).then((res)=>{
                        addForm.style.display = "none"
                        renderContacts()
                    })
                })

                bnt_update.addEventListener('click', ()=>{
                    let data_contact = getDataInputs()
                    console.log(data_contact)
                    updateId(id, data_contact).then((res)=>{
                        addForm.style.display = "none"
                        renderContacts()
                    })
                })
            })
        })
    }
}



function addEventCheck(){
    let checks = document.getElementsByClassName('input-check')
    
    for (let i=0; i< checks.length; i++){
        checks[i].addEventListener("change", function(){
            let id = (this.id).split('-')[1]
            let row = document.getElementById(`tr-${id}`)
            row.classList.toggle("check-select");

            let counter = document.getElementById('counter_contacts')
            let selects = document.getElementsByClassName('check-select')
            counter.innerHTML = `Contactos a eliminar: ${selects.length}`

            let div = document.getElementById('div_delete')
            if (selects.length>0){
                div.style.display = 'flex'
            }else{
                div.style.display = 'none'
            }
        })
    }
}

function deleteContacts(){
    let btn_delete_contacts = document.getElementById('delete_contacts')
    let selects = document.getElementsByClassName('check-select')

    btn_delete_contacts.addEventListener('click', ()=>{

        for (let i=0; i< selects.length; i++){
            let id = (selects[i].id).split('-')[1]
            console.log('id', id)
            deleteId(id).then((res)=>{
                console.log(id)
            })
        }

        let div = document.getElementById('div_delete')
        div.style.display = 'none'
        renderContacts()

    })

}

function regionInputs(){
    let options_region = ''
    selRegion.innerHTML = '<option value="" disabled selected hidden>Seleccionar Region</option>'

    // cargar regiones
    for (let idx in data_regions){
        let {region} = data_regions[idx]
        options_region = options_region + `<option value="${region}">${region}</option>`
    }

    selRegion.innerHTML = selRegion.innerHTML + options_region

    //cargar paises
    selRegion.addEventListener('change', ()=>{
        inputRegion(data_regions, selRegion.value)
    })

    //cargar ciudades
    selPais.addEventListener('change', ()=>{
        inputPais(data_regions, selPais.value, region_sel)
    })

    selCiudad.addEventListener('change', ()=>{
        ciudad_sel = selCiudad.value
    })
        
}


function resetValues(){
    in_name.value = ''
    in_lastname.value = ''
    in_position.value = ''
    in_email.value = ''
    in_company.value = ''
    
    selRegion.value = ''
    selPais.value = ''
    selPais.setAttribute('disabled', false)
    selCiudad.value = ''
    selCiudad.setAttribute('disabled', false)

    in_address.value = ''
    in_interest.value = ''
    in_channel1_contact.value = ''
    in_channel2_contact.value = ''
}


function inputRegion(data_regions, region){
    selPais.removeAttribute('disabled')
    region_sel = region // selRegion.value

    let resultado = data_regions.find( (data) => data.region === region_sel );
    let options_country = ''
    // cargar paises
    let countries = Object.keys(resultado.country)
    
    for (let idx in countries){
        options_country = options_country + `<option value="${countries[idx]}">${countries[idx]}</option>`
    }
    selPais.innerHTML = '<option value="" disabled selected hidden>Seleccionar Pais</option>'+ options_country
}

function inputPais(data_regions, sel_pais, region_sel){
    selCiudad.removeAttribute('disabled')
    pais_sel = sel_pais//selPais.value

    let options_city = '' 
    let resultado = data_regions.find( (data) => data.region === region_sel );
    resultado =  resultado.country[pais_sel]
    console.log(pais_sel)
    
    // cargar ciudad
    let cities = Object.keys(resultado)
    
    for (let idx in cities){
        options_city = options_city + `<option value="${cities[idx]}">${cities[idx]}</option>`
    }
    selCiudad.innerHTML = '<option value="" disabled selected hidden>Seleccionar ciudad</option>'+ options_city
}

function cargarDataUpdate (data){
    in_name.value = data.name
    in_lastname.value = data.lastname
    in_position.value = data.position
    in_email.value = data.email
    in_company.value = data.company

    inputRegion(data_regions, data.region)
    inputPais(data_regions, data.country, data.region)

    selRegion.value = data.region
    selPais.value = data.country
    selCiudad.value = data.city

    in_address.value = data.address
    in_interest.value = data.interest
    in_channel1_contact.value = data['channels'].WhatsApp
    in_channel2_contact.value = data['channels'].Instagram
}

function getDataInputs(){
    return {
        "name" : in_name.value,
        "lastname" : in_lastname.value,
        "position" : in_position.value,
        "email" : in_email.value,
        "company" : in_company.value,
        "region" : region_sel,
        "country" : pais_sel,
        "city" : ciudad_sel,
        "address" : in_address.value,
        "interest" : in_interest.value,
        "channels" : {
            "WhatsApp": in_channel1_contact.value,
            "Instagram": in_channel2_contact.value
        }
    }
}