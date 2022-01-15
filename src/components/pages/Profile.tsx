import React, { FC, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ProfileBar from "../ProfileBar/ProfileBar";
import ProfileUser from "../ProfileUser/ProfileUser";

interface ProfileProps {
  onLogout: () => void,
  onUpdateUser: any
  onUpdateUserPas: any
}
const Profile: FC<ProfileProps> = ({ onLogout, onUpdateUser, onUpdateUserPas }) => {
  const [isOpenSideBar, setIsOpenSideBar] = useState(true)

  const handleSideBarOpen = () => {
    setIsOpenSideBar(!isOpenSideBar)
  }

  return (
    <>
      <main className="main main_type_profile">
        <ProfileBar isOpen={isOpenSideBar} toggleSideBar={handleSideBarOpen} onLogout={onLogout}/>
        <Routes>
          <Route path="/" element={<ProfileUser onUpdateUser={onUpdateUser} onUpdateUserPas={onUpdateUserPas}/>}/>
        </Routes>
      </main>
    </>
  );
};

export default Profile;
