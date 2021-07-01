import React, { useState } from "react";
import Header from "./components/Header/Header";

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
      <Header handleChangeBgColor={handleChangeBgColor} />
    </div>
  );
};

export default App;
