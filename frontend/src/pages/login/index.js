import React, { useState } from "react";
import {useLocation} from "wouter";
import useUser from '../../hooks/useUser';
import { useEffect } from "react";
import './login.css';

export function Login({onLogin}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [, navigate] = useLocation()
    const {isLoginLoading, hasLoginError, login, isLogged} = useUser()

    useEffect(() => {
        if (isLogged) {
            navigate('/')
            onLogin && onLogin()
        }
    }, [isLogged, navigate, onLogin])

    const handleSubmit = (e) => {
        e.preventDefault(); 
        login({ username, password })
    };

    return (
    <>
        {isLoginLoading && <strong>Checking credentials...</strong>}
        {!isLoginLoading &&
        <div className='login'>
                <form className='form' onSubmit={handleSubmit}>
                <label >
                    username
                    <input className='input-username' placeholder="username" onChange={(e) => setUsername(e.target.value)} value={username}/>
                </label>

                <label >
                    password
                    <input className='input-password' type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                </label>

                <button className='btn'>Login</button>
            </form>
        </div>
        }
        {hasLoginError && <strong>Credentials are invalid</strong>}
    </>
    );
}