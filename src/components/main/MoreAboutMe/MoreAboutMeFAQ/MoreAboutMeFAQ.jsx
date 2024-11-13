import React, { useState } from "react";
import FaqItem from "./FAQItem";
import clickSound from '../../../../assets/audio/click.mp3'

function MoreAboutMeFAQ({ showCardGroup }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "Why should our company choose you?",
      answer:
        "I believe that I can bring value to the business with my knowledge and also progress in my skills in the front-end industry. I have a main goal to become a specialist and I'm going for it.",
    },
    {
      question: "Can you call yourself a conflicted person?",
      answer:
        "Absolutely not. I am tolerant both in life and in work. I believe that if a person's opinion is different from mine or mine from his/her, it's okay, the main thing is to achieve the task.",
    },
    {
      question: "What can we expect from you if we choose you?",
      answer:
        "Rapid personal development of both hard and soft skills. Conscientious work and responsibility.",
    },
    {
      question: "How do you see your career in 2-3 years?",
      answer:
        "At least a mid-level front-end engineer with extensive experience in hard cases and communication with clients.",
    },
    {
      question: "What is the most important thing for you in your work?",
      answer:
        "Atmosphere. It is very difficult to work in a toxic atmosphere or in an atmosphere of negativity. I believe that the productivity of an employee partly depends on the atmosphere itself.",
    },
    {
      question: "Are you team-oriented or do you prefer to work alone?",
      answer:
        "Both. These are two different ways of working and it is difficult to compare them and divide them into better/worse. I understand the aspects of working in a team and the aspects of working alone.",
    },
    {
      question: "Are you currently available for offers?",
      answer:
        "Yes. I will look at any offer and any proposal.",
    },
    {
      question: "What else is important to you in your work?",
      answer:
        "Belief in the product/project you are doing. In fact, this applies not only to the IT sector. If a person believes in what he or she is doing, then success awaits.",
    },
    {
      question: "Why did you decide to go into the IT field?",
      answer:
        "Because this is a promising profession that will be relevant for a very long time. But I also like computer technology, algorithmic tasks and the pleasant feeling after solving them.",
    },
    {
      question: "Web development is about writing code?",
      answer:
        "No. It's important to know the syntax, the logic you're doing, and other nuances, but the most important thing, in my opinion, is to understand how and when to apply it and do it correctly.",
    },
  ];

  const handleToggle = (index) => {
    const audio = new Audio(clickSound);
    audio.play();
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="more-section__faq-container">
      {showCardGroup && (
        <>
          <h2>F.A.Q</h2>
          <ul className="more-section__faq-list">
            {faqData.map((item, index) => (
              <FaqItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={activeIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default MoreAboutMeFAQ;
