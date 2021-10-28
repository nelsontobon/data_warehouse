import {Route, Switch } from "wouter";

import { Header } from './components/header/Header';
import { Contactos } from './pages/contactos'
import { Companias } from './pages/companias'
import { Usuarios } from './pages/usuarios'
import { Ubicacion } from './pages/ubicacion'
import { Login } from "./pages/login";

import { UserContextProvider } from "./context/userContext";

import './App.css';


function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <Header/>
        <Switch>
          <Route component={Login} path="/login" />
          <Route component={Contactos} path="/contactos" />
          <Route component={Companias} path="/companias" />
          <Route component={Usuarios} path="/usuarios" />
          <Route component={Ubicacion} path="/ubicacion" />
        </Switch>
      </div>
    </UserContextProvider>
    
  );
}

export default App;
