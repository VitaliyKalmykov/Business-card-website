import React from "react";
import HeaderNav from "./HeaderNav";

function HeaderSidebar ({setActiveSection, isOpen, toggleSidebar}) {
    return (
        <div className={`header__sidebar ${isOpen ? "header__sidebar--open" : ""}`}>
        <HeaderNav toggleSidebar={toggleSidebar} setActiveSection={setActiveSection} />
        </div>
    )
}

export default HeaderSidebar;