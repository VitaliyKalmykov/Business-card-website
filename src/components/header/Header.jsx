import React, { useState } from "react";
import HeaderButtonBurgerMenu from "./HedaerButtonBurgerMenu";
import Container from "../common/Container";
import HeaderNav from "./HeaderNav";
import HeaderButtonThemeSVG from "./HeaderButtonThemeSVG";
import HeaderSidebar from "./HeaderSidebar";

function Header({ setActiveSection }) {
  const [isSidebar, setIsSidebar] = useState(false);

  const toggleSidebar = () => {
    setIsSidebar(!isSidebar);
  };

  return (
   
   <header className="header">
      
      <Container>
       
        <div className="header__container">
          
          <HeaderButtonBurgerMenu
            toggleSidebar={() => setIsSidebar(!isSidebar)}
            isSidebar={isSidebar}
          />

          <HeaderNav  toggleSidebar={toggleSidebar} setActiveSection={setActiveSection} />

          <HeaderSidebar
            isOpen={isSidebar}
            setActiveSection={setActiveSection}
            toggleSidebar={toggleSidebar}
          />

         
          <HeaderButtonThemeSVG />
       
        </div>
      
      </Container>
    </header>
  );
}

export default Header;
