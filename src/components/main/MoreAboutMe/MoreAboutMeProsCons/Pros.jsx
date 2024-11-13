import classNames from "classnames";
import React from "react";

function Pros({ items, cardGroup }) {
  return (
    <div className="more-section__pros">
      <h4>Pros</h4>
      <ul className={classNames({"more-section__pros-list": cardGroup})}>
        {items.map((item, index) => (
          <li key={index} className={classNames({"more-section__pros-item--active" : item.active})}>
            <h5 className="more-section__pros-cons-title">{item.title}</h5>
            <p className="more-section__pros-cons-text">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pros;
