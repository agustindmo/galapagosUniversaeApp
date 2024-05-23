import React from "react";
import "./Buscar.css"
import MyButton from "./button";



function Buscar(){
    
    return(

    <>

        <table className="busqueda">

            <tr><h1>Busqueda de especies</h1></tr>
            <tr><p className="txtbusq">Adentrate en la base de datos de la Fundancion Charles Darwin para encontrar informacion sobre las especies de las Islas Galapagos</p></tr>
            <tr><MyButton to="/species"><button className="botonbusq">Buscar</button></MyButton></tr>
        </table>


    </>

    );
}

export default Buscar;