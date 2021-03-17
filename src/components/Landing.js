import React from 'react'

import img from '../imgs/perrito-escuela.jpeg'

import {Footer} from './Footer'

//import habilidades from '../videos/habilidades.mp4'
//import landing from '../videos/institucional.mp4'
import perrito1 from '../imgs/perrito-1.jpg'
import perrito2 from '../imgs/perrito-2.jpg'
import perrito3 from '../imgs/perrito-3.jpg'

import '../css/header.css'


//<video src={landing} loop muted preload="auto" className="video-land"></video>

export const Landing =  ()=> {
    
    return(
        <div className="main_cont">
            <div className="cont-video">
            {/* <video src={landing} loop muted preload="auto" autoPlay className="video-land"></video> */}
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
                                <img src={perrito1} className="img_curso"></img>
                            </div>
                            <div className="nombre_curso">Cursos individuales</div>
                            <button className="btn_leer_mas">Leer más</button>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12 cont_card">
                        <div className="card_cursos">
                            <div className="div_img">
                                <img src={perrito2} className="img_curso"></img>
                            </div>
                            <div className="nombre_curso">Cursos individuales</div>
                            <button className="btn_leer_mas">Leer más</button>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12 cont_card">
                        <div className="card_cursos">
                            <div className="div_img">
                                <img src={perrito3} className="img_curso"></img>
                            </div>
                            <div className="nombre_curso">Cursos individuales</div>
                            <button className="btn_leer_mas">Leer más</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section_deportes">
                <div className="titulo_section">Deportes</div>
                <div className="row">
                    <div className="col-xl-6 col-md-12 col-sm-12">
                        {/* <video src={habilidades} loop muted preload="auto" autoPlay className="video-land"></video> */}
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
            <section>
                <div className="titulo_section">Nuestro números hablan</div>
                <div className="row">
                    <div className="col-8">
                    </div>
                    <div className="col-4"></div>
                </div>
            </section>
            <Footer />
        </div>
    )
}