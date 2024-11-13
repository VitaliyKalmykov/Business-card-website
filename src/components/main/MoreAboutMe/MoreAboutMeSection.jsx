import React, { useState, useEffect } from "react";
import Container from "../../common/Container";
import MoreAboutMeProsCons from "./MoreAboutMeProsCons/MoreAboutMeProsCons";
import Button from "../../common/Button";
import MoreAboutMeFAQ from "./MoreAboutMeFAQ/MoreAboutMeFAQ";

function MoreAboutMeSection() {
  const [cardGroup, setCardGroup] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 1168) {
        setCardGroup(true);  
      }
    };

   
    checkScreenSize();

    
    window.addEventListener("resize", checkScreenSize);

    
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const handleClick = () => {
    setCardGroup(!cardGroup);
  };


  return (
    <section className="more-section" id="more-about-me">
      <Container>
        <div className="more-section__container">
          <h2 className="title">Here you can find out more about my personality! </h2>
          <MoreAboutMeProsCons cardGroup={cardGroup} />
          <Button
          className={"more-section__button"}
            onClick={handleClick}
            type={"button"}
            text={
              cardGroup
                ? "Hide F.A.Q and ungroup card's"
                : "Group cards and read F.A.Q"
            }
          />
          <MoreAboutMeFAQ showCardGroup={cardGroup} />
        </div>
      </Container>
    </section>
  );
}

export default MoreAboutMeSection;