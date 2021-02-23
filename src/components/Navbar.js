import React, { useEffect } from 'react'
import $ from 'jquery'
import '../css/navbar.css'
import {NavbarMenu} from './NavbarMenu'

import logo from '../imgs/0_Pambo_Logo.png'

export const Navbar = () =>{
    
    function handlerClick(){
        $(".hamburguer-menu").toggleClass("change")
        $(".nav-menu-resp").toggleClass("menu-active")

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
                    <li>EDUCACIÓN</li>
                    <li>DEPORTES</li>
                    <li>NUESTRO EQUIPO</li>
                    <li>TESTIMONIOS</li>
                    <li>CONTACTO</li>
                    <li>
                        <button className="btn btn-tienda">
                            Tienda
                            <i className="fas fa-shopping-cart"></i>
                        </button>
                    </li>
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