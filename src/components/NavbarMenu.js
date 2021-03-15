import React, {useEffect} from 'react'
import $ from 'jquery'
import {Link} from 'react-router-dom'

export const NavbarMenu = () => {

    

    return(
        <div className="nav-menu-resp">
            <ul className="nav-ul-resp">
                <li>
                    <Link to="/">
                        TIENDA
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        EDUCACIÓN
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        DEPORTES
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        NUESTRO EQUIPO
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        TESTIMONIOS
                    </Link>
                </li>
                <li>
                    <Link to="/contacto">
                        CONTACTO
                    </Link>
                </li>
            </ul>
        </div>
    )
}
