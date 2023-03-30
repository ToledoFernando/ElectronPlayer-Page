import React from "react";
import data from "./Vercion.json";

interface vercion {
  fecha: string;
  ver: string;
  title: string;
  detalle: string;
}

function Verciones() {
  return (
    <dl>
      {data.verciones.map((e: vercion, index: number) => (
        <div key={index}>
          <dt>
            {e.title} - {e.fecha} - v{e.ver}
          </dt>
          <dd>{e.detalle}</dd>
        </div>
      ))}
    </dl>
  );
}

export default Verciones;
