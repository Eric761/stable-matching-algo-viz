import React from "react";
import MaleList from "./MaleList/MaleList";
import FemaleList from "./FemaleList/FemaleList";

const MainList = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <MaleList />
      <FemaleList />
    </div>
  );
};

export default MainList;
