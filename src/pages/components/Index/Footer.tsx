import React from "react";
import data from "./Vercion.json";

function Footer() {
  return (
    <div>
      <p>ElectronPlayer v{data.verciones[0].ver}</p>
    </div>
  );
}

export default Footer;
