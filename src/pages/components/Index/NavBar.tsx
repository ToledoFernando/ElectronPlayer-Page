import React from "react";
import Image from "next/image";
// import ico from "/icon.png";

function NavBar() {
  return (
    <nav>
      <div>
        <Image
          src={"/icon.png"}
          width="40"
          height="40"
          alt="Logo Electron PLayer"
        />
        <ul>
          <li>
            <a href="#">About</a>
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
