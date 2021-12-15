import * as React from "react";
import '../../i18n'
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { connect, useDispatch } from 'react-redux';
// import { MobileMenu } from "../MobileMenu/MobileMenu";
import config from "../../utils/config";
import { Main } from "../pages/Main";
import { Login } from "../pages/Login";
import { Registration } from "../pages/Registration";
import { NotFound } from "../pages/NotFound";
import { checkAuth } from "../../store/actions/authActions";
import { Contact } from "../pages/Contact";

export const App: React.FunctionComponent = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [windowDimension, setWindowDimension] = useState<number>(window.innerWidth);
  const isMobile: boolean = windowDimension <= 800;
  const dispatch = useDispatch<any>();

  useEffect(() => {
    let timeoutId: any = null;
    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWindowDimension(window.innerWidth);
        if (isMobile) {
          setIsMobileMenuOpen(false);
        }
      }, config.IS_TIMEOUT);
    };
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, [isMobile]);

  useEffect(() => {
    console.log('tyty');
    dispatch(checkAuth())
  }, [dispatch])

  const handleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
    <Routes>
      <Route path="/" element={<Main isMobile={isMobile} toggleMenu={handleMobileMenu}/>} />
      <Route path="/contact" element={<Contact isMobile={isMobile} toggleMenu={handleMobileMenu}/>} />
      <Route path="/sign-in" element={<Login />} />
      <Route path="/sign-up" element={<Registration />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
};

function mapStateToProps(state: { auth: { user: any; }; }) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(App);


