import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>SWEAT & SHINE SESSION</h1>
        <p>
          This full-body burner is crafted to sculpt your curves, ignite your energy, and boost your confidence. Ride strong, glow brighter, and slay every rep!
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>BOOTCAMPS FOR BABES</h1>
        <p>
          Unleash your inner warrior with our signature bootcamps. Whether you're toning, shredding, or flexin’, these programs are made for queens who lift themselves and others.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Glow-Up Grind</h4>
            <p>
              A high-intensity, confidence-building workout focused on core, booty, and energy!
            </p>
          </div>
          <div>
            <h4>HIIT Like a Girl</h4>
            <p>
              Fierce intervals and strong moves that crush stereotypes and calories.
            </p>
          </div>
          <div>
            <h4>Cardio Crush Party</h4>
            <p>
              Dance, jump, and sparkle your way through this endorphin-boosting sweat sesh.
            </p>
          </div>
          <div>
            <h4>Tone & Twerk</h4>
            <p>
              Sculpt your body, shake off the stress, and slay with sass.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
