import React from "react";
import { Link } from "react-router-dom";

import "./Homepage.scss";

const Homepage = () => {
  return (
    <div className="container">
      <p className="intro">
        Hi, I'm Thao and I'm a UX engineer at Google. I use design to bridge the
        gap between <span>humans and technology</span>, and{" "}
        <span>problems and solutions</span>. I'm especially interested in using
        the power of design to empower social good movements and organizations.
      </p>
      <Link to="/recall" className="project">
        <div className="project-image">
          <img src="/recall-logo.svg" alt="Recall" />
        </div>
        <div className="project-desc">
          <h1>Recall</h1>
          <h2>
            UX research &middot; Design &middot; Illustration &middot;
            Engineering
          </h2>
          <p>
            A video platform that enables researchers to record, upload,
            analyze, and share videos of their user studies.
          </p>
        </div>
      </Link>
      <Link to="/dsa" className="project">
        <div className="project-image">
          <img src="/nyc-dsa.svg" alt="NYC DSA" />
        </div>
        <div className="project-desc">
          <h1>NYC DSA</h1>
          <h2>Design &middot; Engineering</h2>
          <p>
            The marketing site of the NYC local chapter of Democratic Socialists
            of America, 5,500+ members and activists working together to build a
            democratic socialist organization in the five boroughs.
          </p>
        </div>
      </Link>
      <Link to="/les" className="project">
        <div className="project-image">
          <img src="/les.png" alt="Lower East Side" />
        </div>
        <div className="project-desc">
          <h1>Lower East Side</h1>
          <h2>Design &middot; Illustration</h2>
          <p>
            Project at the School of Visual Arts to create marketing materials
            for an NYC neighborhood. Includes a logo, posters, and more.
          </p>
        </div>
      </Link>
      <Link to="/illustrations" className="project">
        <div className="project-image">
          <img src="/i.png" alt="Illustrations" />
        </div>
        <div className="project-desc">
          <h1>Illustrations</h1>
          <h2>Illustration</h2>
          <p>
            Miscellaneous personal sample paintings, sketches, and
            illustrations.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Homepage;
