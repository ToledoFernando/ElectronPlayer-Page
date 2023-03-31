import React from "react";
import Image from "next/image";
import style from "@/styles/index/About1.module.scss";
import data from "./Vercion.json";

function About1() {
  return (
    <div id="about" className={style.about}>
      <section>
        <h2>Sobre ElectronPlayer v{data.verciones[0].ver.slice(0, 1)}</h2>
        <div className={style.divAbout}>
          <p>
            ElectronPlayer (actualmente v1), es un reproductor de musica local,
            lo que quiere decir que el acceso a internet no es necesario. La
            aplicacion lee el directorio "Musica" y muestra los archivos .mp3 y
            las carpetas que se encuentren en este directorio. Tambien,
            ElectronPlayer viene con su sistema de desarga, lo que quiere decir
            que es capaz de descargar musica usando solo la URL, por ahora solo
            soporta URL de YouTube, pero se le agregaran mas en algun futuro,
            tiene su apartado donde se mostraran las descargas realizadas
            tambien con su opcion de "Eliminar del historial" que como su nombre
            lo dice, elimina un elemento del historial de descarga. El proyecto
            tiene su codigo alojado en la plataforma GitHub, lo cual lo hace
            accesible a cualquiera que este interesado en saber como funciona
            ElectronPlayer. Pueden acceder usando este{" "}
            <a
              href="https://github.com/ToledoFernando/ElectronPlayer"
              target="_blank"
            >
              Link
            </a>
          </p>
          <Image
            className={style.imgEl}
            src="/icon.png"
            alt="electronplayer - logo"
            width={200}
            height={200}
          />
        </div>
      </section>
      <hr />
      <div className={style.tech}>
        <h2>Tecnologias Utilizadas</h2>
        <dl>
          <div>
            <dt>
              <Image
                src="/react.svg"
                alt="reactjs logo"
                width={50}
                height={50}
              />
              <span>ReactJS</span>
            </dt>
            <dd>Se uso la biblioteca de ReactJS para crear la interfaz</dd>
          </div>
          <div>
            <dt>
              <Image src="/redux.svg" alt="redux logo" width={50} height={50} />
              <span>Redux</span>
            </dt>
            <dd>Redux para manejar el estado global de la aplicacion</dd>
          </div>
          <div>
            <dt>
              <Image
                src="/js.svg"
                alt="javascript logo"
                width={50}
                height={50}
              />
              <span>Javascript</span>
            </dt>
            <dd>Javascript como lenguaje de programacion</dd>
          </div>
          <div>
            <dt>
              <Image src="/sass.svg" alt="sass logo" width={50} height={50} />
              <span>Sass</span>
            </dt>
            <dd>
              Preprocesador de CSS para dar estilos de manera mas eficiente
            </dd>
          </div>
          <div>
            <dt>
              <Image
                src="/nodejs.svg"
                alt="nodejs logo"
                width={50}
                height={50}
              />
              <span>NodeJS</span>
            </dt>
            <dd>NodeJS como entorno de ejecucion</dd>
          </div>
          <div>
            <dt>
              <Image
                src="/electron.svg"
                alt="electron logo"
                width={50}
                height={50}
              />
              <span>Electron JS</span>
            </dt>
            <dd>ElectronJS como Framework para crear la aplicacion desktop</dd>
          </div>
        </dl>
      </div>
      <hr />
    </div>
  );
}

export default About1;
