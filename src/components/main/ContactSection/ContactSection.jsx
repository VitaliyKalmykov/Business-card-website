import React from "react";
import Container from "../../common/Container";
import ContactSectionDirect from './ContactDirect/ContactSectionDirect';
import ContactSectionForm from "./ContactDirect/ContactSectionForm";

function ContactSection() {
  return (
    <section className="contact-section">
      <Container>
      <h2 className="title"> You can contact me right now or fill the form! </h2>
       <div className="contact-section__contact-wrap">
       <ContactSectionDirect/>
       <ContactSectionForm />
       </div>
      </Container>
    </section>
  );
}

export default ContactSection;
