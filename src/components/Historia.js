import React from 'react'
import foto from '../imgs/perrito-historia.jpg'

export const Historia = () => {
    return(
        <section>
            <div className="cont_curso cont_educar row">
                <div className="cont_info_curso col-xl-7 col-md-7 col-sm-12">
                    <div className="titulo_curso">Hola!</div>

                    <div className="cont_texto">
                        <div className="texto">Soy Yanina, directora y fundadora de la Escuela Canina Pambo.</div>
                        <div className="texto">Desde pequeña siempre tuve una afinidad y conexión especial con los perros. Por esa razón comencé a realizar paseos caninos con grupos reducidos con el fin de lograr un servicio personalizado y responsable. A partir de los paseos comenzaron a surgir problemáticas del estilo: "...el perro me salta, ¿qué puedo hacer?...", "...tira mucho de la correa...", "... si no lo saco me rompe cosas...", y yo desde el desconocimiento no sabía qué responder. Fue por ese sin fin de preguntas que decidí adentrarme en el estudio del comportamiento canino.</div>
                        <div className="texto">Hoy, luego de algunos años, ya no estoy sola. Conformamos un pequeño grupo de trabajo unidos por la misma causa.</div>
                        <div className="texto">Nuestro objetivo es ayudar a alcanzar el equilibrio entre conducta y amor que cada perro necesita, para lograr una convivencia saludable con su familia.</div>
                    </div>

                    <div className="cont_texto">
                        <div className="texto"> ▶ Nuestra metodología de trabajo:</div>
                    </div>
                    
                    <div className="cont_texto">
                        <div className="texto">Educamos a través del método cognitivo-emocional y refuerzos positivos. El mismo se basa en la motivación a través de reforzadores o estímulos (comida, juguetes, recompensas, etc). </div>
                        <div className="texto">El perro percibe el aprendizaje como un juego y es mucho más fácil a la hora de modificar sus problemas o incorporar nuevas conductas, ya que estará predispuesto y entusiasmado.</div>
                        <div className="texto">A la hora de modificar una conducta formamos un equipo: el perro, la familia y nosotros como educadores.</div>
                    </div>
                    
                    <div className="cont_texto">
                        <div className="texto">▶ Nuestra formación y experiencia:</div>
                    </div>
                    
                    <div className="cont_texto">
                        <div className="texto">Somos profesionales matriculados, con certificaciones y especializaciones dentro del país y en el exterior.</div>
                        <div className="texto">Nos entrevistaron del Canal América Paraguay sobre adiestramiento canino y en Unife en el año 2019.</div>
                        <div className="texto">Realizamos el curso de formación “Dog emotion and cognition” de la Duke University en el año 2019.</div>
                        <div className="texto">Participamos en una campaña publicitaria para una reconocida marca de indumentaria holandesa llamada SHOEBY con Pampa (nuestra perra modelo).</div>
                        <div className="texto">Participamos del Congreso Internacional de Olfato en perros de búsqueda y rescate en el año 2019.</div>
                        <div className="texto">Realizamos capacitaciones en Orlando (EEUU) en el año 2017.</div>
                        <div className="texto">Dos integrantes de nuestro equipo son jueces internacionales de la Liga USDDN.</div>
                    </div>
                    
                </div>
                <div className="cont_img_curso col-xl-5 col-md-5 col-sm-12">
                    <img className="foto_curso" src={foto} alt="fotoperrito"></img>
                </div>
            </div>
        
        </section>
                    
    )
}