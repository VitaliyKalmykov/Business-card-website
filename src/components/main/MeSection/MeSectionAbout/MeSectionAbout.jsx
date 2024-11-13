import React from "react";
import MeSectionAboutCard from "./MeSectionAboutCard";

//hobbies gif
import FireGif from "../../../../assets/hobbies/fire.gif";
import MarioGif from "../../../../assets/hobbies/mario-gif.webp";
import DebatGif from "../../../../assets/hobbies/bunny-gif.webp";

//work gif
import CashierGif from "../../../../assets/work/cashier.webp";
import SalesGif from "../../../../assets/work/sales.webp";
import BuilderGif from "../../../../assets/work/builder.webp";

//plans gif
import SeniorGif from "../../../../assets/plans/Senior.webp";
import PetProjectGif from "../../../../assets/plans/PetProject.webp";
import EnglishLearnGif from "../../../../assets/plans/English.webp";

function MeSectionAbout() {
  return (
    <div className="me-section__about-container">
      <MeSectionAboutCard
        className={"me-section__about-hobby"}
        text={"My hobbies"}
        additionalText={
          <div className="me-section__info-wrapper">
            {" "}
            <div className="me-section__info-container">
              {" "}
              <img
                src={FireGif}
                className="me-section__gif"
                alt="FireGif"
              />{" "}
              <p>
                Fire show ! A good hobby with physical activity, which is very
                beneficial for health in non-physically active work.
              </p>
            </div>
            <div className="me-section__info-container">
              <img src={MarioGif} className="me-section__gif" alt="mario-gif" />
              <p>
                Video games are the hobby I choose when I have 1-2 hours in the
                evening, I like relaxing games with a cozy atmosphere.
              </p>
            </div>
            <div className="me-section__info-container">
              <img
                src={DebatGif}
                className="me-section__gif"
                alt="debate-gif"
              />{" "}
              <p>
                Debate, I like to improve my soft skills by playing debate game
                with my friends.
              </p>
            </div>
          </div>
        }
      />
      <MeSectionAboutCard
        className={"me-section__about-work"}
        text={"My work experience"}
        additionalText={
          <div className="me-section__info-wrapper">
            <div className="me-section__info-container">
              <img src={CashierGif} className="me-section__gif" alt="cashier" />{" "}
              <p>
                Service sector. I enjoyed working with people and solving cases
                of even the most demanding clients.{" "}
              </p>
            </div>
            <div className="me-section__info-container">
              {" "}
              <img src={SalesGif} className="me-section__gif" alt="Saler" />
              <p>
                Sales Manager. Do you need to make a call? I will do it with
                great pleasure.{" "}
              </p>
            </div>
            <div className="me-section__info-container">
              {" "}
              <img src={BuilderGif} className="me-section__gif" alt="Builder" />
              <p>
                This is me building div's blocks for this site. Just joking, but
                I've also had experience working on a construction site.{" "}
              </p>
            </div>
          </div>
        }
      />
      <MeSectionAboutCard
        className={"me-section__about-plans"}
        text={"My future plans"}
        additionalText={
          <div className="me-section__info-wrapper">
            <div className="me-section__info-container">
              <img src={SeniorGif} className="me-section__gif" alt="Senior" />
              <p>
                Become a senior front-end developer in the future company where
                I will start working as a trainee.{" "}
              </p>
            </div>
            <div className="me-section__info-container">
              {" "}
              <img
                src={PetProjectGif}
                className="me-section__gif"
                alt="Mark Zcukenberg"
              />
              <p>
                Make a successful pet project that will grow into a commercial
                product.
              </p>
            </div>
            <div className="me-section__info-container">
              <img
                src={EnglishLearnGif}
                className="me-section__gif"
                alt="English-learn"
              />
              <p>
                To learn English at a very high level, I understand how
                necessary it is.{" "}
              </p>
            </div>
          </div>
        }
      />
    </div>
  );
}

export default MeSectionAbout;
