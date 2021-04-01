import React from 'react'
import foto from '../imgs/perrito-deporte.jpg'

export const Deportes = () => {
    return(
        <div>
            <div className="cont_curso cont_educar row">
                <div className="cont_info_curso col-xl-7 col-md-7 col-sm-12">
                    <div className="titulo_curso">Habilidades Caninas</div>

                    <div className="cont_texto">
                        <div className="texto">Las habilidades caninas (trucos caninos de carácter avanzado), se pueden realizar haciéndolas una a una, o también componiendo una coreografía de dog dancing.</div>
                        <div className="texto">Dog dancing es una disciplina que consiste en crear rutinas de obediencia avanzada acompañadas de música. Se enseñan ejercicios de habilidad, coordinación, equilibrio, autocontrol, motivación y concentración a tu perro.</div>
                    </div>

                    <div className="programa">
                    <div className="titulo_programa">Algunos de los trucos que aprenderán juntos:</div>

                        <ul className="ul_programa">
                            <li className="item_programa">Chocar los 5</li>
                            <li className="item_programa">Saludar</li>
                            <li className="item_programa">Tocar un objeto</li>
                            <li className="item_programa">Rodar</li>
                            <li className="item_programa">PUM</li>
                            <li className="item_programa">Muertito</li>
                            <li className="item_programa">Reza</li>
                            <li className="item_programa">Repta</li>
                            <li className="item_programa">IN</li>
                            <li className="item_programa">Ocho</li>
                            <li className="item_programa">Legs</li>
                            <li className="item_programa">Saltar a través de un aro (brazos del tutor)</li>
                        </ul>

                        <div className="texto">Y muchos más!</div>
                    </div>

                    <div className="cont_texto">
                        <div className="texto">Este deporte tiene un programa de excelencia. </div>
                        <div className="texto">Cada parte del cronograma esta perfectamente pensado para que logres obtener un perrito 100% estimulado, habilidoso y contento.</div>
                    </div>

                    <div className="cont_texto">
                        <div className="texto">¡SUMATE AL PAMBO TEAM!</div>
                        <div className="texto">Contacto: adiestramientopambo@gmail.com / 1168057707  </div>
                    </div>
                </div>

                <div className="cont_img_curso col-xl-5 col-md-5 col-sm-12">
                    <img className="foto_curso" src={foto} alt="fotoperrito"></img>
                </div>
            </div>
        </div>
    )
}