import styled from "styled-components";

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

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

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

export const ToggleContainer = styled.div``;
