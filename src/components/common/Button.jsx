import React from "react";
import clickSound from '../../assets/audio/click.mp3';

function Button({ type, className, text, onClick }) {

   
    const handleClick = (event) => {
        const audio = new Audio(clickSound);  
        audio.play();  

    
        if (onClick) {
            onClick(event);  
        }
    };

    return (
        <button className={`buttons ${className}`} onClick={handleClick} type={type}>
            {text}
        </button>
    );
}

export default Button;