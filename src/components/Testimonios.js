import React from 'react'
import '../css/testimonios.css'
import sandia from '../img-prods/sandia.jpeg' 
import frenchi from '../img-prods/frenchi.jpeg' 
import rayo from '../img-prods/rayo.jpeg' 
import hawaii from '../img-prods/hawaii.jpeg' 

export const Testimonios = () => {
    return(
        <section className="section_testimonios">
            
            <iframe className="iframe_testimonios" src="https://www.youtube.com/embed/JVQmly3gMzM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>        

            


            <div className="cont_carousel">
                <div className="titulo_testi">Clientes Felices</div>

                <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">

                        <div className="carousel-item active" data-bs-interval="10000">

                            <div className="cont_testimonio">
                                <div className="cont_mensajes">
                                    <div className="un_testi">
                                        <div className="cont_texto_testi">
                                            <div>Pambo es una excelente escuela, le ponen muchísima dedicación y amor para educar, los recomiendo con los ojos cerrados.</div>
                                            <div>Mi perrita tenía problemas de socialización con personas y perros, y territorialidad con la comida y recursos, me contacté con la escuela porque ya no sabía que hacer y trabajamos excelente juntos hasta resolverlo❤️</div>
                                        </div>
                                        <div className="usuario_testi">
                                            <div className="nombre_user">Belén Diáz Caldas</div>
                                        </div>
                                    </div>
                                    <div className="un_testi">
                                        <div className="cont_texto_testi">
                                            
                                        </div>
                                        <div className="usuario_testi">
                                            <div className="nombre_user">Valeria Bronstein</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="carousel-item" data-bs-interval="10000">

                            <div className="cont_testimonio">
                                <div className="cont_mensajes">
                                    <div className="un_testi">
                                        <div className="cont_texto_testi">
                                            <div>Excelente escuela canina, Yanina la instructora de Brea es totalmente competente, apasionada y muy amable tanto con nuestra cachorra como con nosotros. En pocas clases resolvimos los problemas de conducta indeseables y estamos avanzando en distintas destrezas. Gracias!!!</div>
                                        </div>
                                        <div className="usuario_testi">
                                            <div className="nombre_user">Claudio Abal</div>
                                        </div>
                                    </div>
                                    <div className="un_testi">
                                        <div className="cont_texto_testi">
                                            <div>Yani siempre simpática, dulce y amable con mis perrigihas desde el primer momento. Siempre respondiendo dudas e inquietudes sin ningun problema, aún ya terminadas las clases. Ahora podemos salir a pasear en familia sin que vuele por los aires!!!</div>
                                        </div>
                                        <div className="usuario_testi">
                                            <div className="nombre_user">Laura Bustos</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        </section>
    )
}