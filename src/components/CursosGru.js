import React from 'react'
import '../css/cursos.css'
import foto from '../imgs/perrito-curso2.jpg'

export const CursosGru = () => {
    return(
        <div>
            <div className="cont_curso row">
                <div className="cont_info_curso col-xl-7 col-md-7 col-sm-12">
                    <div className="titulo_curso">Cursos grupales</div>

                    <div className="subtitulo_curso">CURSO GRUPAL DE EDUCACIÓN BÁSICA Y OBEDIENCIA</div>                    

                    <div className="cont_texto">
                        <div className="texto">El curso grupal de educación básica para principiantes tiene una duración de 3 meses, y se cursa una vez por semana en Capital Federal. </div>
                        <div className="texto">Pueden participar cachorros con el plan vacunatorio completo, o perros adultos.</div>
                        <div className="texto">Trabajamos con adiestramiento positivo y  cognitivo emocional. </div>
                        <div className="texto">Las clases grupales son 100% presenciales.</div>
                    </div>

                    <div className="programa">
                        <div className="titulo_programa">Contenido del programa:</div>

                        <ul className="ul_programa">
                            <li className="item_programa">Sentado</li>
                            <li className="item_programa">Acostado</li>
                            <li className="item_programa">Quieto</li>
                            <li className="item_programa">Acudir al llamado</li>
                            <li className="item_programa">Orden “No”</li>
                            <li className="item_programa">Alto en las esquinas</li>
                            <li className="item_programa">Olfato</li>
                            <li className="item_programa">Técnicas de correa</li>
                            <li className="item_programa">Reforzamos la sociabilizacion aprendiendo en equipo (humanos y perros)</li>
                        </ul>
                    </div>

                    <div className="subtitulo_curso">CURSO GRUPAL PARA EGRESADOS Y PERROS AVANZADOS</div>

                    <div className="cont_texto">
                        <div className="texto">El curso grupal para egresados y perros avanzados está ideado para nuestros egresados, egresados de otras escuelas, y perros que tengan una base educativa avanzada.</div>
                        <div className="texto">Se cursa una vez por semana en Capital Federal.</div>
                        <div className="texto">Pueden unirse a principio de cada mes, y el curso no tiene un final, ya que siempre se pueden aprender nuevas destrezas.</div>
                        <div className="texto">Pueden participar perros de todas las edades. (perros jóvenes, adultos y adultos mayores), si bien los perros mayores no tienen las mismas capacidades físicas que los jóvenes, pueden aprender ejercicios de olfato, ingenio, reforzar su sociabilizacion junto con el equipo, y realizar  ejercicios del tipo cognitivos para así tener una mejor calidad de vida.</div>
                        <div className="texto">Trabajamos con adiestramiento positivo y  cognitivo emocional.</div>
                        <div className="texto">Las clases grupales son 100% presenciales.</div>
                    </div>

                    <div className="programa">
                        <div className="titulo_programa">Contenido del programa:</div>

                        <ul className="ul_programa">
                            <li className="item_programa">Habilidades caninas (puente, ocho, giros, Taparse la carita, caminar hacia atrás, y mucho más)</li>
                            <li className="item_programa">Olfato recreativo</li>
                            <li className="item_programa">Propiocepcion</li>
                            <li className="item_programa">Ingenio y resolución de planteos</li>
                            <li className="item_programa">Obediencia avanzada (junto, traer objetos, parar sobre la marcha, y otros).</li>
                            <li className="item_programa">Reforzamos la sociabilizacion aprendiendo en equipo (humanos y perros).</li>
                        </ul>
                    </div>


                </div>
                    
                <div className="cont_img_curso col-xl-5 col-md-5 col-sm-12">
                    <img className="foto_curso" src={foto} alt="fotoperrito"></img>
                </div>
                
            </div>
        </div>
    )
}