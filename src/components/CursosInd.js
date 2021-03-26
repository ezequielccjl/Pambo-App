import React from 'react'
import {Footer} from './Footer'
import '../css/cursos.css'

import foto from '../imgs/perrito-curso1.jpg'

export const CursosInd = ({handlerPintarCurso}) => {
    return(
        <div>
        <div className="cont_curso row">

            <div className="cont_info_curso col-xl-7 col-md-7 col-sm-12">
                <div className="titulo_curso">Cursos individuales</div>

                <div className="subtitulo_curso">CURSO INDIVIDUAL DE EDUCACIÓN PREVENTIVA PARA CACHORROS</div>

                <div className="cont_texto">
                    <div className="texto">
                        El curso de educación preventiva para cachorros es un curso individual de 6 meses de duración con modalidad regular o 3 meses a través de modalidad intensiva. Programado para perros desde los 45 días de vida hasta los 6 meses de edad. 
                    </div>
                    <div className="texto">Trabajamos con adiestramiento positivo y  cognitivo emocional.</div>
                    <div className="texto">Las clases se realizan a través de modalidad online, y de forma presencial. </div>
                    <div className="texto">Si vivís en el interior del país o en el exterior podes cursar el curso 100% online.</div>
                </div>
                
                        
                <div className="programa">
                    <div className="titulo_programa">Contenido del programa:</div>
                    <ul className="ul_programa">
                    
                        <li className="item_programa">Educación general dentro de la casa con la familia y visitas.</li>
                        <li className="item_programa">Prevención de problemas de ansiedad, miedos, fobias, ansiedad por  separación o agresión en el futuro.</li>
                        <li className="item_programa">Obediencia básica general : sentado , acostado, quieto, acudir al llamado, orden NO, alto en las esquinas, ejercicios de calma, olfato, autocontrol, caminar correctamente sin tirar de la correa, y mucho más.</li>
                        <li className="item_programa">Correcto vínculo entre la familia y el perro.</li>
                        <li className="item_programa">Lenguaje canino.</li>
                        <li className="item_programa">Fundamentos del aprendizaje.</li>
                        <li className="item_programa">Comportamiento adecuado en el parque con personas, niños y otros perros.</li>

                    </ul>
                </div>                      


                <div className="subtitulo_curso">CURSO INDIVIDUAL DE EDUCACIÓN BÁSICA GENERAL PARA PERROS ADULTOS SIN PROBLEMAS</div>
                
                <div className="cont_texto">
                    <div className="texto">
                        El curso de educación básica general es un curso individual de 6 meses de duración con modalidad regular o 3 meses a través de modalidad intensiva. Programado para perros desde los 7 meses de edad en adelante.
                    </div>
                    <div className="texto">
                        Trabajamos con adiestramiento positivo y  cognitivo emocional.
                    </div>
                    <div className="texto">
                        Las clases se realizan a través de modalidad online, y de forma presencial.
                        </div>
                    <div className="texto">
                        Si vivís en el interior del país o en el exterior podes cursar el curso 100% online.
                    </div>
                </div>

                <div className="programa">
                    <div className="titulo_programa">Contenido del programa:</div>

                    <ul className="ul_programa">
                        <li className="item_programa">Educación general dentro de la casa con la familia y visitas.</li>
                        <li className="item_programa">Obediencia básica general : sentado , acostado, quieto, acudir al llamado, orden NO, alto en las esquinas, ejercicios de calma, olfato, autocontrol, caminar correctamente sin tirar de la correa, y mucho más.</li>
                        <li className="item_programa">Correcto vínculo entre la familia y el perro.</li>
                        <li className="item_programa">Lenguaje canino.</li>
                        <li className="item_programa">Fundamentos del aprendizaje.</li>
                        <li className="item_programa">Comportamiento adecuado en el parque con personas, niños y otros perros.</li>
                    </ul>

                </div>

                <div className="subtitulo_curso">CURSO INDIVIDUAL DE EDUCACIÓN PARA PERROS ADULTOS CON RESOLUCIÓN DE CONFLICTOS</div>

                <div className="cont_texto">
                    <div className="texto">
                        El curso de educación básica general es un curso individual de 6 meses de duración con modalidad regular o 3 meses a través de modalidad intensiva. Programado para perros desde los 7 meses de edad en adelante.
                    </div>
                    <div className="texto">Trabajamos con adiestramiento positivo y  cognitivo emocional.</div>
                    <div className="texto">Las clases se realizan a través de modalidad online, y de forma presencial.</div>
                    <div className="texto">Si vivís en el interior del país o en el exterior podes cursar el curso 100% online.</div>
                </div>

                <div className="titulo_programa">Contenido del programa:</div>

                <ul className="ul_programa">
                    <li className="item_programa">Educación general dentro de la casa con la familia y visitas.</li>
                    <li className="item_programa">Obediencia básica general : sentado , acostado, quieto, acudir al llamado, orden NO, alto en las esquinas, ejercicios de calma, olfato, autocontrol, caminar correctamente sin tirar de la correa, y mucho más.
                    Correcto vínculo entre la familia y el perro.</li>
                    <li className="item_programa">Lenguaje canino.</li>
                    <li className="item_programa">Fundamentos del aprendizaje.</li>
                    <li className="item_programa">Comportamiento adecuado en el parque con personas, niños y otros perros.</li>
                </ul>
            </div>

            <div className="cont_img_curso col-xl-5 col-md-5 col-sm-12">
                <img className="foto_curso" src={foto} alt="fotoperrito"></img>
            </div>



        </div>
        </div>
    )
}