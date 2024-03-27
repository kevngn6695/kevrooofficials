import React from "react";

import TextInput from "../components/TextInput";
import Container from "../components/Container";
import TextField from "../components/TextField";
import Button from "../components/Button";
import Wrapper from "../components/Wrapper";

import { generateInputList } from "../utils/init";
import { ContactProps } from "../utils/type";

import "../assets/style/sass/pages/contact.sass";

function Contact(props) {
  const inputLists = [
    generateInputList("fname", "First Name"),
    generateInputList("lname", "Last Name"),
    generateInputList("email", "Email Address"),
    generateInputList("topic", "Topic"),
  ];

  return (
    <Container className={props.className}>
      <Button className="contact-closed-btn" type="button" />
      <Wrapper className="contact-wrapper">
        <TextInput
          classNameForm="contact-input-form"
          classNameInput="contact-input"
          classNameLabel="contact-label-input"
          inputLists={inputLists}
        />
        <TextField
          classNameForm="text-field-form"
          classNameLabel="text-field-label"
          classNameTextArea="text-field-text-area"
          id="question"
          text="Question"
        />
        <Button className="contact-submit-btn" type="submit">
          Submit
        </Button>
      </Wrapper>
    </Container>
  );
}

Contact.propTypes = ContactProps;

export default React.memo(Contact);
