import React, { useState } from "react";

function MeSectionAboutCard({ text, className, additionalText }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <article
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2>{text}</h2>
      {isHovered && additionalText}
    </article>
  );
}

export default MeSectionAboutCard;
