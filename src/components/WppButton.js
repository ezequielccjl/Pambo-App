import React from 'react'
import '../css/wppButton.css'

export const WppButton = () => {
    return (
        <a href="https://api.whatsapp.com/send?phone=541168057707&text=" target="_blank">
            <div className="wpp-btn">
                <i className="fab fa-whatsapp fa-3x"></i>
            </div>
        </a>
    )
}