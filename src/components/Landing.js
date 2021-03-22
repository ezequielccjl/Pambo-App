import React from 'react'

import img from '../imgs/perrito-escuela.jpeg'

import {Footer} from './Footer'
import {Link} from 'react-router-dom'

import perrito1 from '../imgs/perrito-1.jpg'
import perrito2 from '../imgs/perrito-2.jpg'
import perrito3 from '../imgs/perrito-3.jpg'
import nnumeros from '../imgs/nuestros-numeros.jpeg'

import '../css/header.css'


export const Landing =  ()=> {
    
    return(
        <div className="main_cont">
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
                        <iframe className="video-land" src="https://www.youtube.com/embed/QWmVgwO2O7M?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
                            <button className="btn_leer_mas">Leer más</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section_numeros">
                <div className="titulo_section numeros">Nuestro números hablan</div>
                <div className="row">
                    <div className="col-xl-8 col-md-8 col-sm-12 cont_grid">

                        <div className="cont_numeros">
                            <div className="cont-card-num cont_card_uno">
                                <div className="tarjeta-num">
                                    <img src={perrito3} alt="perrito3" className="img_curso"></img>
                                    <div className="num-card">0</div>
                                    <div className="titulo-card">Amor y diversión</div>
                                </div>
                            </div>
                            <div className="cont-card-num cont_card_dos">
                                <div className="tarjeta-num">
                                    <img src={perrito1} alt="perrito1" className="img_curso"></img>
                                    <div className="num-card">0</div>
                                    <div className="titulo-card">Perros educados</div>
                                </div>
                            </div>
                            <div className="cont-card-num cont_card_tres">
                                <div className="tarjeta-num">
                                    <img src={perrito2} alt="perrito2" className="img_curso"></img>
                                    <div className="num-card">0</div>
                                    <div className="titulo-card">Familias felices</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-xl-4 col-md-4 col-sm-12 cont_img_num">
                        <img src={nnumeros} alt="nnumeros" className="img_num"></img>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

