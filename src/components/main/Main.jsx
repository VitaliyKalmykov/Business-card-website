import React, { useRef } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import MeSection from "./MeSection/MeSection";
import MoreAboutMeSection from "./MoreAboutMe/MoreAboutMeSection";
import HardSkillsSection from "./HardSkillsSection/HardSkillsSection";
import ContactSection from "./ContactSection/ContactSection";

function Main({ activeSection }) {
  const nodeRef = useRef(null); 

  return (
    <main>
      <SwitchTransition>
        <CSSTransition
          key={activeSection}
          nodeRef={nodeRef} 
          classNames="slide"
          timeout={300}
        >
          <div ref={nodeRef}>
            {activeSection === "me" && <MeSection />}
            {activeSection === "moreAboutMe" && <MoreAboutMeSection />}
            {activeSection === "hardSkills" && <HardSkillsSection/>}
            {activeSection === "contactMe" && <ContactSection/>}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </main>
  );
}

export default Main;
