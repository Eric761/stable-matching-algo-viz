import styled from "styled-components";
import { Paper, Input } from "@material-ui/core";
import { FaChevronCircleDown, FaChevronCircleRight } from "react-icons/fa";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { MdDragHandle } from "react-icons/md";

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledPaper = styled(Paper)`
  border-radius: 30px !important;
  min-height: 55px;
  /* min-height: ${({ len, flag }) =>
    flag ? `${(len + 1) * 55}px` : "55px"}; */
  width: 420px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

export const PreferenceList = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: move;
  padding: 8px;
  padding-left: 5px;
  border-bottom-left-radius: ${({ ind, len }) =>
    ind === len - 1 ? "30px" : ""};
  border-bottom-right-radius: ${({ ind, len }) =>
    ind === len - 1 ? "30px" : ""};
  /* margin-bottom: ${({ ind, len }) => (ind === len - 1 ? "6px" : "")}; */
  &:hover {
    background-color: lightgrey;
  }
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
  height: 25px;
  width: 25px;
  margin: 0 10px;
  margin-right: 22px;
  color: #4a4a4a;
  cursor: pointer;

  &:hover {
    color: #000000;
  }
`;

export const StyledFaChevronCircleDown = styled(FaChevronCircleDown)`
  height: 25px;
  width: 25px;
  margin: 0 10px;
  margin-right: 22px;
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
  cursor: move;

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
`;
