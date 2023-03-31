import React from "react";
import data from "./Vercion.json";
import style from "@/styles/index/Verciones.module.scss";

interface vercion {
  fecha: string;
  ver: string;
  title: string;
  detalle: string;
}

function Verciones() {
  return (
    <dl className={style.verciones}>
      <h3>Informacion sobre Verciones:</h3>
      {data.verciones.map((e: vercion, index: number) => (
        <div key={index}>
          <dt>
            v{e.ver}{" "}
            <span className={index === 0 ? style.actual : style.ant}></span>
          </dt>
          <dd>
            <p>
              - {e.title} - {e.fecha}:
            </p>
            {e.detalle}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export default Verciones;
