import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }

  .nav-icon-style-true {
    color: #b5b9aa;
    height: 32px;
    width: 32px;
    margin: 0 20px;
    cursor: pointer;

    &:hover {
      color: #ffffff;
    }
  }

  .nav-icon-style-false {
    color: #545454;
    height: 32px;
    width: 32px;
    margin: 0 20px;
    cursor: pointer;
    transition: 0.1s ease-in;

    &:hover {
      color: #000000;
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    text-decoration: none;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .restart-icon-style-true {
    color: #a9bf20;
    height: 30px;
    width: 30px;
    margin: 0 12px;
    cursor: pointer;

    &:hover {
      color: #dcff00;
    }
  }
  .restart-icon-style-false {
    color: #545454;
    height: 30px;
    width: 30px;
    margin: 0 12px;
    cursor: pointer;
    transition: 0.1s ease-in;

    &:hover {
      color: #000000;
    }
  }

  .icon-style-true {
    color: #a9bf20;
    height: 25px;
    width: 25px;
    margin: 0 12px;
    cursor: pointer;

    &:hover {
      color: #dcff00;
    }
  }
  .icon-style-false {
    color: #545454;
    height: 25px;
    width: 25px;
    margin: 0 12px;
    cursor: pointer;
    transition: 0.1s ease-in;

    &:hover {
      color: #000000;
    }
  }
`;

export const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
