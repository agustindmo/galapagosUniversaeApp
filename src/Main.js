import React from "react";
import "./Contact.css"
import "./Main.css";
import About from "./About";
import Alerts from "./Alerts";
import Buscar from "./Buscar";
import Contact from "./Contact";
import MySecondButton from "./secondbutton";

function Main() {

    return(
        <>        
        <div className="container" id="MainScreen">
        
        <div className="hero-image">

            <table className="tabla1">
                <tr className="titulo" id="tituloMain">Protege el futuro</tr>
                <tr className="textoMain" id="textoMain">Las Islas Galápagos son un santuario de biodiversidad único en el mundo, hogar de especies que no se encuentran en ningún otro lugar del planeta. Su conservación es vital no solo para la flora y fauna que allí habita, sino para el equilibrio ecológico global.</tr>
                <tr className="botones">
                    <td ><MySecondButton to="/Main#Contactanos"><button className="donar">Donar</button></MySecondButton></td>
                    <td ><MySecondButton to="/Main#Contactanos"><button className="suscribe">Suscribirse</button></MySecondButton></td>
                </tr>
            </table>

        </div>

        </div>

      <div id="Acercade"><About/></div>
      <div id="alertanos"><Alerts/></div>
      <div id="buscador"><Buscar/></div>
      <div id="Contactanos"><Contact/></div>
       </>
    );
}

export default Main;