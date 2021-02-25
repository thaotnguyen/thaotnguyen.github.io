import React, { useEffect, useState } from 'react';
import classnames from 'classnames/bind';
import { withRouter, useHistory } from 'react-router-dom';
import { motion, useViewportScroll } from 'framer-motion';

import './Homepage.scss';

const Container = ({ location }) => {
  const [scroll, setScroll] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [fadeArrow, setFadeArrow] = useState(true);
  const history = useHistory();
  const { scrollYProgress } = useViewportScroll();

  const handleScroll = () => {
    setScroll(window.scrollY);
    setFadeArrow(true);
  };

  useEffect(() => {
    setFadeArrow(false);
    setLoaded(true);
    setScroll(window.scrollY);
    window.addEventListener('scroll', handleScroll, true);
    return () => {};
  }, []);

  const windowHeight = 2 * window.innerHeight;

  const colorMap = [
    '#191819',
    '#191819',
    '#191819',
    '#191819',
    '#e1bee7',
    '#fcf3d1',
    '#e5e5e5',
    '#191819',
  ];

  const backgroundColor = () => {
    return colorMap[Math.floor(scroll / window.innerHeight)];
  };

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="main" style={{ backgroundColor: backgroundColor() }}>
        {/* <div
        className="background"
        style={{ backgroundImage: `url(${backgroundImage()})` }}
      /> */}
        <div
          className="body"
          style={{
            opacity:
              scroll > windowHeight ? 1 - (scroll - windowHeight) / 1000 : 1,
            height: windowHeight + 1000,
            pointerEvents: scroll > window.innerHeight ? 'none' : 'auto',
          }}
        >
          <div className={classnames('title', 'container')}>
            <div className="landing">
              <div
                className="header right"
                style={{ right: scroll / 2, opacity: loaded ? 1 : 0 }}
              >
                <h1>thao nguyen</h1>
              </div>
              <div
                className="header left"
                style={{ left: scroll / 2, opacity: loaded ? 1 : 0 }}
              >
                <h1>{window.outerWidth > 600 ? 'visual + ux' : ''} designer</h1>
              </div>
            </div>
          </div>
          <div className="chevron" style={{ opacity: fadeArrow ? 0 : 1 }}>
            &rsaquo;
          </div>
        </div>
        <div style={{ height: '12vh' }} />
        <div className="blurb">
          <p>
            Hi, I'm Thao and I'm a multidisciplinary UX/visual designer and
            engineer at Google, based in SF and NYC.
          </p>
          <p>
            I'm a quick learner who loves impactful, empathetic user-facing work
            and is interested in social good and helping underserved
            communities.
          </p>
          <p>
            My goal is to help nonprofits with design, branding, and outreach to
            amplify their impact.
          </p>
        </div>
        <div
          className="project"
          onClick={() => history.push('/recall')}
          style={{ color: '#191819' }}
          layoutId="recall"
        >
          <div className="project-content">
            <h1>Recall</h1>
            <h6>
              UX design &middot; UX research &middot; Illustration &middot;
              Development
            </h6>
            <h4>
              A video platform for automated analysis of UX research interviews.
            </h4>
          </div>
          <img
            src="/recall-tall.png"
            alt="Recall"
            style={{
              filter: 'drop-shadow(5px 5px 5px rgba(100, 100, 100, 50))',
            }}
          />
        </div>
        <div className="project" onClick={() => history.push('/fabric')}>
          <div className="project-content">
            <h1>Fabric UX</h1>
            <h6>
              Brand identity &middot; Visual design &middot; Motion design
            </h6>
            <h4>
              Complete brand identity and visual system for an internal ads
              team.
            </h4>
          </div>
          <img src="/fabric-tall.png" alt="Fabric UX" />
        </div>
        <div className="project" onClick={() => history.push('/product')}>
          <div className="project-content">
            <h1>Illustrations</h1>
            <h6>Illustration</h6>
            <h4>
              Assorted illustrations and animations for internal Google
              products.
            </h4>
          </div>
          <img src="/product.png" alt="Product illustrations" />
        </div>
        <div className="blurb">
          <p>Get in touch.</p>
          <p className="link">
            <a
              href="https://www.linkedin.com/in/%F0%9F%8C%88-thao-nguyen-b5b4b2bb/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </p>
          <p className="link">
            <a
              href="https://github.com/thaotnguyen"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </p>
          <p className="link">
            <a
              href="https://docs.google.com/presentation/d/1CEWNMjdOlGeMsBFCrJzeYkhWuFzA_7eBQWWut9cWlzc/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio deck
            </a>
          </p>
          <p className="link">
            <a
              href="mailto:thao_nguyen@alumni.brown.edu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default withRouter(Container);
