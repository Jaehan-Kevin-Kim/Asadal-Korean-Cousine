import styled from "@emotion/styled";

export const Container = styled.div`
  /* width: 100vw; */
  max-width: 1100px;

  height: 100vh;
  display: flex;
  padding: 20px 0;
  margin: 0 auto;
`;

export const SectionLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  padding: 20px;
`;

export const Logo = styled.img`
  width: 400px;
`;

export const Paragraph = styled.p`
  font-size: 2rem;
`;

export const SectionRight = styled.div`
  width: 50%;
  padding: 20px;
  margin: auto auto;
  height: fit-content;
  background: #f7f8fc;
  /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  /* display: flex;
    justify-content: center; */
`;

export const Form = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 15px;
`;

export const Input = styled.div`
  label {
    display: block;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 10px;
  }

  input {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1em;
    font-size: 1.2rem;
    padding: 10px;
    border: 1px solid #ccc;
  }

  textarea {
    width: 100%;
    border: 1px solid #ccc;
  }
`;

// export const Submit = styled.input`
//   margin-top: 1em;
//   background: rgb(255, 203, 6);
//   text-align: center !important;
//   cursor: pointer;
//   &:hover {
//     opacity: 0.8;
//   }
// `;
export const Submit = styled.button`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  width: 100%;
  margin-bottom: 1em;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 10px;
  border: 1px solid #ccc;
  margin-top: 1em;
  background: rgb(255, 203, 6);
  text-align: center !important;

  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

// export const Form = styled.form`
//   position: relative;
//   /* width: 50%; */
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   padding: 20px;
// `;

// export const Background = styled.img`
//   position: absolute;
//   z-index: -5;
//   width: 100%;
//   height: 70%;
//   opacity: 0.7;
// `;

// export const InputGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   /* flex-wrap: wrap; */
//   /* justify-content: space-evenly; */
//   /* align-items: space-evenly; */
//   margin-bottom: 1em;
//   padding: 10px;
// `;
// export const Input2 = styled.div`
//   label {
//     display: block;
//   }
// `;
// export const Input = styled.input`
//   ::placeholder {
//     color: black;
//     font-size: 1.2rem;
//   }
//   /* width: 80%; */
//   width: 80%;
//   margin-bottom: 1em;
//   font-size: 1.2rem;
//   padding: 10px 0;
//   /* border-radius: 25px; */
//   border: 1px solid #ccc;
// `;

// export const TextAreaWrap = styled.div`
//   /* width: 90%;
//   height: 50%;
//   background: rgba(204, 204, 204, 0.5); */
//   /* opacity: 0.4; */
// `;
// export const TextArea = styled.textarea`
//   /* width: 90%;
//   height: 50%; */
//   /* background: transparent; */
//   /* width: 100%;
//   height: 100%; */
//   ::placeholder {
//     color: black;
//   }
//   padding: 10px;
//   width: 80%;
//   /* height: 45%; */
//   background: rgba(204, 204, 204, 0.5);
//   /* background: transparent; */

//   /* opacity: 0.4; */
//   color: black;
//   font-size: 1.5rem;
// `;
