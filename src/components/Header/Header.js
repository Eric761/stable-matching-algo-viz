import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import {
  FaStop,
  FaPlay,
  FaPause,
  FaInfoCircle,
  FaGithub,
  FaFileUpload,
  FaSave,
} from "react-icons/fa";
import { BsSkipForwardFill } from "react-icons/bs";
import { ImShuffle } from "react-icons/im";
import { GrRotateRight } from "react-icons/gr";
import {
  HeaderContainer,
  NavContainer,
  IconContainer,
  ToggleContainer,
} from "./HeaderElements";

const StyledSwitch = withStyles((theme) => ({
  root: {
    width: 52,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    color: "#4a4a4a",
    padding: 1,
    "&$checked": {
      transform: "translateX(26px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: "#4a4a4a",
        opacity: 1,
        border: "none",
      },
    },
    "&$focusVisible $thumb": {
      color: "#4a4a4a",
      border: "6px solid #fff",
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `0px solid white`,
    backgroundColor: theme.palette.grey[200],
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

const Header = ({ handleChangeBgColor }) => {
  const [state, setState] = useState(true);
  const handleChange = () => {
    setState(!state);
    handleChangeBgColor(!state);
  };
  return (
    <HeaderContainer>
      <NavContainer>
        <FaInfoCircle className={`nav-icon-style-${state}`} />
        <FaGithub className={`nav-icon-style-${state}`} />
      </NavContainer>
      <IconContainer>
        <GrRotateRight className={`icon-style-${state}`} />
        <ImShuffle className={`icon-style-${state}`} />
        <FaPlay className={`icon-style-${state}`} />
        <BsSkipForwardFill className={`icon-style-${state}`} />
        <FaPause className={`icon-style-${state}`} />
        <FaStop className={`icon-style-${state}`} />
        <FaSave className={`icon-style-${state}`} />
        <FaFileUpload className={`icon-style-${state}`} />
      </IconContainer>
      <ToggleContainer>
        <StyledSwitch checked={state} onChange={handleChange} />
      </ToggleContainer>
    </HeaderContainer>
  );
};

export default Header;
