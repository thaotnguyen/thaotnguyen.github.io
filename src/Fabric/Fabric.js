import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import { container, item } from '../Body/Body';

import './Fabric.scss';

export const Fabric = () => {
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
        <motion.img variants={item} src="/fabric-hero.png" />
        <motion.h1 variants={item}>Fabric UX branding</motion.h1>
        <motion.p variants={item}>
          <motion.span>
            My main visual design project at Google is Fabric UX. A couple teams
            under Google Ads were re-orged and put together, and I led the
            effort to develop a brand to unite the new team. It started as a
            small project between my mentor and I at first but quickly grew into
            a huge project.
          </motion.span>
        </motion.p>
        <motion.img variants={item} src="/fabric1.png" />
        <motion.p variants={item}>
          I used initial surveys to put together a new mission and purpose from
          which a brand could emerge under. The team saw themselves as being
          very human and personable and friendly, while also being very polished
          and professional and existing within a complex problem space.
        </motion.p>
        <motion.img variants={item} src="/fabric2.png" />
        <motion.p variants={item}>
          Like with UX, I wanted to start with some research. I surveyed the
          team on questions like how did they see themselves and how did they
          want others to see them. From those questions, I aggregated the words
          that showed up often together to come up with a chart showing the
          words that the team felt were emblematic of themselves.
        </motion.p>
        <motion.img variants={item} src="/fabric3.png" />
        <motion.p variants={item}>
          In addition, I also asked what kind of logo format and style they
          want, to get some idea of the end product they were expecting.
        </motion.p>
        <motion.img src="/workshop.gif" />
        <motion.p>
          This effort actually started a little after shelter-in-place, so it
          was entirely online. After the initial research, I led a workshop with
          some members of the team to find out what images and visual styles
          they felt fit their team and the words that they had chosen for
          themselves. This is a recording of what it looked like, where we voted
          on images to build a moodboard to work off of.
        </motion.p>
        <motion.img src="/fabric5.png" />
        <motion.p>
          I started out with pen and paper sketches exploring a lot of the
          visual ideas that we had come up with, like elements coming together
          and being woven together, and a mix of curves and hard edges to
          communicate the mix of human-ness and refinement that the team wanted.
          I then took some of those sketches and did iterations in Figma, just
          like with UX work.
        </motion.p>
        <motion.img src="/fabric6.png" />
        <motion.p>
          These are some examples of some of the later iterations I came up
          with, and you can see elements of woven together-ness as well as a
          middle ground between personable-ness and polishedness.
        </motion.p>
        <motion.img src="/fabric7.png" />
        <motion.p>
          I also worked with other designers to experiment with colors. The
          visual workshop had shown me that the team liked vibrant colors, so we
          experimented with really bright colors like mint or this very
          fluorescent green. We also experimented with gradients and
          combinations of colors, like this blue and coral. We also experimented
          with using the Google brand colors to fit in with some other tools at
          Google.
        </motion.p>
        <motion.img src="/fabric-animation.gif" />
        <motion.p>
          I worked on animation iterations, and this is an example, showing
          elements coming together to be a single united element.
        </motion.p>
        <motion.img src="/fabric8.png" />
        <motion.p>
          Concepts taken from the visual branding workshop that can be
          extrapolated to form an entire visual brand, complete with patterns
          that can be used on swag or a deck template.
        </motion.p>
        <motion.img src="/fabric12.png" />
        <motion.p>
          An early iteration of how these visual pillars could be applied in a
          deck template.
        </motion.p>
        <motion.img src="/fabric.gif" />
        <motion.p>
          This is what came out of this process. A very minimal logo that can be
          extended to a number of different uses, like being a primary element
          on a page, or as separable and repeatable elements. We also have very
          vibrant background with a really dynamic mix of organic curves and
          inorganic shapes coming together to make a mosaic of elements with
          patterns from afar and also patterns as you look closer.
        </motion.p>
        <motion.img src="/fabric10.png" />
        <motion.p>
          Examples of the logo and visual patterns being used on swag.
        </motion.p>
        <motion.img src="/fabric11.png" />
        <motion.p>The resulting swag in real life.</motion.p>
        <motion.img src="/fabric13.png" />
        <br />
        <br />
        <br />
      </motion.div>
    </motion.div>
  );
};

export default Fabric;
