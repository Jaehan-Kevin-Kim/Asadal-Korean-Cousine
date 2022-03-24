import React from "react";
import {
  Container,
  Logo,
  LogoP,
  HomeBg,
  BgImg,
  HomeContents,
  DeliIcon,
  SBtn,
  SkipTheDish,
  UBtn,
  UberEats,
  FBtn,
  Fantuan,
} from "./styles";
import Bg from "../../assets/background.jpg";
import logo from "../../assets/logo.png";
import Std from "../../assets/SkipTheDish.png";
import Skip from "../../assets/skip.png";
import SkipLogo from "../../assets/skipLogo.png";
import Ue from "../../assets/UberEats.jpg";
import Uber from "../../assets/UberEatsLogo.jpg";
import Fan from "../../assets/Fantuan.jpg";

const Page1 = () => {
  const openSkipTheDish = () => {
    window.open("https://www.skipthedishes.com/asadal-korean-cuisine");
  };
  const openUberEats = () => {
    window.open(
      "https://www.ubereats.com/ca/store/asadal-korean-cuisine/nj4Tq_mIRRi0hIvEKXyOVA?diningMode=DELIVERY/",
    );
  };
  const openFantuan = () => {
    window.open(
      "https://www.ubereats.com/ca/store/asadal-korean-cuisine/nj4Tq_mIRRi0hIvEKXyOVA?diningMode=DELIVERY/",
    );
  };
  return (
    <Container id="home">
      <HomeBg>
        <BgImg src={Bg} alt="background" />
      </HomeBg>
      <HomeContents>
        <Logo src={logo}></Logo>
        <LogoP>Asadal Korean Cuisine</LogoP>

        <DeliIcon>
          <SBtn onClick={openSkipTheDish}>
            <SkipTheDish src={SkipLogo}></SkipTheDish>
          </SBtn>

          <UBtn onClick={openUberEats}>
            <UberEats src={Uber}></UberEats>
          </UBtn>
          <FBtn onClick={openFantuan}>
            <Fantuan src={Fan}></Fantuan>
          </FBtn>
        </DeliIcon>
      </HomeContents>
    </Container>
  );
};

export default Page1;
