import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarWrap>
        <Logo />
        <Nav>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/">MARKET</NavLink>
          <NavLink to="/">TRADE</NavLink>
          <NavLink to="/">PRICING</NavLink>
          <NavLink to="/">DOWNLOAD</NavLink>
          <NavLink to="/">HELP</NavLink>
        </Nav>
        <Search>
          <SearchWrap>
            <Input type="text" placeholder="Symbol/Name" />
          </SearchWrap>
        </Search>
        <ButtonContainer>
          <Button
            css={`
              color: #3f89fc;
              background: #fff;
            `}
          >
            Sign Up
          </Button>
          <Button>Log In</Button>
        </ButtonContainer>
      </NavbarWrap>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  z-index: 20;
  background: #fff;
`;
const NavbarWrap = styled.div`
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;
const Logo = styled.div`
  width: 128px;
  height: 22px;
  background: url("https://pub.webull.com/global/web/webull-us-master-g/assets/5df57d3f01093e5cc5f6a2ba2b50e8d3.svg");
  background-size: 100% 100%;
  cursor: pointer;
`;
const Nav = styled.div`
  flex: 1;
  padding-left: 50px;
  position: relative;
`;
const NavLink = styled(Link)`
  color: #000;
  padding: 0 15px;
  font-size: 16px;
  font-weight: 700;
  line-height: 80px;
  text-decoration: none;
`;
const Search = styled.div`
  right: 235px;
  position: absolute;
`;
const SearchWrap = styled.div`
  width: 220px;
  height: 36px;
  position: relative;
  box-sizing: border-box;
  line-height: 33px;
  padding-left: 37px;
  border-radius: 19px;
  background: rgba(179, 191, 201, 0.15);
`;
const Input = styled.input`
  color: #000;
  width: 196px;
  border: transparent;
  background: transparent;
  font-size: 12px;
  outline: none;

  &::placeholder {
    color: #d1d8ed;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
const Button = styled.div`
  width: 100px;
  color: #fff;
  cursor: pointer;
  height: 36px;
  background: linear-gradient(90deg, #0546d6, #3f89fc);
  font-size: 16px;
  box-sizing: border-box;
  text-align: center;
  line-height: 36px;
  border-radius: 21px;
  margin-right: 10px;
`;
