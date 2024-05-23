import React from "react";
import "./About.css";

function About(){
    return(

    <>
        <div className="containerAbout">

            <table className="acercade">
                <tr className="tituloA"><h1>Acerca de Galapagos Conservancy</h1></tr>
            </table>

            <table className="about">
                <tr>
                    <td className="imags"><img src="iguana1.jpg" width={510} height={400}></img></td>
                    <td className="textoA"> <h1> Nace un guardián de las Galápagos: Fundación Conservación Insular 1970:</h1><p>Un sueño prende en las Islas Encantadas. En el corazón del archipiélago de Galápagos, donde la naturaleza aún reinaba intacta, un sueño comenzó a germinar en la mente de un grupo de visionarios. Motivados por la belleza prístina de las islas y la fragilidad de su ecosistema único, se unieron para dar vida a la Fundación Conservación Insular (FCI). </p> </td>
                </tr>
                <tr>
                    <td className="textoB" id="texto2"><h1>Un faro de esperanza en un mar de desafíos </h1> <p> En 1970, el mundo era un lugar diferente. La conciencia ambiental aún no había alcanzado su apogeo, y las amenazas a la biodiversidad no eran tan evidentes como lo son hoy en día. Sin embargo, este grupo de pioneros vio la tormenta que se avecinaba y se comprometió a proteger las Galápagos para las generaciones futuras.</p></td>
                    <td className="imags"><img src="playa-punta-carola-1.jpg" width={500} height={400}></img></td>
                </tr>
            </table>

            <table className="actionsTitle">
                <tr className="tituloB"><h1>Un legado de acción y resultados</h1></tr>
            </table>

            <table className="actions">
                <tr>
                    <td className="card1"> <img src="ciencia.png" alt="imagen"></img> Investigación científica</td>
                    <td className="card2"> <img src="habitat.png" alt="imagen"></img> Restauración de hábitats</td>
                    <td className="card3"> <img src="educacion.png" alt="imagen"></img> Educación ambiental</td>
                </tr>
            </table>
    </div>


    </>
        
    )
}

export default About;