import React, { useState } from "react";
import Input from "../../../common/Input";
import Button from "../../../common/Button";
import typeSound from '../../../../assets/audio/type.mp3'

function ContactSectionForm() {
  const [areaValue, setAreaValue] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const maxLength = 240;

  const handleChange = (event) => {
    setAreaValue(event.target.value);
    const audio = new Audio(typeSound);
    audio.play();
  };

  const handleValidation = (values) => {
    let errors = {};
    let isValid = true;

    if (!values.username) {
      isValid = false;
      errors.username = "Name is required";
    }

    if (!values.phone) {
      isValid = false;
      errors.phone = "Phone number is required";
    } else if (!/^\+?\d{10,15}$/.test(values.phone)) {
      isValid = false;
      errors.phone = "Phone number is invalid";
    }

    if (!values.useremail) {
      isValid = false;
      errors.useremail = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.useremail)) {
      isValid = false;
      errors.useremail = "Email is invalid";
    }
    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const values = {
      username: event.target.username.value,
      phone: event.target.phone.value,
      useremail: event.target.useremail.value,
    };

    if (handleValidation(values)) {
      setIsSubmitting(true);
      event.target.submit();
    } else {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h3>Fill the form and I will contact you!</h3>
      <form
        className="contact-section__form"
        action="https://formspree.io/f/xbljgegl"
        method="POST"
        onSubmit={handleSubmit}
      >
        <Input
          id="user_name"
          label="Name"
          type="text"
          name="username"
          error={formErrors.username}
        >
          {" "}
          {formErrors.username && (
            <p className="contact-section__error-message">
              {formErrors.username}
            </p>
          )}
        </Input>

        <Input
          id="user_phone"
          label="Phone"
          type="text"
          name="phone"
          error={formErrors.phone}
        >
          {" "}
          {formErrors.phone && (
            <p className="contact-section__error-message">{formErrors.phone}</p>
          )}
        </Input>

        <Input
          id="user_email"
          label="E-mail"
          type="text"
          name="useremail"
          error={formErrors.useremail}
        >
          {" "}
          {formErrors.useremail && (
            <p className="contact-section__error-message">
              {formErrors.useremail}
            </p>
          )}
        </Input>

        <div className="contact-section__textarea-wrapper">
          <textarea
            name="offer"
            className="contact-section__textarea"
            placeholder="Briefly describe your offer"
            rows="6"
            maxLength={maxLength}
            value={areaValue}
            onChange={handleChange}
          />

          <p
            className={`contact-section__textarea__remaining ${
              areaValue.length === maxLength
                ? "contact-section__textarea--is-full"
                : ""
            }`}
          >
            {areaValue.length} / {maxLength}
          </p>
        </div>

        <Button type="submit" text="Send the form!" disabled={isSubmitting} />
      </form>
    </div>
  );
}

export default ContactSectionForm;
