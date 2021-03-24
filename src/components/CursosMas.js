import React from 'react'
import '../css/cursos.css'
import foto from '../imgs/perrito-curso2.jpeg'
import huella from '../icons/huella.png'

export const CursosMas = () => {
    return(
        <div>
            <div className="cont_curso row">
                <div className="cont_info_curso col-xl-7 col-md-7 col-sm-12">
                    <div className="titulo_curso">Masterclass</div>
                    
                    <div className="subtitulo_curso">CURSO GRUPAL DE EDUCACIÓN BÁSICA Y OBEDIENCIA</div>

                    <div className="cont_texto">
                        <div className="texto">El curso grupal de educación básica para principiantes tiene una duración de 3 meses, y se cursa una vez por semana en Capital Federal. </div>
                        <div className="texto">Pueden participar cachorros con el plan vacunatorio completo, o perros adultos. </div>
                        <div className="texto">Trabajamos con adiestramiento positivo y  cognitivo emocional. </div>
                        <div className="texto">Las clases grupales son 100% presenciales. </div>
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
                        <div className="texto">Las masterclass son clases grabadas en las cuales vas a tener todas las herramientas para abordar estos objetivos puntuales.</div>
                        <div className="texto">Una vez que tengas la técnica solo será cuestión de llevarlo a la práctica.</div>
                    </div>

                    <div className="programa">

                        <ul className="ul_programa">
                            <li className="item_programa">Masterclass - Asesoramiento sobre la adquisicón de un cachorro.</li>
                            <li className="item_programa">Masterclass - Micción inapropiada.</li>
                            <li className="item_programa">Masterclass - Cómo crear un buen vínculo entre un perro y un bebé humano.</li>
                            <li className="item_programa">Masterclass - Cómo lograr bañar a mi perro tranquilo.</li>
                            <li className="item_programa">Masterclass - Cómo acostrumbrar a mi perro al auto.</li>
                        </ul>

                    </div>

                    <div className="footer_mc">
                        <div className="texto">Todos los cursos tienen un diseño de excelencia. </div>
                        <div className="texto"> Cada parte de sus planes de estudios están perfectamente pensados para que logres obtener un perrito 100% educado, avanzado, estimulado, divertido, y sociabilizado. </div>
                    </div>
                
                </div>
            </div>
        </div>
    )
}