import React from 'react'
import '../css/cursos.css'
import foto from '../imgs/perrito-curso3.jpg'
import huella from '../icons/huella.png'

export const CursosMas = () => {
    return(
        <div>
            <div className="cont_curso row">
                <div className="cont_info_curso col-xl-7 col-md-7 col-sm-12">
                    <div className="titulo_curso">Masterclass</div>

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

                <div className="cont_img_curso col-xl-5 col-md-5 col-sm-12">
                    <img className="foto_curso" src={foto} alt="fotoperrito"></img>
                </div>
            </div>
        </div>
    )
}