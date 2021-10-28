import React from 'react'
import {Link} from 'wouter'

import './NavBar.css'

export function NavBar () {
    return <>
        <section className="headerNav">
            <Link to='/contactos' className="link">
                Contatos
            </Link>
            <Link to='/companias' className="link">
                Compañias
            </Link>
            <Link to='/usuarios' className="link">
                Usuarios
            </Link>
            <Link to='/ubicacion' className="link">
                Region/Ciudad
            </Link>
        </section>
    </>
}


