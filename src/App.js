import React from "react";
import Navbar from "./NavBar";
import Main from "./Main";
import About from "./About";
import Alerts from "./Alerts";
import Buscar from "./Buscar";
import { Route,Routes } from 'react-router-dom';
import Especies from "./species";
import Form from "./Form";

function App() {
  return (
    <>
      <Navbar/>
      <div>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/Main" element={<Main/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Alerts" element={<Alerts/>}/>
            <Route path="/Buscar" element={<Buscar/>}/>
            <Route path="/Contacto" element={<Main/>}/>
            <Route path="/species" element={<Especies/>}/>
            <Route path="/Form" element={<Form/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App;
