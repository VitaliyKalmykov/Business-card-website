import React from "react";
import sprite from '../../../../images/symbol-defs.svg';

function ContactSectionSocial ({icon, text, href}) {
 return (
    <li className="contact-section__direct-item">
        <a className="link" href={href} rel="noreferrer" target="_blank">
        <button className="contact-section__contact-button">
        <svg  className="contact-section__contact-svg">
                    <use xlinkHref={`${sprite}#${icon}`}></use>
                </svg>
            </button>
            <p>{text}</p>
        </a>
    </li>
 )
}

export default ContactSectionSocial