import React from 'react';
import { Switch, useLocation, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Homepage from '../Homepage';
import Recall from '../Recall';
import Fabric from '../Fabric';
import Product from '../Product';
import DSA from '../DSA';

import './Body.scss';

function Body() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/" component={Homepage} exact />
        <Route path="/recall" component={Recall} />
        <Route path="/fabric" component={Fabric} />
        <Route path="/product" component={Product} />
        <Route path="/dsa" component={DSA} />
      </Switch>
    </AnimatePresence>
  );
}

export default Body;
