import * as React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "../Header/Header";
import { routes } from "../utils/routes";

export const App: React.FunctionComponent = () => {
  return (
    <div className="page">
      <Header logo="logo" routes={routes}/>
      <Router>
        <Switch>
          {
            routes.map((route, index) => (
              <Route key={index} path={route.path} exact={route.exact} />
            ))
          }
        </Switch>
      </Router>
    </div>
  );
};
