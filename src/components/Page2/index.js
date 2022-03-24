import { useEffect, useState, useRef } from "react";
import { init } from "@emailjs/browser";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import logo from "../../assets/logo.png";
import {
  Container,
  Form,
  Input,
  Logo,
  Paragraph,
  SectionLeft,
  SectionRight,
  Submit,
} from "./styles";

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_USER_ID;

const Page2 = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const emailForm = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, emailForm.current, USER_ID).then(
      (result) => {
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      },
    );
    e.target.reset();
  };

  return (
    <Container id="contact">
      <SectionLeft>
        <Logo src={logo}></Logo>
        <Paragraph>
          Looking to place a lartge order for your home party?
        </Paragraph>
        <Paragraph>
          Email us to place your order today or ask us for possible options!
        </Paragraph>
      </SectionLeft>

      <SectionRight>
        <Form onSubmit={handleSubmit} ref={emailForm}>
          <Input>
            <label htmlFor="name">Name*</label>
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </Input>
          <Input>
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}></input>
          </Input>
          <Input>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}></input>
          </Input>
          <Input>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              name="subject"
              onChange={(e) => setSubject(e.target.value)}
              value={subject}></input>
          </Input>
          <Input>
            <label htmlFor="message">Additional Details</label>
            <textarea
              rows="10"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}></textarea>
          </Input>
          <Input>
            {/* <Submit type="submit"> Send Email</Submit> */}
            {/* <Submit type="button" value="Send Email" /> */}
            <Submit type="submit">Submit</Submit>
          </Input>
        </Form>
        {/* <Form onSubmit={handleSubmit}>
          <Background src={background} alt="bibimbab" />
          <InputGroup>
            <Input2>
              <label htmlFor="name">Name*</label>
              <Input
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </Input2>
            <Input2>
              <label htmlFor="email">Email*</label>
              <Input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}></Input>
            </Input2>
            <Input2>
              <label htmlFor="phone">Phone Number</label>
              <Input
                type="tel"
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}></Input>
            </Input2>
            <Input2>
              <label htmlFor="message">Message</label>
              <Input
                type="text"
                name="message"
                onChange={(e) => setSubject(e.target.value)}
                value={subject}></Input>
            </Input2>
          </InputGroup>
          <label htmlFor="additional"></label>
          <TextArea
            name="additional"
            placeholder="Type your inquires here..."
            onChange={(e) => setInquiry(e.target.value)}
            value={inquiry}></TextArea>
          <button type="submit">Submit</button>
      
        </Form> */}
      </SectionRight>
    </Container>
  );
};

export default Page2;
