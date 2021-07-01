import React, { useState } from "react";
import Header from "./components/Header/Header";
import Notifier from "./components/Notifier/Notifier";

const App = () => {
  const [styleBg, setStyleBg] = useState({
    backgroundColor: "black",
  });
  const handleChangeBgColor = (val) => {
    if (val) {
      setStyleBg({
        backgroundColor: "black",
      });
    } else {
      setStyleBg({
        backgroundColor: "white",
      });
    }
  };
  return (
    <div className="App" style={styleBg}>
      <Notifier />
      <Header handleChangeBgColor={handleChangeBgColor} />
    </div>
  );
};

export default App;
