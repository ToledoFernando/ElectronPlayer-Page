import Image from "next/image";
import React from "react";

function About2() {
  return (
    <section>
      <div>
        <div>
          <h2>Que mas puede hacer Electron Player?</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi a,
            eaque nobis unde ad est ullam cupiditate odio aspernatur voluptatum
            ipsum eligendi id. Ipsum nostrum dicta dolor accusamus,
            reprehenderit veniam consequatur, modi, minima blanditiis nulla
            autem! Hic et blanditiis at nobis tempora, aperiam illum porro
            aliquid accusamus omnis voluptate, repellendus consequatur nesciunt
            neque, nisi expedita officiis eos animi. Quidem maxime quaerat iure
            at, recusandae eos temporibus repellendus delectus quisquam
            repudiandae et reprehenderit nesciunt! Sint, dolor molestiae quis
            incidunt, ab velit debitis officiis harum omnis reprehenderit
            repellat inventore ut nihil obcaecati.
          </p>
        </div>
        <Image
          src="/dow.png"
          width={600}
          height={400}
          alt="Electron Download"
        />
      </div>
      <button>Ver Codigo</button>
    </section>
  );
}

export default About2;
