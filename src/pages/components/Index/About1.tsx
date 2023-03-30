import React from "react";
import Image from "next/image";
import style from "@/styles/About1.module.css";

function About1() {
  return (
    <div id="about" className={style.about}>
      <section>
        <div className={style.divAbout}>
          <h2>Sobre ElectronPlayer</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
            mollitia explicabo, ea voluptates deserunt blanditiis ut amet nihil
            quis numquam dolore nam atque necessitatibus harum vero placeat enim
            repellat modi sed? Eligendi nostrum quo officia qui, repudiandae est
            quam facere doloribus rem consequuntur, nulla aliquid at doloremque
            quod eos ullam beatae cupiditate quae repellat fugit libero
            laboriosam. Quidem architecto perferendis provident illo nisi
            quisquam omnis animi odit aliquam ut, adipisci dignissimos unde et
            accusantium ullam id esse at recusandae cumque laboriosam quis
            praesentium eius dolorem tempora! Dolor odio labore, natus
            laboriosam libero, assumenda expedita ipsum debitis dignissimos
            aspernatur repellendus? Adipisci labore voluptates dolor quae
            nostrum architecto hic ea, facere est! Reprehenderit reiciendis
            voluptatum cupiditate. Ipsa corrupti sint eum obcaecati commodi!
            Labore ea sint omnis rerum quae, quo voluptatibus adipisci earum
            repellat molestiae, doloremque tempore quam voluptates enim libero
            aperiam vel doloribus atque hic eaque? Animi dignissimos deserunt
            libero quidem. Labore?
          </p>
        </div>
        <img src="/icon.png" alt="electronplayer - logo" />
      </section>
      <div>
        <h2>Tecnologias Utilizadas</h2>
        <dl>
          <dt>
            <Image src="/react.svg" alt="reactjs logo" width={50} height={50} />
            <span>ReactJS</span>
          </dt>
          <dt>
            <Image src="/redux.svg" alt="redux logo" width={50} height={50} />
            <span>Redux</span>
          </dt>
          <dt>
            <Image src="/js.svg" alt="javascript logo" width={50} height={50} />
            <span>Javascript</span>
          </dt>
          <dt>
            <Image src="/sass.svg" alt="sass logo" width={50} height={50} />
            <span>Sass</span>
          </dt>
          <dt>
            <Image src="/nodejs.svg" alt="nodejs logo" width={50} height={50} />
            <span>NodeJS</span>
          </dt>
          <dt>
            <Image
              src="/electron.svg"
              alt="electron logo"
              width={50}
              height={50}
            />
            <span>Electron JS</span>
          </dt>
        </dl>
      </div>
    </div>
  );
}

export default About1;
