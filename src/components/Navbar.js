import React, { useEffect } from 'react'
import '../css/navbar.css'
import {NavbarMenu} from './NavbarMenu'
import {Link} from 'react-router-dom'

import logo from '../imgs/0_Pambo__Logo.png'

export const Navbar = () =>{
    
    function handlerClick(){
        document.querySelector(".hamburguer-menu").classList.toggle("change")
        document.querySelector(".nav-menu-resp").classList.toggle("menu-active")
    }
    
    useEffect(()=>{
        
        const hamburguer = document.querySelector(".hamburguer-menu");    
        
        hamburguer.addEventListener('click', handlerClick)

        return ()=>{
            hamburguer.removeEventListener('click', handlerClick)
        }

    },[])
    

    return(
        <div className="navbar-cont">
            <nav>
                <div className="div-img-nav">
                    <Link to="/">
                        <img src={logo} className="img-nav"></img>
                    </Link>
                </div>
                <ul className="ul-nav  text-center">
                    <Link to="/educar">
                        <li className="li_nav">¿POR QUÉ EDUCAR A TU MASCOTA?</li>
                    </Link>
                    <Link to="/cursos/individuales">
                        <li className="li_nav">CURSOS</li>
                    </Link>
                    <Link to="/deportes">
                        <li className="li_nav">DEPORTES</li>
                    </Link>
                    <Link to="/historia">
                        <li className="li_nav">NUESTRA HISTORIA</li>
                    </Link>
                    <Link to="/testimonios">
                        <li className="li_nav">TESTIMONIOS</li>
                    </Link>
                    <Link to="/contacto">
                        <li className="li_nav">CONTACTO</li>
                    </Link>

                    <Link to="/tienda">
                        <li>
                            <button className="btn btn-tienda">
                                Tienda
                                <i className="fas fa-shopping-cart"></i>
                            </button>
                        </li>
                    </Link>
                </ul>

                <div className="hamburguer-menu">
                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                    <div className="line line-3"></div>
                </div>
            </nav>
            <NavbarMenu  handlerClick={handlerClick}/>
        </div>
    )
}