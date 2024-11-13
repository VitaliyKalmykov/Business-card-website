import classNames from "classnames";
import React from "react";
import sprite from '../../../../images/symbol-defs.svg';

function FaqItem({ question, answer, isOpen, onClick }) {

  return (
    <li
      className={classNames("more-section__faq-item", {
        "more-section__faq-item--active": isOpen,
      })}
    >
      <div className="more-section__faq-header" onClick={onClick}>
        <h3>{question}</h3>
        <button className="more-section__faq-button">
          <svg width="15px" height="15px">
            <use xlinkHref={`${sprite}#icon-arrow-right`}></use>
          </svg>
        </button>
      </div>
      {isOpen && <p className="more-section__faq-answer">{answer}</p>}
    </li>
  );
}

export default FaqItem;