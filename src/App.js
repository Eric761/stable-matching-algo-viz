import React, { useState } from "react";
import Header from "./components/Header/Header";
import Notifier from "./components/Notifier/Notifier";
import MainList from "./components/MainList/MainList";

const App = () => {
  const [styleBg, setStyleBg] = useState({
    backgroundColor: "#0e0e0e",
  });
  const [shuffle, setShuffle] = useState(false);
  const [reset, setReset] = useState(false);
  const [saveFile, setSaveFile] = useState(false);
  const [uploadFile, setUploadFile] = useState({
    state: false,
    event: "",
  });
  const [play, setPlay] = useState(false);
  const [pause, setPause] = useState(false);
  const [skip, setSkip] = useState(false);
  const [SMPVizActive, setSMPVizActive] = useState(false);
  const [SMPVizDone, setSMPVizDone] = useState(false);

  const handleChangeBgColor = (val) => {
    if (val) {
      setStyleBg({
        backgroundColor: "#0e0e0e",
      });
    } else {
      setStyleBg({
        backgroundColor: "white",
      });
    }
  };
  const handleRandomConfig = (state) => {
    setShuffle(state);
  };
  const handleReset = (state) => {
    setReset(state);
  };
  const handleSaveFile = (state) => {
    setSaveFile(state);
  };
  const handleInputFile = (newEvent, newState) => {
    setUploadFile({
      state: newState,
      event: newEvent,
    });
  };
  const handlePlay = (state) => {
    setPlay(state);
  };
  const handleVizActive = (state) => {
    setSMPVizActive(state);
  };
  const handleVizDone = (state) => {
    setSMPVizDone(state);
  };
  const handlePause = (state) => {
    setPause(state);
  };
  const handleSkip = (state) => {
    setSkip(state);
  };

  return (
    <div className="App" style={styleBg}>
      <Notifier />
      <Header
        handleChangeBgColor={handleChangeBgColor}
        handleRandomConfig={handleRandomConfig}
        handleReset={handleReset}
        handleSaveFile={handleSaveFile}
        handleInputFile={handleInputFile}
        handlePlay={handlePlay}
        handlePause={handlePause}
        handleSkip={handleSkip}
      />
      <MainList
        shuffle={shuffle}
        reset={reset}
        saveFile={saveFile}
        uploadFile={uploadFile}
        play={play}
        pause={pause}
        skip={skip}
        SMPVizActive={SMPVizActive}
        SMPVizDone={SMPVizDone}
        handleRandomConfig={handleRandomConfig}
        handleReset={handleReset}
        handleSaveFile={handleSaveFile}
        handleInputFile={handleInputFile}
        handlePlay={handlePlay}
        handleVizActive={handleVizActive}
        handleVizDone={handleVizDone}
        handlePause={handlePause}
        handleSkip={handleSkip}
      />
    </div>
  );
};

export default App;
