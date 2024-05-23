import React, { Children } from 'react';
import "./Alerts.css";
import MyButton from './button';



function Alerts(){
      
    return (

    <>

    <div className='containerAlert'>
        <table className='tableAlert'>
            <td>
                <img src='botella.jpg' height={500} width={700}></img>
            </td>
            <td>
                <tr>
                    <h1 className='tituloAlert'>Registra una alerta en la zona</h1>
                </tr>
                <tr>
                    <p className='textAlert'>Reporta cualquier actividad que pueda dañar el medio ambiente de Galápagos, como:Contaminación: Desechos sólidos, derrames de aceite, contaminación del agua, etc. Especies invasoras: Observaciones de animales o plantas no nativas. Daños a la flora y fauna: Destrucción de hábitats, caza furtiva, etc. Otras actividades dañinas: Pesca ilegal, minería ilegal, etc. Tu información nos ayudará a: Identificar y evaluar las amenazas al medio ambiente de Galápagos. Tomar medidas para proteger las islas y su biodiversidad. Educar y sensibilizar a la comunidad sobre la importancia de la conservación.</p>
                </tr>
                <tr>
                <MyButton to="/Form"><button className="reportar">Reportar</button></MyButton>
                </tr>
            </td>          
        </table>
    </div>

    </>
  );
};

export default Alerts;