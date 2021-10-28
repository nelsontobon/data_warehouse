import React, { useState } from "react"
import './Contactos_busqueda.css'

export function Contactos_busqueda () {
    const [busqueda, setBusqueda] = useState("");

    return <>
        <section className="bus-section" id="busquedaSection">
            <div className="bus-barra" id="cont-barra">
                <input className='busqueda' onChange={(e) => setBusqueda(e.target.value)} value={busqueda}/>
                <span class='icon' id="bus-icon">
                    <i class="fas fa-search" id="bus-icon-busq"></i>
                </span>
            </div>
            <div className="sugerencias" id="segeridos">
                <ol className="sugerencias-lista" id="sug-lista">
                </ol>
            </div>
        </section>
    </>
}
