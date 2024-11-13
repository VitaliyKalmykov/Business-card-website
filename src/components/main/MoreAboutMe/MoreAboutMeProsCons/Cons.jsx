import classNames from "classnames";
import React from "react";

function Cons({ items, cardGroup }) {
  return (
    <div className="more-section__cons">
      <h4>Cons</h4>
      <ul className={classNames({ "more-section__cons-list": cardGroup })}>
        {items.map((item, index) => (
          <li key={index} className={classNames({"more-section__cons-item--active" : item.active})}>
            <h5 className="more-section__pros-cons-title">{item.title}</h5>
            <p className="more-section__pros-cons-text">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cons;
