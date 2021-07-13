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
  return (
    <div className="App" style={styleBg}>
      <Notifier />
      <Header
        handleChangeBgColor={handleChangeBgColor}
        handleRandomConfig={handleRandomConfig}
        handleReset={handleReset}
        handleSaveFile={handleSaveFile}
      />
      <MainList
        shuffle={shuffle}
        reset={reset}
        saveFile={saveFile}
        handleRandomConfig={handleRandomConfig}
        handleReset={handleReset}
        handleSaveFile={handleSaveFile}
      />
    </div>
  );
};

export default App;
