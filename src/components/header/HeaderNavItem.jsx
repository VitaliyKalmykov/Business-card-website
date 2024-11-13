import React from "react";

function HeaderNavItem({ text, link, onClick }) {
  return (
    <li>
      <a href={link} className="link" onClick={onClick}>
        {text}
      </a>
    </li>
  );
}

export default HeaderNavItem;
