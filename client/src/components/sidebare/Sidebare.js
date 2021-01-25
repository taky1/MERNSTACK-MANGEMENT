import React from "react";
import "./sidebare.css";
import { SideBareData } from "./SidebareData";

const Sidebare = () => {
  return (
    <div className="Sidebare">
      <ul>
        {SideBareData.map((val, key) => {
            return(
          <li key={key}>
            <div>{val.icon}</div>
          </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebare;
