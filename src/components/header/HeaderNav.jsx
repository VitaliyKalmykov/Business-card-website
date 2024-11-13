import React from "react";
import HeaderNavItem from "./HeaderNavItem";
import clickSound from '../../assets/audio/click.mp3'

function HeaderNav({ setActiveSection, toggleSidebar }) {
  const handleItemClick = (section) => {
    setActiveSection(section);
    toggleSidebar();

    const audio = new Audio(clickSound);
    audio.play();
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <HeaderNavItem
          link={"#it's-me!"}
          text={"It's me!"}
          onClick={() => handleItemClick("me")}
        />
        <HeaderNavItem
          link={"#more-about-me"}
          text={"More about me"}
          onClick={() => handleItemClick("moreAboutMe")}
        />
        <HeaderNavItem
          link={"#my-hard-skills"}
          text={"My hard skills"}
          onClick={() => handleItemClick("hardSkills")}
        />
        <HeaderNavItem
          link={"#сontact-me"}
          text={"Contact me"}
          onClick={() => handleItemClick("contactMe")}
        />
      </ul>
    </nav>
  );
}

export default HeaderNav;
