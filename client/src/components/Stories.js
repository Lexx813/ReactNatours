import React from "react";
import storyPic from "../img/nat-8.jpg";
import storyPic2 from "../img/nat-9.jpg";
import videom from "../img/movie/video.mp4";
import videow from "../img/movie/video.webm";

const Stories = () => {
  return (
    <div className="section-stories">
      <div className="bg-video">
        <video autoPlay muted loop className="bg-video__content">
          <source src={videom} type="video/mp4" />
          Your browser does not support the video tag. I suggest you upgrade
          your browser.
          <source src={videow} type="video/webm" />
          Your browser does not support the video tag. I suggest you upgrade
          your browser.
        </video>
      </div>
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">We make people genuinely happy</h2>
      </div>
      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img src={storyPic} alt="story pic" className="story__img" />
            <figcaption className=" story__caption">Mary Smith</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-teriary u-margin-bottom-small">
              I had the best week ever
            </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non,
              dolores asperiores voluptatem suscipit nostrum illo? Ipsa itaque
              aliquam vel accusamus repudiandae, impedit numquam, harum modi
              fugiat dolorum eius illo sed?
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img src={storyPic2} alt="story pic" className="story__img" />
            <figcaption className=" story__caption">Jack Wilson</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-teriary u-margin-bottom-small">
              WoW! my life is completely different now.
            </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non,
              dolores asperiores voluptatem suscipit nostrum illo? Ipsa itaque
              aliquam vel accusamus repudiandae, impedit numquam, harum modi
              fugiat dolorum eius illo sed?
            </p>
          </div>
        </div>
      </div>
      <div className="u-center-text u-margin-top-huge">
        <a href="/" className=" btn-text">
          Read all stores &rarr;
        </a>
      </div>
    </div>
  );
};

export default Stories;
