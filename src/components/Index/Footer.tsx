import { useState, useEffect } from "react";
import Image from "next/image";
import style from "@/styles/index/Footer.module.scss";
import data from "./Vercion.json";

function Footer() {
  const [year, setYear] = useState<number>();

  const dow = () => {
    window.location.href = data.dw;
  };

  const source = () => {
    window.open("https://github.com/ToledoFernando/ElectronPlayer");
  };

  const dev = () => {
    window.open("https://ftoledo.online");
  };

  useEffect(() => {
    const fecha = new Date();

    setYear(fecha.getFullYear());
  }, []);

  return (
    <div className={style.footer}>
      <div className={style.iconE}>
        <Image
          src="/icon.png"
          alt="ElectronPlayer icon"
          width={30}
          height={30}
        />
        <p>©{year} ElectronPlayer</p>
      </div>
      <div className={style.buttons}>
        <button onClick={source}>
          Ver Codigo <span></span>
        </button>
        <button onClick={dow}>
          Descargar <span></span>
        </button>
        <button onClick={dev}>
          Toledo Dev <span></span>
        </button>
      </div>
    </div>
  );
}

export default Footer;
