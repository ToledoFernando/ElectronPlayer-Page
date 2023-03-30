import React from "react";
import Image from "next/image";
import style from "@/styles/Nav.module.css";

function NavBar() {
  return (
    <nav className={style.nav}>
      <div className={style.div}>
        <div className={style.img}>
          <Image
            src={"/icon.png"}
            width="40"
            height="40"
            alt="Logo Electron PLayer"
          />
          <h2>ElectronPlayer</h2>
        </div>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#">Codigo</a>
          </li>
          <li>
            <a href="#">Descarga</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
