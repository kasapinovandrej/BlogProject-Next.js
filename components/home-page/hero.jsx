import React from "react";
import Image from "next/image";
import classes from "./hero.module.scss";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/adi-portfolio-img.jpg"
          alt="An image showing Andrej"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Andrej</h1>
      <p>
        I write a blog about interesting things I come across while learning
        front-end web development!
      </p>
    </section>
  );
};

export default Hero;
