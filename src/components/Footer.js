import React from "react";
import styled from "styled-components";
import logo from "../assets/shared/desktop/logo.svg";
import { MdFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Container = styled.div`
  margin: auto;
  margin-top: 200px;
  background: black;
  max-width: 100vw;
  padding: 75px 165px;
  position: relative;
`;

const FooterNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const MenuItems = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
`;
const NavItem = styled.li`
  margin-right: 34px;
  &:last-of-type {
    margin-right: 0;
  }
`;
const SocialItem = styled.li`
  margin-right: 16px;
  &:last-of-type {
    margin-right: 0;
  }
`;
const NavLinkItem = styled.a`
  text-decoration: none;
  color: white;
  cursor: pointer;
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 25px;
  letter-spacing: 2px;
  &:hover {
    color: #d87d4a;
  }
`;
const Logo = styled.img``;
const Info = styled.div`
  width: 540px;
`;
const DecoLine = styled.div`
  height: 4px;
  width: 101px;
  background: #d87d4a;
  position: absolute;
  top: 0;
`;
const ColumnInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const SocialIcons = styled.div``;
const Desc = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  /* or 167% */

  color: #ffffff;
  margin-bottom: 56px;
  mix-blend-mode: normal;
  opacity: 0.5;
`;
const CopyRight = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  /* identical to box height, or 167% */

  color: #ffffff;

  mix-blend-mode: normal;
  opacity: 0.5;
`;
const Footer = () => {
  return (
    <Container>
      <DecoLine />
      <FooterNavbar>
        <Logo src={logo} alt="logo" />
        <MenuItems>
          <NavItem>
            <NavLinkItem>HOME</NavLinkItem>
          </NavItem>
          <NavItem>
            <NavLinkItem>HEADPHONES</NavLinkItem>
          </NavItem>
          <NavItem>
            <NavLinkItem>SPEAKERS</NavLinkItem>
          </NavItem>
          <NavItem>
            <NavLinkItem>EARPHONES</NavLinkItem>
          </NavItem>
        </MenuItems>
      </FooterNavbar>
      <ColumnInfo>
        <Info>
          <Desc>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </Desc>
          <CopyRight>Copyright 2022. All Rights Reserved</CopyRight>
        </Info>
        <SocialIcons>
          <MenuItems>
            <SocialItem>
              <NavLinkItem>
                <MdFacebook />
              </NavLinkItem>
            </SocialItem>
            <SocialItem>
              <NavLinkItem>
                <FaTwitter />
              </NavLinkItem>
            </SocialItem>
            <SocialItem>
              <NavLinkItem>
                <FaInstagram />
              </NavLinkItem>
            </SocialItem>
          </MenuItems>
        </SocialIcons>
      </ColumnInfo>
    </Container>
  );
};

export default Footer;
