import React from "react";
import sprite from "../../../../images/symbol-defs.svg";

function ProsConsButton ({className, onClick}) {
    return (
        <button className={className} onClick={onClick}>
          <svg width={"30px"} height={"30px"}>
            <use xlinkHref={`${sprite}#icon-arrow-right2`}></use>
          </svg>
        </button>
    )
}

export default ProsConsButton