import styled from "styled-components";
import { Paper, Input } from "@material-ui/core";
import { FaChevronCircleDown, FaChevronCircleRight } from "react-icons/fa";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { MdDragHandle, MdAddCircle } from "react-icons/md";

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledPaper = styled(Paper)`
  border-radius: 30px !important;
  min-height: ${(props) => (props.flag ? "inherit" : "55px")}!important;
  width: 420px;
  margin: 15px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ highlight, bgColor }) =>
    bgColor !== "" ? bgColor : highlight ? "#6cdbff !important" : ""};
  /* transition: min-height 0.25s ease-in !important; */
`;

export const AnimationStyledPaper = styled(Paper)`
  border-radius: 30px !important;
  min-height: ${(props) => (props.flag ? "inherit" : "55px")}!important;
  width: 420px;
  margin: 15px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: ${({ styleElementFlag }) => (styleElementFlag ? "1" : "0")};
  background-color: ${({ highlight, bgColor, engageIndex }) =>
    highlight
      ? engageIndex === -1
        ? "#6cdbff !important"
        : "orange !important"
      : bgColor};
`;

export const List = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 0 3px;
  border-radius: 30px;
  border-bottom-left-radius: ${({ flag }) => (flag ? "0px" : "")};
  border-bottom-right-radius: ${({ flag }) => (flag ? "0px" : "")};
  padding-top: ${({ flag }) => (flag ? "6px" : "")};
  padding-bottom: ${({ flag }) => (flag ? "5px" : "")};
  background-color: ${({ flag }) => (flag ? "lightblue" : "")};
`;

export const AnimationList = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  padding: 0 3px;
  border-radius: 30px;
  border-bottom-left-radius: ${({ flag }) => (flag ? "0px" : "")};
  border-bottom-right-radius: ${({ flag }) => (flag ? "0px" : "")};
  padding-top: ${({ flag }) => (flag ? "6px" : "")};
  padding-bottom: ${({ flag }) => (flag ? "5px" : "")};
  background-color: ${({ flag, engageIndex }) =>
    flag ? (engageIndex === -1 ? "#6cdbff" : "orange") : ""};
`;

export const Name = styled.span`
  font-size: 25px;
  font-weight: 550;
  font-family: "Baloo Chettan 2", cursive;
  color: grey;
  text-align: left;
  cursor: pointer;
  text-transform: capitalize;
`;

export const PreferenceList = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: ${({ animation }) => (animation ? "" : "grab")};
  padding: 8px;
  padding-left: 5px;
  min-height: 53px;
  background-color: ${({ styleFlag }) => (styleFlag ? "darkgrey" : "")};
  border-bottom-left-radius: ${({ ind, len }) =>
    ind === len - 1 ? "30px" : ""};
  border-bottom-right-radius: ${({ ind, len }) =>
    ind === len - 1 ? "30px" : ""};
  /* margin-bottom: ${({ ind, len }) => (ind === len - 1 ? "6px" : "")}; */
  &:hover {
    background-color: lightgrey;
  }
  background-color: ${({ highlight, engageHighlight }) =>
    engageHighlight ? "orange" : highlight ? "lightgrey" : ""};
`;

export const StyledInput = styled(Input)`
  &:before {
    border-bottom: 0px !important;
  }
  &:after {
    border-bottom: 0px !important;
  }
  input {
    font-size: 25px;
    font-weight: 550;
    font-family: "Baloo Chettan 2", cursive;
    color: grey;
    text-align: left;
    cursor: pointer;
    text-transform: capitalize;
  }
`;

export const StyledFaChevronCircleRight = styled(FaChevronCircleRight)`
  height: ${({ animation }) => (animation ? "22px" : "25px")};
  width: ${({ animation }) => (animation ? "22px" : "25px")};
  margin: 0 10px;
  margin-right: 22px;
  color: #4a4a4a;
  cursor: pointer;

  &:hover {
    color: #000000;
  }
`;

export const StyledFaChevronCircleDown = styled(FaChevronCircleDown)`
  height: ${({ animation }) => (animation ? "22px" : "25px")};
  width: ${({ animation }) => (animation ? "22px" : "25px")};
  margin: 0 10px;
  margin-right: 22px;
  margin-left: ${({ animation }) => (animation ? "12px" : "10px")};
  color: #4a4a4a;
  cursor: pointer;

  &:hover {
    color: #000000;
  }
`;

export const StyledRiDeleteBack2Fill = styled(RiDeleteBack2Fill)`
  height: 30px;
  width: 30px;
  margin: 0 12px;
  margin-left: 20px;
  color: #4a4a4a;
  cursor: pointer;

  &:hover {
    color: #000000;
  }
`;

export const StyledMdDragHandle = styled(MdDragHandle)`
  height: 25px;
  width: 25px;
  margin-left: 8px;
  margin-right: 22px;
  color: #4a4a4a;
  cursor: grab;
  display: ${({ styleFlag }) => (styleFlag ? "none" : "")};

  &:hover {
    color: #000000;
  }
`;

export const ListItem = styled.span`
  font-size: 25px;
  font-weight: 550;
  font-family: "Baloo Chettan 2", cursive;
  color: grey;
  text-transform: capitalize;
  display: ${({ styleFlag }) => (styleFlag ? "none" : "")};
  margin-left: ${({ animation }) => (animation ? "54px" : "")};
`;

export const StyledMdAddCircle = styled(MdAddCircle)`
  height: 50px;
  width: 50px;
  color: #4a4a4a;
  margin-top: 18px;
  cursor: pointer;
  &:hover {
    color: #000000;
  }
`;
