import {getRegions, delRegions, addCountry, delCountry, addCity, delCity, addRegion} from '../../service/_regions.js'

let role = localStorage.getItem("role")
if (role == 'Basico'){
    console.log('hola')
    let header_user = document.getElementById('header_usuarios')
    header_user.style.display = "none"
}




var container = document.getElementById("regions");
var addForm = document.getElementById("add-form");
var formContent = document.getElementById("add-form-content");

let countryContent = '<label class="input-add">Pais:<input id="add-country-form" type="text"></label></label><div><button id="btn-add-country"> Agregar</button><button id="btn-cancel-country"> cancelar</button></div>'
let cityContent = '<label class="input-add">Ciudad:<input id="add-city-form" type="text"></label><div><button id="btn-add-city">Agregar</button><button id="btn-cancel-city">cancelar</button></div>'
let regionContent = '<label class="input-add">Region:<input id="add-region-form" type="text"></label><div><button id="btn-add-region">Agregar</button><button id="btn-cancel-region">cancelar</button></div>'


function createRegions(){
  getRegions().then(
    (res) =>{
      let content = '<ul id="myUL">'
      let regions = res.data
      for (let region in regions){
        content += `
          <li>
            <span class="caret">${regions[region].region}</span>
            <button class="del-region del" id="del-${regions[region].region}">eliminar</button>
            <button class="add-country add" id="add-${regions[region].region}">Agregar</button>
            <ul class="nested">
          `
        for (let country in regions[region].country){
          content += `
            <li>
              <span class="caret">${country}</span>
              <button class="del-country del" id="del-${regions[region].region}-${country}">eliminar</button>
              <button class="add-city add" id="add-${regions[region].region}-${country}">Agregar</button>
              <ul class="nested">
          `
          for (let city in regions[region].country[country]){
            content += `<li>
              ${city}
              <button class="del-city del" id="del-${regions[region].region}-${country}-${city}">eliminar</button>
            </li>`
          }
          content += '</ul></li>'
        }
        content += '</ul></li>'
      }
      content += '</li></ul>'
      container.innerHTML = content

      var toggler = document.getElementsByClassName("caret");
      for (var i = 0; i < toggler.length; i++) {
        toggler[i].addEventListener("click", function() {
          this.parentElement.querySelector(".nested").classList.toggle("active");
          this.classList.toggle("caret-down");
        });
      }

      var btn_del_region = document.getElementsByClassName("del-region");
      var btn_del_country = document.getElementsByClassName("del-country");
      var btn_del_city = document.getElementsByClassName("del-city");
      var btn_add_country = document.getElementsByClassName("add-country");
      var btn_add_city = document.getElementsByClassName("add-city");

      var btn_add_region = document.getElementById("add-region");

      // agregar una region
      btn_add_region.addEventListener("click", function() {
        addForm.style.display = "flex"
        formContent.innerHTML = regionContent


        let aceptar = document.getElementById("btn-add-region");
        let cancelar = document.getElementById("btn-cancel-region");

        aceptar.addEventListener("click", function() {
          let region_form = document.getElementById("add-region-form").value;
          
          let data = {
              "region": region_form
          }
          

          addRegion(data).then((res)=>{
            addForm.style.display = "none"
            createRegions()
          })

        })
        cancelar.addEventListener("click", function() {
          addForm.style.display = "none"
        })
      });


      // eliminar una region
      for (var i = 0; i < btn_del_region.length; i++) {
        btn_del_region[i].addEventListener("click", function() {
          let region = this.getAttribute('id')
          region = region.split("-")[1]
          
          let data = {
              "region": region,
          }

          delRegions(data).then((res)=>{createRegions()})
        });
      }

      // agregar un pais a una region
      for (var i = 0; i < btn_add_country.length; i++) {
        btn_add_country[i].addEventListener("click", function() {
          addForm.style.display = "flex"
          formContent.innerHTML = countryContent
          let region = this.getAttribute('id')
          region = region.split("-")[1]

          let aceptar = document.getElementById("btn-add-country");
          let cancelar = document.getElementById("btn-cancel-country");

          aceptar.addEventListener("click", function() {
            let country_form = document.getElementById("add-country-form").value;
            
            let data = {
                "region": region,
                "data": {}
            }
            
            data['data'][country_form] = {}

            addCountry(data).then((res)=>{
              addForm.style.display = "none"
              createRegions()
            })
          })
          cancelar.addEventListener("click", function() {
            addForm.style.display = "none"
          })
        });
      }

      // eliminar un pais
      for (var i = 0; i < btn_del_country.length; i++) {
        btn_del_country[i].addEventListener("click", function() {
          let id = this.getAttribute('id')
          let region = id.split("-")[1]
          let country = id.split("-")[2]
          
          let data = {
              "region": region,
              "data": {}
            }
            
          data['data'][country] = {}
          console.log(data)

          delCountry(data).then((res)=>{createRegions()})
        });
      }

      // Agregar una ciudad
      for (var i = 0; i < btn_add_city.length; i++) {
        btn_add_city[i].addEventListener("click", function() {
          addForm.style.display = "flex"
          formContent.innerHTML = cityContent
          let id = this.getAttribute('id')
          let region = id.split("-")[1]
          let pais = id.split("-")[2]
          
          console.log(region)
          console.log(pais)


          let aceptar = document.getElementById("btn-add-city");
          let cancelar = document.getElementById("btn-cancel-city");

          aceptar.addEventListener("click", function() {
            let city_form = document.getElementById("add-city-form").value;
            
            let data = {
                "region": region,
                "data": {}
            }
            
            data['data'][pais] = {}
            data['data'][pais][city_form] = city_form


            addCity(data).then((res)=>{
              addForm.style.display = "none"
              createRegions()
            })
          })

          cancelar.addEventListener("click", function() {
            addForm.style.display = "none"
          })
        });
      }

      // eliminar una ciudad
      for (var i = 0; i < btn_del_city.length; i++) {
        btn_del_city[i].addEventListener("click", function() {
          let id = this.getAttribute('id')
          let region = id.split("-")[1]
          let pais = id.split("-")[2]
          let ciudad = id.split("-")[3]

          
          let data = {
              "region": region,
              "data": {}
            }
            
          data['data'][pais] = {}
          data['data'][pais][ciudad] = ""

          delCity(data).then((res)=>{createRegions()})
        });
      }

    }
  )
}

createRegions()
