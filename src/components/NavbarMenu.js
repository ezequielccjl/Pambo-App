import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'

export const NavbarMenu = ({handlerClick}) => {

    

    return(
        <div className="nav-menu-resp">
            <ul className="nav-ul-resp">
                <li>
                    <Link to="/tienda">    
                        <div onClick={handlerClick}>TIENDA</div>
                    </Link>
                </li>
                <li>
                    <Link to="/educar">
                        <div onClick={handlerClick}>¿POR QUÉ EDUCAR A TU MASCOTA?</div>
                    </Link>
                </li>
                <li>
                    <Link to="/cursos/individuales">
                        <div onClick={handlerClick}>CURSOS</div>
                    </Link>
                </li>
                <li>
                    <Link to="/deportes">
                        <div onClick={handlerClick}>DEPORTES</div>
                    </Link>
                </li>
                <li>
                    <Link to="/historia">
                        <div onClick={handlerClick}>NUESTRA HISTORIA</div>
                    </Link>
                </li>
                <li>
                    <Link to="/testimonios">
                        <div onClick={handlerClick}>TESTIMONIOS</div>
                    </Link>
                </li>
                <li>
                    <Link to="/contacto">
                        <div onClick={handlerClick}>CONTACTO</div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
