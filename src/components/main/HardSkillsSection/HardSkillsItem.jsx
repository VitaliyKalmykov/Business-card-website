import React from "react";

function HardSkillsItem({ title, workWith, familiarWith, image, secondImage }) {
  return (
    <div className="hard-skills-section__current-item">
      <img
        src={image}
        alt="technology"
        className="hard-skills-section__image"
      />
      {secondImage && (
        <img
          src={secondImage}
          alt="additional technology"
          className="hard-skills-section__second-image"
        />
      )}
      <div className="hard-skills-section__details">
        <h3>{title}</h3>
        <p>What can I work with:</p>
        <ul>
          {workWith.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        {familiarWith && (
          <>
            <p>What I'm familiar with:</p>
            <ul>
              {familiarWith.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default HardSkillsItem;
