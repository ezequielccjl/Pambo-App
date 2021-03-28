import React from 'react'

import img from '../imgs/perrito-escuela.jpeg'

import {ModalLand} from './ModalLand'
import {CardsCont} from './CardsCont'
import {Link} from 'react-router-dom'

import perrito1 from '../imgs/perrito-1.jpg'
import perrito2 from '../imgs/perrito-2.jpg'
import perrito3 from '../imgs/perrito-3.jpg'

import '../css/landing.css'


export const Landing =  ()=> {
    
    return(
        <div className="main_cont">
            
            <ModalLand />

            <div className="cont-video">
                <iframe className="video-land" src="https://www.youtube.com/embed/tdGqTaHSF4o?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>

            <div className="escuela_lider row">
                <div className="col-xl-6 col-md-6 col-sm-12 cont_text_escuela">
                    <div>
                        ESCUELA LIDER EN EDUCACIÓN Y REACREACIÓN EN ARGENTINA
                    </div>
                </div>
                <div className="col-xl-6 col-md-6 col-sm-12 cont_img_escuela">
                    <img className="perrito_escuela" src={img} alt="perrito_escuela"></img>
                </div>
            </div>

            <section className="section_edu">
                <div className="titulo_section">Educación</div>
                <div className="row row_cursos">
                    <div className="col-xl-4 col-md-6 col-sm-12 cont_card">
                        <div className="card_cursos">
                            <div className="div_img">
                                <img src={perrito3} className="img_curso"></img>
                            </div>
                            <div className="nombre_curso">Cursos individuales</div>
                            <Link to="/cursos/individuales">
                                <button className="btn_leer_mas">Leer más</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12 cont_card">
                        <div className="card_cursos">
                            <div className="div_img">
                                <img src={perrito1} className="img_curso"></img>
                            </div>
                            <div className="nombre_curso">Cursos grupales</div>
                            <Link to="/cursos/grupales">
                                <button className="btn_leer_mas">Leer más</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12 cont_card">
                        <div className="card_cursos">
                            <div className="div_img">
                                <img src={perrito2} className="img_curso"></img>
                            </div>
                            <div className="nombre_curso">Masterclass</div>
                            <Link to="/cursos/masterclass">
                                <button className="btn_leer_mas">Leer más</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section_deportes">
                <div className="titulo_section">Deportes</div>
                <div className="row">
                    <div className="col-xl-6 col-md-12 col-sm-12">
                        <iframe className="video-land video_habilidades" src="https://www.youtube.com/embed/QWmVgwO2O7M?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="col-xl-6 col-md-12 col-sm-12 cont_habilidades">
                        <div className="titulo_habilidades">Habilidades</div>
                        <div className="cont_texto_hab">
                            <div>
                                Las habilidades caninas (trucos caninos de carácter avanzado), se pueden realizar haciéndolas una a una, o también componiendo una coreografía de “dog dancing”.
                            </div>
                            <div>
                                Dog dancing es una disciplina que consiste en crear rutinas de obediencia avanzada acompañadas de música. Se enseñan ejercicios de habilidad, coordinación, equilibrio, autocontrol, motivación y concentración a tu perro.
                            </div>
                        </div>
                        
                        <div className="cont_btn_hab">
                            <Link to="/deportes">
                                <button className="btn_leer_mas">Leer más</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section_numeros">
                <div className="titulo_section numeros">Nuestro números hablan</div>
                <CardsCont />
            </section>
        </div>
    )
}

