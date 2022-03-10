import styled from "@emotion/styled";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: #c40007;
  height: 120px;
  margin-top: -150px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.8s all ease;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled.div`
  // color: #000;
  justify-self: flex-start;
  cursor: pointer;
  // font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  // font-weight: bold;
  // text-decoration: none;
`;

export const NavHome = styled.img`
  height: 70px;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
`;

export const NavItem = styled.li`
  height: 80px;
  /* align-items: center; */
  /* cursor: pointer; */
`;

export const NavLinks = styled(LinkS)`
  padding: 0 1.5rem;
  height: 100%;
  color: #000;
  font-weight: 600;
  font-size: 20px;

  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s all ease;

  &:hover {
    // border-bottom: 3px solid #000;
    color: #fff;
    opacity: 90%;
  }
  &.active {
    // border-bottom: 3px solid #000;
    color: #fff;
    opacity: 90%;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  /* 
  @media screen and (max-width: 768px) {
    display: none;
  } */
`;

export const NavInstagram = styled.img`
  cursor: pointer;
  height: 50px;
  &:hover {
    background-color: #fff;
    border-radius: 20px;
    opacity: 90%;
  }
`;
