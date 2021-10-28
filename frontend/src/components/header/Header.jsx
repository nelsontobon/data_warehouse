import React from 'react'
import { NavBar } from '../navBar/NavBar'

import './Header.css'

export function Header () {
    return <>
        <section className="header">
            <section className="headerLogo">
                LOGO
            </section>
            <NavBar/>
        </section>
    </>
}


