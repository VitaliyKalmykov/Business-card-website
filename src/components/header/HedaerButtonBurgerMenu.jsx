import React, { useState, useEffect } from "react";

function HeaderButtonBurgerMenu({ toggleSidebar, isSidebar }) {
  const [burgerMenu, setBurgerMenu] = useState(false);

  
  useEffect(() => {
    setBurgerMenu(isSidebar);
  }, [isSidebar]);

  useEffect(() => {
    if (burgerMenu) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [burgerMenu]);

  function onClick() {
    toggleSidebar();
  }

  return (
    <button
      onClick={onClick}
      className={`header__burger-menu ${burgerMenu ? "header__burger-menu--cross" : ""}`}
    >
      <div></div>
      <div></div>
      <div></div>
    </button>
  );
}

export default HeaderButtonBurgerMenu;