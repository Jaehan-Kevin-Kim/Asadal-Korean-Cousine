// import React from "react";
// import Mail from "../../assets/images/mail-2.svg";
// import {
//   ContactContainer,
//   EmailImg,
//   ContactHeading,
//   ContactP,
//   ContactContent,
//   FormWrap,
// } from "./ContactElements";
// import { BasicButton } from "../BasicButton";
// import emailjs from "emailjs-com";
// import Swal from "sweetalert2";

// const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
// const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
// const USER_ID = process.env.REACT_APP_USER_ID;

// const Contact = () => {
//   const handleOnSubmit = (e) => {
//     e.preventDefault();
//     emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
//       (result) => {
//         // console.log(result.text);
//         Swal.fire({
//           icon: "success",
//           title: "Message Sent Successfully",
//         });
//       },
//       (error) => {
//         // console.log(error.text);
//         Swal.fire({
//           icon: "error",
//           title: "Ooops, something went wrong",
//           text: error.text,
//         });
//       },
//     );
//     e.target.reset();
//   };

//   return (
//     <ContactContainer id="contact">
//       <EmailImg src={Mail} />
//       <ContactHeading>CONTACT</ContactHeading>
//       <ContactP>
//         I am currently looking for any new opportunities! <br />
//         If you have any questions, please contact me by email.
//       </ContactP>

//       <ContactContent>
//         <form onSubmit={handleOnSubmit}>
//           <FormWrap>
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter your name..."
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email..."
//               required
//             />
//             <textarea
//               placeholder="Your message..."
//               name="message"
//               rows="8"
//               required
//             />
//             <BasicButton
//               as="button"
//               type="submit"
//               primary="true"
//               round="true"
//               dark="false"
//               fontWeight="true"
//               css={`
//                 height: 48px;

//                 @media screen and (max-width: 768px) {
//                   width: 100%;
//                   min-width: 350px;
//                 }

//                 @media screen and (max-width: 400px) {
//                   width: 100%;
//                   min-width: 250px;
//                 }
//               `}>
//               SEND
//             </BasicButton>
//           </FormWrap>
//         </form>
//       </ContactContent>
//     </ContactContainer>
//   );
// };

// export default Contact;
