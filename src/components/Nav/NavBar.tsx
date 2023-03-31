import React from "react";
import Image from "next/image";
import style from "@/styles/Nav.module.scss";

function NavBar() {
  const [menu, setMenu] = React.useState<boolean>(false);

  const onclickTitle = () => {
    window.location.href = "/";
  };
  return (
    <nav className={style.nav}>
      <div className={style.div}>
        <div className={style.img} onClick={onclickTitle}>
          <Image
            src={"/icon.png"}
            width="40"
            height="40"
            alt="Logo Electron PLayer"
          />
          <h2>ElectronPlayer</h2>
        </div>
        <div className="menu">
          <button
            onClick={() => setMenu(!menu)}
            className={menu ? style.menuRn : style.menuR}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={menu ? style.viewM : style.noviewM}>
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
      </div>
    </nav>
  );
}

export default NavBar;
