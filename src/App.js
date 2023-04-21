import "./App.scss";
import React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";

const App = () => {
  const handleClickReadState = () => {
    console.log("Functia Read State");
  };

  const [readSensorState, setReadSensorState] = useState("PRESENT");

  return (
    <div className="app-container">
      <h1 className="title">Sensor Test</h1>
      <div className="button-container">
        <Button variant="outlined">Power up</Button>
      </div>
      <div className="sensor-button">
        <Button variant="outlined" onClick={handleClickReadState}>
          CHECK SENSORS
        </Button>
      </div>
      <div className="state-container">
        <div className="sensor-state">Sensor State:</div>
        <div
          className={
            readSensorState === "PRESENT" ? "status-present" : "status-absent"
          }
        >
          {readSensorState}
        </div>
      </div>
    </div>
  );
};

export default App;
