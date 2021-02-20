import React from 'react';
import { motion } from 'framer-motion';

import './Fabric.scss';

export const Fabric = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="project-page">
        <img src="/fabric-hero.png" />
        <h1>Fabric</h1>
        <p>
          <span>
            My main UX project at Google is Fabric, an internal video platform
            for UX researchers to upload footage of interviews for automatic
            analysis like transcription. When Fabric was first developed, it was
            developed entirely by engineers without designers so the product
            basically looked like just the functionality plopped on the page. My
            job was to give the app a real UX foundation with research and
            design.
          </span>
        </p>
        <img src="/fabric1.png" />
        <p>Starting UX research by looking at quantitative data.</p>
        <img src="/fabric2.png" />
        <p>
          2 main user groups discovered through analytics and qualitative user
          interviews.
        </p>
        <img src="/fabric3.png" />
        <p>
          Initial sketches for a new workflow that can satisfy our intended
          users while still addressing the need of our other users.
        </p>
        <img src="/fabric4.png" />
        <p>
          Research showed that many new users had trouble getting started and
          didn't know what the purpose of most components on the page were, so a
          new design had to include various empty states and prompts to guide
          users.
        </p>
        <img src="/fabric5.png" />
        <p>
          The design also needed to surface the most salient information to
          users, based on what they found important in usability tests.
        </p>
        <img src="/fabric6.png" />
        <p>
          I also created illustrations to not only ease users into the product,
          but also to add polish and refinement to increase trust.
        </p>
        <img src="/fabric7.png" />
        <p>Additional illustrations to ease users into the product.</p>
        <img src="/fabric8.png" />
        <p>
          The finished product. Metrics showed that the project was an overall
          success. We had a 64% increase in MAU a week after the launch, and
          drop off rate on the homepage also reduced significantly.
        </p>
        <img src="/fabric12.png" />
        <p>
          The finished product. Metrics showed that the project was an overall
          success. We had a 64% increase in MAU a week after the launch, and
          drop off rate on the homepage also reduced significantly.
        </p>
        <img src="/fabric10.png" />
        <p>
          The finished product. Metrics showed that the project was an overall
          success. We had a 64% increase in MAU a week after the launch, and
          drop off rate on the homepage also reduced significantly.
        </p>
        <img src="/fabric11.png" />
      </div>
    </motion.div>
  );
};

export default Fabric;
