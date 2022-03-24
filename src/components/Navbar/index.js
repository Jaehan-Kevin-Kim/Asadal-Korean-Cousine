import { React, useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavContainer,
  NavLogo,
  NavHome,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavInstagram,
} from "./styles";
import Instagram from "../../assets/instagram2.png";
import Asadal from "../../assets/Asadal.png";
import menuPdf from "../../assets/menu.pdf";
// 폰트 통일 Roboto Slab
const Navbar = () => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const openInstagram = () => {
    window.open("https://www.instagram.com/asadal_korean_cuisine/");
  };

  const openMenu = () => {
    window.open(menuPdf);
  };

  return (
    <Nav scrollNav={scrollNav}>
      <NavContainer>
        <NavLogo to="home">
          {/* 아사달 <br />
          Asadal Korean Cuisine */}
          <NavHome src={Asadal} />
        </NavLogo>
        <NavMenu>
          <NavItem>
            <NavLinks onClick={openMenu}>Menu</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}>
              Contact
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="location"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}>
              Location
            </NavLinks>
          </NavItem>
          {/* 인스타는 로고 삽입 */}
          {/* 링크 https://www.instagram.com/asadal_korean_cuisine/ */}
          <NavBtn onClick={openInstagram}>
            <NavInstagram src={Instagram}></NavInstagram>
          </NavBtn>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
