import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Homepage from "../Homepage";
import Recall from "../Recall";

import "./Body.scss";

const Container = ({ location }) => {
  return (
    <TransitionGroup className="transition-group" p>
      <CSSTransition
        key={location.key}
        timeout={{ enter: 400, exit: 400 }}
        classNames={"fade"}
      >
        <section className="route-section">
          <Switch location={location}>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/recall" component={Recall} />
          </Switch>
        </section>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default withRouter(Container);
