import React from "react";
import "./style.css";

function Title({ children }) {
    return (
      <div
        style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
        className="jumbotron"
      >
        {children}
      </div>
    );
  }
  
  export default Title;
  