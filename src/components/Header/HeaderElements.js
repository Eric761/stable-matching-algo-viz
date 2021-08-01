import styled from "styled-components";
import { Link } from "react-router-dom";
import { RiRestartFill } from "react-icons/ri";
import { ImShuffle } from "react-icons/im";
import { BsSkipForwardFill } from "react-icons/bs";
import { FaStop, FaPlay, FaPause, FaFileUpload, FaSave } from "react-icons/fa";

export const HeaderContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: column3-end;
  grid-row-start: 2;
  grid-row-end: 2;
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
    display: flex;
    align-items: center;
    justify-content: center;
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
  margin-right: 108px;

  label {
    display: flex;
    justify-content: center;
    align-items: center;
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

export const StyledRiRestartFill = styled(RiRestartFill)`
  color: ${({ active, state }) =>
    active ? (state ? "#a9bf20" : "#545454") : "#adadad"};
  height: 30px;
  width: 30px;
  margin: 0 12px;
  cursor: ${({ active }) => (active ? "pointer" : "")};

  &:hover {
    color: ${({ active, state }) =>
      active ? (state ? "#dcff00" : "#000000") : "#adadad"};
    transition: 0.1s ease-in;
  }
`;
export const StyledImShuffle = styled(ImShuffle)`
  height: 25px;
  width: 25px;
  margin: 0 12px;
  color: ${({ active, state }) =>
    active ? (state ? "#a9bf20" : "#545454") : "#adadad"};
  cursor: ${({ active }) => (active ? "pointer" : "")};

  &:hover {
    color: ${({ active, state }) =>
      active ? (state ? "#dcff00" : "#000000") : "#adadad"};
    transition: 0.1s ease-in;
  }
`;

export const StyledFaPlay = styled(FaPlay)`
  height: 25px;
  width: 25px;
  margin: 0 12px;
  color: ${({ state }) => (state ? "#a9bf20" : "#545454")};
  cursor: pointer;

  &:hover {
    color: ${({ state }) => (state ? "#dcff00" : "#000000")};
    transition: 0.1s ease-in;
  }
`;

export const StyledBsSkipForwardFill = styled(BsSkipForwardFill)`
  height: 25px;
  width: 25px;
  margin: 0 12px;
  color: ${({ active, state }) =>
    active ? (state ? "#a9bf20" : "#545454") : "#adadad"};
  cursor: ${({ active }) => (active ? "pointer" : "")};

  &:hover {
    color: ${({ active, state }) =>
      active ? (state ? "#dcff00" : "#000000") : "#adadad"};
    transition: 0.1s ease-in;
  }
`;

export const StyledFaPause = styled(FaPause)`
  height: 25px;
  width: 25px;
  margin: 0 12px;
  color: ${({ active, state, isPaused }) =>
    active
      ? isPaused
        ? "#e0004f"
        : state
        ? "#a9bf20"
        : "#545454"
      : "#adadad"};
  cursor: ${({ active }) => (active ? "pointer" : "")};

  &:hover {
    color: ${({ active, state, isPaused }) =>
      active
        ? isPaused
          ? "#a73a60"
          : state
          ? "#dcff00"
          : "#000000"
        : "#adadad"};
    transition: 0.1s ease-in;
  }
`;

export const StyledFaStop = styled(FaStop)`
  height: 25px;
  width: 25px;
  margin: 0 12px;
  color: ${({ active, state }) =>
    active ? (state ? "#a9bf20" : "#545454") : "#adadad"};
  cursor: ${({ active }) => (active ? "pointer" : "")};

  &:hover {
    color: ${({ active, state }) =>
      active ? (state ? "#dcff00" : "#000000") : "#adadad"};
    transition: 0.1s ease-in;
  }
`;

export const StyledFaSave = styled(FaSave)`
  height: 25px;
  width: 25px;
  margin: 0 12px;
  color: ${({ active, state }) =>
    active ? (state ? "#a9bf20" : "#545454") : "#adadad"};
  cursor: ${({ active }) => (active ? "pointer" : "")};

  &:hover {
    color: ${({ active, state }) =>
      active ? (state ? "#dcff00" : "#000000") : "#adadad"};
    transition: 0.1s ease-in;
  }
`;

export const StyledFaFileUpload = styled(FaFileUpload)`
  height: 25px;
  width: 25px;
  margin: 0 12px;
  color: ${({ active, state }) =>
    active ? (state ? "#a9bf20" : "#545454") : "#adadad"};
  cursor: ${({ active }) => (active ? "pointer" : "")};

  &:hover {
    color: ${({ active, state }) =>
      active ? (state ? "#dcff00" : "#000000") : "#adadad"};
    transition: 0.1s ease-in;
  }
`;
