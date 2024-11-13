import React, {useState} from "react";
import sprite from "../../images/symbol-defs.svg";
import clickSound from '../../assets/audio/click.mp3'

function HeaderButtonThemeSVG() {
  const [isActive, setIsActive] = useState(false);

  const toggleButton = () => {
    const audio = new Audio(clickSound);
    audio.play();
    setIsActive(!isActive);
    if (!isActive) {
      document.documentElement.style.setProperty('--color-brand-dark', '#000000');
      document.documentElement.style.setProperty('--color-background-dark', '#ffffff');
      document.documentElement.style.setProperty('--color-secondary-dark', "#808080")
    } else {
      document.documentElement.style.setProperty('--color-brand-dark', '#FFFFFF');
      document.documentElement.style.setProperty('--color-background-dark', '#0e1621');
      document.documentElement.style.setProperty('--color-primary-dark', '#467081');
      document.documentElement.style.setProperty('--color-secondary-dark', '#17212b');
    }
  };

  return (
    <button className="header__svg-button"  onClick={toggleButton}>
      <svg width={"24px"} height={"24px"}>
        {!isActive && <use href={`${sprite}#icon-lamp-dark`} />}
        {isActive && <use href={`${sprite}#icon-lamp-light`}/>}
      </svg>
    </button>
  );
}

export default HeaderButtonThemeSVG;