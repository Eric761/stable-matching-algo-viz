import styled from "styled-components";
import { Paper, Input } from "@material-ui/core";
import { FaChevronCircleDown, FaChevronCircleRight } from "react-icons/fa";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { AiFillDelete } from "react-icons/ai";

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledPaper = styled(Paper)`
  border-radius: 30px !important;
  height: 55px;
  width: 415px;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
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
