import React from "react";

const Hero = () => {

  return (
    <section className="hero">
      <div className="content">
        <div className="title">
          <h1>FIT.</h1>
          <h1>FIERCE.</h1>
          <h1>FABULOUS.</h1>
        </div>
        <div className="sub-title">
          <p>Fitness with a Feminine Twist</p>
          <p>“Train Like a Queen”</p>
        </div>
        <div className="buttons">
          <a href="#contact">
            <button >Start Your Glow-up Journey</button>
          </a>

          <a href="#plans">
            <button>Find Your Strength Path</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
