import * as React from "react";
import { useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "../Header/Header";
import { MobileNavBar } from "../MobileNavBar/MobileNavBar";
import { routes } from "../utils/routes";

export const App: React.FunctionComponent = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false)
  const [windowDimension, setWindowDimension] = useState<number>(0);
  const isMobile: boolean = windowDimension <= 1024;

  React.useEffect(() => {
    return setWindowDimension(window.innerWidth);
  }, []);

  React.useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMobileMenu = () => {
    setIsMobileNavOpen(!isMobileNavOpen)
  }


  return (
    <div className="page">
      <Header logo="logo" routes={routes} toggleMenu={handleMobileMenu} isMobile={isMobile}/>
      <Router>
        <Switch>
          {
            routes.map((route, index) => (
              <Route key={index} path={route.path} exact={route.exact} />
            ))
          }
        </Switch>
      </Router>
      <MobileNavBar routes={routes} toggleMenu={handleMobileMenu} isOpen={isMobileNavOpen} isMobile={isMobile}/>
    </div>
  );
};
