import React from "react";
import Container from '../../common/Container'
import MeSectionIntroduce from "./MeSectionIntroduce";
import MeSectionAbout from "./MeSectionAbout/MeSectionAbout";

function MeSection () {
    return (
        <section className="me-section" id="it's-me!">
          <Container>
            <MeSectionIntroduce />
            <MeSectionAbout/>
          </Container>
        </section>
    )
}

export default MeSection;