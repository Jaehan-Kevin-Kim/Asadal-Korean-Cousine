import React from "react";
import {
  Container,
  FooterWrap,
  FooterMap,
  MapImg,
  FooterInfo,
  FooterAdd,
  FooterMsg,
  FooterLine,
  FooterLeft,
  FooterRight,
} from "./styles";
import GMap from "../../assets/Map.png";

const Page3 = () => {
  return (
    <Container id="location">
      <FooterWrap>
        <FooterMap>
          <MapImg src={GMap} alt="map"></MapImg>
        </FooterMap>
        <FooterInfo>
          <FooterAdd>735 12 Ave SW Calgary AB T2R 1J7</FooterAdd>
          <FooterLine>
            <FooterLeft>
              <FooterMsg>asadalcalgary@gmail.com</FooterMsg>

              <FooterMsg>587-351-9898</FooterMsg>
            </FooterLeft>
            <FooterRight>
              <FooterMsg>
                Open 11am - 9pm
                <br />
                Closed every Wednesday
              </FooterMsg>
            </FooterRight>
          </FooterLine>
        </FooterInfo>
        {/* <p>
          735 12 Ave SW Calgary AB T2R 1J7 asadalcalgary@gmail.com 587-351-9898
          Open 11am - 9pm Closed every Wednesday
        </p> */}
      </FooterWrap>
    </Container>
  );
};

export default Page3;
