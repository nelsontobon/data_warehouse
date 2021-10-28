import React from "react"
// import {Helmet} from 'react-helmet'
import { Contactos_busqueda } from '../../components/contactos_busqueda/Contactos_busqueda';
import "./contactos.css"

export  function Contactos() {

    return (
    <>  
        <header className="header-contactos">
            <section className="contactos-titulo">
                <h2>Contactos</h2>
            </section>
            <section className="contactos-busqueda">
                <Contactos_busqueda/>  
            </section>
        </header>
    </>
    )
}