import React, { useEffect } from 'react'
import '../css/navbar.css'
import {NavbarMenu} from './NavbarMenu'
import {Link} from 'react-router-dom'

import logo from '../imgs/0_Pambo_Logo.png'

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
                    <img src={logo} className="img-nav"></img>
                </div>
                <ul className="ul-nav  text-center">
                    <Link to="/">
                        <li>EDUCACIÓN</li>
                    </Link>
                    <Link to="/">
                        <li>DEPORTES</li>
                    </Link>
                    <Link to="/">
                        <li>NUESTRO EQUIPO</li>
                    </Link>
                    <Link to="/">
                        <li>TESTIMONIOS</li>
                    </Link>
                    <Link to="/contacto">
                        <li>CONTACTO</li>
                    </Link>

                    <Link to="/">
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
            <NavbarMenu/>
        </div>
    )
}