import { useState, useEffect } from "react";
import Image from "next/image";
import style from "@/styles/index/Footer.module.scss";

function Footer() {
  const [year, setYear] = useState<number>();

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
        <button>
          Ver Codigo <span></span>
        </button>
        <button>
          Descargar <span></span>
        </button>
        <button>
          Toledo Dev <span></span>
        </button>
      </div>
    </div>
  );
}

export default Footer;
