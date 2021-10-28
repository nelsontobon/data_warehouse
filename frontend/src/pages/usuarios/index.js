import React, { useState } from "react";
import {useLocation} from "wouter";
import useCreateUser from '../../hooks/useCreateUser';
import { useEffect } from "react";
import './usuarios.css';

export function Usuarios({onLogin}) {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [perfil, setPerfil] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");


    const [, navigate] = useLocation()
    const {isLoginLoading, hasLoginError, createUser} = useCreateUser()

    // useEffect(() => {
    //     if (isLogged) {
    //         navigate('/')
    //         onLogin && onLogin()
    //     }
    // }, [isLogged, navigate, onLogin])

    const handleSubmit = (e) => {
        console.log('hola')
        e.preventDefault(); 
        createUser({name,lastName,email,perfil,password,password2})
    };

    return (
    <>
        {!isLoginLoading &&
        <div className='login'>
                <form className='form-user' onSubmit={handleSubmit}>
                <label >
                    Name
                    <input className='input-name' placeholder="name" onChange={(e) => setName(e.target.value)} value={name}/>
                </label>
                <label >
                    Apellido
                    <input className='input-lastName' placeholder="lastName" onChange={(e) => setLastName(e.target.value)} value={lastName}/>
                </label>
                <label >
                    Email
                    <input className='input-email' placeholder="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                </label>
                <label >
                    Perfil
                    <input className='input-perfil' placeholder="perfil" onChange={(e) => setPerfil(e.target.value)} value={perfil}/>
                </label>
                <label >
                    password
                    <input className='input-password' type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                </label>
                <label >
                    repetir password
                    <input className='input-password' type="password" placeholder="password" onChange={(e) => setPassword2(e.target.value)} value={password2}/>
                </label>

                <button className='btn'>Login</button>
            </form>
        </div>
        }
        {hasLoginError && <strong>Credentials are invalid</strong>}
    </>
    );
}