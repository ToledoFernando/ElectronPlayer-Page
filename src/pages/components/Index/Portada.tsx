import React from "react";
import Image from "next/image";

function Portada() {
  return (
    <section>
      <div>
        <div>
          <h1>Electron Player</h1>
          <strong>v.1.1.0</strong>
        </div>
        <button>Download</button>
        <button>Codigo</button>
      </div>
      <Image
        src="/rep.png"
        width="600"
        height="400"
        priority={true}
        alt="ElectronPlayer"
        quality={100}
      />
    </section>
  );
}

export default Portada;
