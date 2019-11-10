import React from "react";
import "../styles/beats.scss";

function Beats() {
  return (
    <div className="beats">
      <div id="background"></div>
      <div id="chest">
        <div class="heart left side top"></div>
        <div class="heart center">&hearts;</div>
        <div class="heart right side"></div>
      </div>
    </div>
  );
}

export default Beats;
