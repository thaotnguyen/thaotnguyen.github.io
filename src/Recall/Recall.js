import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import { container, item } from '../Body/Body';

import './Recall.scss';

export const Recall = () => {
  useEffect(() => {
    window.scroll(0, 0);
    return () => {};
  }, []);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="project-page"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.img variants={item} src="/recall.png" />
        <motion.h1 variants={item}>Recall</motion.h1>
        <motion.p variants={item}>
          <motion.span>
            My main UX project at Google is Recall, an internal video platform
            for UX researchers to upload footage of interviews for automatic
            analysis like transcription. When Recall was first developed, it was
            developed entirely by engineers without designers so the product
            basically looked like just the functionality plopped on the page. My
            job was to give the app a real UX foundation with research and
            design.
          </motion.span>
        </motion.p>
        <motion.img variants={item} src="/recall1.png" />
        <motion.p variants={item}>
          Starting UX research by looking at quantitative data.
        </motion.p>
        <motion.img variants={item} src="/recall2.png" />
        <motion.p variants={item}>
          2 main user groups discovered through analytics and qualitative user
          interviews.
        </motion.p>
        <motion.img src="/recall3.png" />
        <motion.p>
          Initial sketches for a new workflow that can satisfy our intended
          users while still addressing the need of our other users.
        </motion.p>
        <motion.img src="/recall4.png" />
        <motion.p>
          Research showed that many new users had trouble getting started and
          didn't know what the purpose of most components on the page were, so a
          new design had to include various empty states and prompts to guide
          users.
        </motion.p>
        <motion.img src="/recall5.png" />
        <motion.p>
          The design also needed to surface the most salient information to
          users, based on what they found important in usability tests.
        </motion.p>
        <motion.img src="/recall6.png" />
        <motion.p>
          I also created illustrations to not only ease users into the product,
          but also to add polish and refinement to increase trust.
        </motion.p>
        <motion.img src="/recall7.png" />
        <motion.p>
          Additional illustrations to ease users into the product.
        </motion.p>
        <motion.img
          src="/recall8.png"
          style={{ padding: 0, border: '1px solid #e0e0e0' }}
        />
        <motion.p>
          The finished product. Metrics showed that the project was an overall
          success. We had a 64% increase in MAU a week after the launch, and
          drop off rate on the homepage also reduced significantly.
        </motion.p>
        <motion.img src="/recall10.png" />
        <br />
        <br />
        <br />
      </motion.div>
    </motion.div>
  );
};

export default Recall;
