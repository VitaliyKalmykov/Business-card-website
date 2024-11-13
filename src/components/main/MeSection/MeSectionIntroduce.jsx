import React from "react";
import frontDevImage from '../../../images/front-dev.jpg'

function MeSectionIntroduce () {
    return (
        <div className="me-section__introduce-container">
            <h2 className="me-section__title title">Nice to meet you!</h2>
            <img src={frontDevImage} alt="Front dev" className="me-section__image"/>
            <h2>My name is Vitalii and you're at my first website!</h2>
        </div>
    )
}

export default MeSectionIntroduce;