import React from "react";
import Container from "../../common/Container";
import HardSkillsItem from "./HardSkillsItem";

import html5 from "../../../images/html5.png";

import css3 from "../../../images/css3.png";
import scss from "../../../images/SCSS.png";

import JS from "../../../images/javascript.png";
import RT from "../../../images/react.png";

function HardSkillsSection() {
  const skills = [
    {
      title: "HTML5",
      image: html5,
      workWith: [
        "1. Semantic layout, semantic tags. Meta tags, attributes, etc.",
        "2. Video/audio/pictures/SVG.",
        "3. Texts, headings. I know their nuances in the code and can add them correctly.",
        "4. Lists, numbered and unnumbered, list of definitions.",
        "5. div/span, I know their difference and in which situation they should be used.",
        "6. I always work according to w3c standards and follow general development rules.",
        "7. Forms/inputs/labels/text spaces. I have an understanding of their correct use.",
        "8. Tables, familiar with the nuances of working with them and with table layout that is currently outdated. ",
        "9. iframe's.",
        "10. Links, anchors.",
      ],
    },
    {
      title: "CSS/SCSS",
      image: css3,
      secondImage: scss,
      workWith: [
        "1. Box model, block and inline elements.",
        "2. Fonts, text, text rendering.",
        "3. Figma, layout based on the model.",
        "4. SCSS, tree syntax, modular approach, BEM methodology.",
        "5. Animations, transitions, @keyframe directive.",
        "6. Responsive layout, work with screen size standards.",
        "7. Flexbox layout.",
        "8. Selectors, weight of selectors.",
        "9. Pseudo classes and pseudo elements.",
        "10. Positioning (relative, absolute, fixed, sticky)."
      ],
      familiarWith: [
        "Grid layout.",
        "Retinization.",
        "Relative measurement units.",
      ],
    },
    {
      title: "JS/REACT",
      image: JS,
      secondImage: RT,
      workWith: [
        "1. var/let/const, I understand their difference and know when to use them.",
        "2. Arrays, methods of working with arrays. Objects and methods of working with them.",
        "3. Functions, three types of their declaration. Closures.",
        "4. Promises and async/await.",
        "5. Operators (arithmetic, comparison, logical).",
        "6. if/else switch/case.",
        "7. Loops (for, while, do while, recursive functions).",
        "8. JSX syntax and its nuances.",
        "9. The modular approach of react.",
        "10. React hooks, props.",
      ],
      familiarWith: [
        "Working with API and Fetch.",
        "OOP.",
        "Error's handling",
      ],
    },
  ];

  return (
    <section className="hard-skills-section">
      <Container>
        <h2 style={{ textAlign: "center" }}>My current knowledge</h2>
        <div className="hard-skills-section__current-technologies">
          {skills.map((skill, index) => (
            <HardSkillsItem
              key={index}
              title={skill.title}
              workWith={skill.workWith}
              familiarWith={skill.familiarWith}
              image={skill.image}
              secondImage={skill.secondImage}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default HardSkillsSection;
