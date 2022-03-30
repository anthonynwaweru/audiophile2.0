import React from "react";
import styled from "styled-components";
import logo from "../assets/shared/desktop/logo.svg";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Container = styled.div`
  max-width: 1110px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  height: 65px;
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #979797;
`;
const Logo = styled.img`
  width: 143px;
  height: 25px;
`;
const MenuItems = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
`;
const NavItem = styled.li`
  margin-right: 34px;
  
  }
`;
const Link = styled.a`
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
const Icon = styled.div`
  color: white;
  cursor: pointer;
  font-size: 18px;
  text-align: center;
`;
const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  list-style: none;
  color: white;
  &:hover {
    color: coral;
  }
`;

const Navbar = (props) => {
  return (
    <>
      <Container>
        <Nav>
          <Logo src={logo} alt="audiophile logo" />
          <MenuItems>
            <NavItem>
              <NavLinkStyled to="/">
                <Link>HOME</Link>
              </NavLinkStyled>
            </NavItem>
            <NavItem>
              <NavLinkStyled to="/headphones">
                <Link>HEADPHONES</Link>
              </NavLinkStyled>
            </NavItem>
            <NavItem>
              <NavLinkStyled to="/speakers">
                <Link>SPEAKERS</Link>
              </NavLinkStyled>
            </NavItem>
            <NavItem>
              <NavLinkStyled to="earphones">
                <Link>EARPHONES</Link>
              </NavLinkStyled>
            </NavItem>
          </MenuItems>
          <Icon>
            <NavLinkStyled to="/cart">
              <AiOutlineShoppingCart />
            </NavLinkStyled>
          </Icon>
        </Nav>
      </Container>
    </>
  );
};
export default Navbar;
