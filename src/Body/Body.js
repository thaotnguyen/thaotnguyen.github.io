import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Homepage from "../Homepage";
import Recall from "../Recall";
import DSA from "../DSA";
import LES from "../LES";
import Illustrations from "../Illustrations";

import "./Body.scss";

const Container = ({ location }) => {
  return (
    <TransitionGroup className="transition-group" p>
      <CSSTransition
        key={location.key}
        timeout={{ enter: 400, exit: 0 }}
        classNames={"fade"}
      >
        <section className="route-section">
          <Switch location={location}>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/recall" component={Recall} />
            <Route exact path="/dsa" component={DSA} />
            <Route exact path="/les" component={LES} />
            <Route exact path="/illustrations" component={Illustrations} />
          </Switch>
        </section>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default withRouter(Container);
