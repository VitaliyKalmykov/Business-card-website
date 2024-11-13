import React, { useState } from "react";
import Pros from "./Pros";
import Cons from "./Cons";
import classNames from "classnames";
import ProsConsButton from "./ProsConsButton";
import clickSound from '../../../../assets/audio/click.mp3'

function MoreAboutMeProsCons({ cardGroup }) {
  const [pros, setPros] = useState([
    {
      title: "1. Punctuality",
      description:
        "I realize how valuable time is and I don't allow myself to waste it, as well as I value other people's time.",
      active: true,
    },
    {
      title: "2. Responsibility",
      description:
        "I like the feeling of accomplishment, but I also know how to admit my failures and not shift responsibility.",
      active: false,
    },
    {
      title: "3. Flexibility in communication",
      description:
        "I easily find a common ground with people by adapting my approach and style of communication.",
      active: false,
    },
    {
      title: "4. Proactivity",
      description:
        "I am interested in moving forward and constantly developing in the field of my future work.",
      active: false,
    },
  ]);

  const [cons, setCons] = useState([
    {
      title: "1. No teamwork experience in IT",
      description:
        "Unfortunately, I have no experience in teamwork, but I believe that my flexibility will help me to adapt quickly.",
      active: true,
    },
    {
      title: "2. A preference for practice.",
      description:
        "It is always easier for me to gain new knowledge through practice than through theory.",
      active: false,
    },
    {
      title: "3. Focus on details",
      description:
        "I can sometimes get too caught up in the details, which affects the overall time of the task.",
      active: false,
    },
    {
      title: "4. Tendency to multitask",
      description:
        "Sometimes I take on several tasks at once, which can reduce efficiency.",
      active: false,
    },
  ]);

  const toggleActive = (items, setItems, direction) => {
    const audio = new Audio(clickSound); 
    audio.play();
    setItems((prevItems) => {
      const activeIndex = prevItems.findIndex((item) => item.active);
      const nextIndex =
        (activeIndex + direction + prevItems.length) % prevItems.length;
      return prevItems.map((item, i) => ({
        ...item,
        active: i === nextIndex,
      }));
    });
  };

  return (
    <>
      <h3>My pros and cons</h3>
      <div
        className={classNames("more-section__pros-cons-container", {
          active: cardGroup,
        })}
      >
        {cardGroup && (
          <>
            {!pros[0].active && (
              <ProsConsButton
                className={
                  "more-section__svg-button more-section__svg-button-pros--left"
                }
                onClick={() => toggleActive(pros, setPros, -1)}
              />
            )}
            {!pros[3].active && (
              <ProsConsButton
                className={
                  "more-section__svg-button more-section__svg-button-pros--right"
                }
                onClick={() => toggleActive(pros, setPros, 1)}
              />
            )}
            {!cons[3].active && (
              <ProsConsButton
                className={
                  "more-section__svg-button more-section__svg-button-cons--left"
                }
                onClick={() => toggleActive(cons, setCons, 1)}
              />
            )}
            {!cons[0].active && (
              <ProsConsButton
                className={
                  "more-section__svg-button more-section__svg-button-cons--right"
                }
                onClick={() => toggleActive(cons, setCons, -1)}
              />
            )}
          </>
        )}
        <Pros items={pros} cardGroup={cardGroup} />
        <Cons items={cons} cardGroup={cardGroup} />
      </div>
    </>
  );
}

export default MoreAboutMeProsCons;
