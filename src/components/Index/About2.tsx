import Image from "next/image";
import React from "react";
import style from "@/styles/index/About2.module.scss";

function About2() {
  const viewSource = () => {
    window.open("https://github.com/ToledoFernando/ElectronPlayer");
  };
  return (
    <section className={style.About2}>
      <div className={style.div}>
        <h2>Sobre sistema de Descarga</h2>
        <p>
          Como se menciono anteriormente, ElectronPlayer trae su sistema de
          descargar donde Proporcionando una URL, se mostrara un preview del
          video musical, si el resultado coincide con la musica que esta
          buscando, podra descargar la musica, de lo contrairo, tendra que
          proporcionar otra URL. Los archivos Descargados se guardaran en la
          carpeta "Musica" o "Music", todo archivo descargado se guardara en
          formato .mp3, haciendolo accesible atravez de la misma aplicacion, una
          vez finalizada la descarga, basta con volver a la pantalla principal
          donde se actualizara la lista y se mostrara la nueva musica. Puedes
          ver como se implemento el modulo "ytdl-core" en el archivo "event.js"
          en este{" "}
          <a
            href="https://github.com/ToledoFernando/ElectronPlayer/blob/master/event.js"
            target="_blank"
          >
            Link
          </a>
        </p>
        <div className={style.button}>
          <button onClick={viewSource}>Ver Codigo</button>
        </div>
      </div>
      <Image src="/dow.png" width="600" height="400" alt="Electron Download" />
    </section>
  );
}

export default About2;
