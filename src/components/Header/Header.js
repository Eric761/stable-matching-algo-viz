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
import { RiRestartFill } from "react-icons/ri";
import {
  HeaderContainer,
  NavContainer,
  IconContainer,
  ToggleContainer,
  StyledLink,
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

const Header = ({
  handleChangeBgColor,
  handleRandomConfig,
  handleReset,
  handleSaveFile,
  handleInputFile,
  handlePlay,
}) => {
  const [state, setState] = useState(true);
  const handleChange = () => {
    setState(!state);
    handleChangeBgColor(!state);
  };
  const handleUploadFile = (event) => {
    handleInputFile(event, true);
  };
  return (
    <HeaderContainer>
      <NavContainer>
        <FaInfoCircle className={`nav-icon-style-${state}`} />
        <a
          href="https://github.com/Eric761/stable-matching-algo-viz"
          target="_blank"
        >
          <FaGithub className={`nav-icon-style-${state}`} />
        </a>
      </NavContainer>
      <IconContainer>
        <RiRestartFill
          className={`restart-icon-style-${state}`}
          onClick={() => handleReset(true)}
        />
        <ImShuffle
          className={`icon-style-${state}`}
          onClick={() => handleRandomConfig(true)}
        />
        <FaPlay
          className={`icon-style-${state}`}
          onClick={() => handlePlay(true)}
        />
        <BsSkipForwardFill className={`icon-style-${state}`} />
        <FaPause className={`icon-style-${state}`} />
        <FaStop className={`icon-style-${state}`} />
        <FaSave
          className={`icon-style-${state}`}
          onClick={() => handleSaveFile(true)}
        />
        <label for="upload-file">
          <FaFileUpload className={`icon-style-${state}`} />
        </label>
        <input
          id="upload-file"
          type="file"
          accept="application/json"
          onChange={handleUploadFile}
        />
      </IconContainer>
      <ToggleContainer>
        <StyledSwitch checked={state} onChange={handleChange} />
      </ToggleContainer>
    </HeaderContainer>
  );
};

export default Header;
