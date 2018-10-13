import React from "react";

const About = () => {
  return (
    <div className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Exciting tours for adventurous people
        </h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            You're going to fall in love with nature
          </h3>
          <p className="paragraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga rerum
            blanditiis animi dolorum nam, dolor praesentium enim earum tenetur
            atque labore eos provident repudiandae reiciendis officiis quo.
            Voluptas, animi dolor.
          </p>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Live adventures like you never have before
          </h3>
          <p className="paragraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga rerum
            blanditiis animi dolorum nam, dolor praesentium enim earum tenetur
            atque labore eos provident repudiandae reiciendis officiis quo.
            Voluptas, animi dolor.
          </p>
          <a href="/" className="btn-text">
            Learn more &rarr;
          </a>
        </div>
        <div className="col-1-of-2" />
      </div>
    </div>
  );
};

export default About;
