import * as React from 'react';
import '../../i18n';
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import config from '../../utils/config';
import { Main } from '../pages/Main';
import { Login } from '../pages/Login';
import { Registration } from '../pages/Registration';
import { NotFound } from '../pages/NotFound';
import { Contact } from '../pages/Contact';
import PM2100 from '../pages/PM2100';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { googleLogin, login, logout, refreshToken, registration } from '../../store/actions/authActions';
import ProtectedRoute from '../ProdectedRoute/ProtectedRoute';
import { UserSubmitFormLogin, UserSubmitFormRegister } from '../../types/formTypes';
import Profile from '../pages/Profile';
import {
  dataModule,
  dataModule2101,
  dataModule2102,
  dataModule450,
  dataModule500,
  equipments,
  equipmentsAXOB,
  gs2100,
  gs2100Image,
  gs2101,
  gs2101Image,
  gs2102,
  gs2102Image,
  gs450,
  gs450Image,
  gs500,
  gs500Image,
} from '../../utils/pmData';
import Terms from '../pages/Terms';

export const App: React.FunctionComponent = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
  const [windowDimension, setWindowDimension] = useState<number>(window.innerWidth)
  const isMobile: boolean = windowDimension <= 950
  const dispatch = useDispatch<any>()
  // const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    let timeoutId: any = null
    const resizeListener = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        setWindowDimension(window.innerWidth)
        if (isMobile) {
          setIsMobileMenuOpen(false)
        }
      }, config.IS_TIMEOUT)
    }
    window.addEventListener('resize', resizeListener)
    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  }, [isMobile])

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(refreshToken())
    }
  }, [dispatch])

  const handleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleLogin = (data: UserSubmitFormLogin) => {
    dispatch(login(data.email, data.password))
    navigate('/')
  }

  const handleRegister = (data: UserSubmitFormRegister) => {
    dispatch(registration(data.firstName, data.lastName, data.email, data.password))
    navigate('/sign-in')
  }

  const handleLoginWithGoogle = () => {
    dispatch(googleLogin())
  }

  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Main isMobile={isMobile} toggleMenu={handleMobileMenu} />} />
        <Route
          path="/gs2100"
          element={
            <PM2100
              isMobile={isMobile}
              toggleMenu={handleMobileMenu}
              titleModule="GS2100"
              productSpecification={gs2100}
              dataModule={dataModule}
              moduleEquipments={equipments}
              dataImages={gs2100Image}
            />
          }
        />
        <Route
          path="/gs2100-01"
          element={
            <PM2100
              isMobile={isMobile}
              toggleMenu={handleMobileMenu}
              titleModule="GS2101"
              productSpecification={gs2101}
              dataModule={dataModule2101}
              moduleEquipments={equipments}
              dataImages={gs2101Image}
            />
          }
        />
        <Route
          path="/gs2100-02"
          element={
            <PM2100
              isMobile={isMobile}
              toggleMenu={handleMobileMenu}
              titleModule="GS2102"
              productSpecification={gs2102}
              dataModule={dataModule2102}
              moduleEquipments={equipments}
              dataImages={gs2102Image}
            />
          }
        />
        <Route
          path="/gs450"
          element={
            <PM2100
              isMobile={isMobile}
              toggleMenu={handleMobileMenu}
              titleModule="GS450"
              productSpecification={gs450}
              dataModule={dataModule450}
              moduleEquipments={equipmentsAXOB}
              dataImages={gs450Image}
            />
          }
        />
        <Route
          path="/gs500"
          element={
            <PM2100
              isMobile={isMobile}
              toggleMenu={handleMobileMenu}
              titleModule="GS500"
              productSpecification={gs500}
              dataModule={dataModule500}
              moduleEquipments={equipmentsAXOB}
              dataImages={gs500Image}
            />
          }
        />
        <Route path="/profile/*" element={<ProtectedRoute children={<Profile />} />} />
        <Route path="/contact" element={<Contact isMobile={isMobile} toggleMenu={handleMobileMenu} />} />
        <Route path="/sign-in" element={<Login onSubmit={handleLogin} onAcessWithGoogle={handleLoginWithGoogle} />} />
        <Route
          path="/sign-up"
          element={<Registration onSubmit={handleRegister} onAcessWithGoogle={handleLoginWithGoogle} />}
        />
        <Route path="/terms" element={<Terms isMobile={isMobile} toggleMenu={handleMobileMenu} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {isMobile && <MobileMenu isMobile={isMobile} toggleMenu={handleMobileMenu} isOpen={isMobileMenuOpen} />}
    </>
  )
}

function mapStateToProps(state: { auth: any }) {
  const { user, isLoggedIn } = state.auth
  return {
    user,
    isLoggedIn,
  }
}

export default connect(mapStateToProps)(App)
