import React, { useEffect, useRef } from "react";
import Image from "next/image";
import style from "@/styles/Portada.module.css";
import data from "./Vercion.json";
import Typed from "typed.js";

function Portada() {
  const inf = useRef(null);

  useEffect(() => {
    new Typed(inf.current, {
      strings: [
        `Un reproductor de Musica simple de usar, viene con su propia funcion
      de descargar donde le permite al usuario descargar la musica que
      desee y tenerla de forma local en su coputadora.`,
      ],
      typeSpeed: 10,
      loop: false,
      showCursor: false,
    });
  }, []);
  return (
    <section className={style.portada}>
      <div className={style.div1}>
        <div>
          <h1>Electron Player v1</h1>
          <p ref={inf}></p>
          <button>Download</button>
          <button>Codigo</button>
        </div>
      </div>
      <Image
        src="/rep.png"
        width="600"
        height="400"
        priority={true}
        alt="ElectronPlayer"
        quality={100}
        draggable
      />
    </section>
  );
}

export default Portada;
