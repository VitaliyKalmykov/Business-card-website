import React from "react";
import ContactSectionSocial from "./ContactSectionSocial";

function ContactSectionDirect() {
  return (
    <div className="contact-section__direct-contact">
      <h3>Contact me directly !</h3>
      <ul className="contact-section__direct-list">
       <ContactSectionSocial icon="linkedIn" text="LinkedIn" href="https://www.linkedin.com/in/vitaliy-kalmykov/"/>
       <ContactSectionSocial icon="telegram" text="Telegram" href="https://t.me/Vitalii_Kalmykov_Work"/>
       <ContactSectionSocial icon="github" text="GitHub" href="https://github.com/VitaliyKalmykov"/>
       <ContactSectionSocial icon="phone" text="Phone call" href="tel:+380982074412"/>
      </ul>
    </div>
  );
}

export default ContactSectionDirect;
