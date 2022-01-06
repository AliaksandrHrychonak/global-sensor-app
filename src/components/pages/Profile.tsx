import React, { FC, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ProfileBar from "../ProfileBar/ProfileBar";
import ProfileUser from "../ProfileUser/ProfileUser";

interface ProfileProps {

}

const Profile: FC<ProfileProps> = ({}) => {
  const [isOpenSideBar, setIsOpenSideBar] = useState(true)

  const handleSideBarOpen = () => {
    setIsOpenSideBar(!isOpenSideBar)
  }

  return (
    <>
      <main className="main main_type_profile">
        <ProfileBar isOpen={isOpenSideBar} toggleSideBar={handleSideBarOpen}/>
        <Routes>
          <Route path="/" element={<ProfileUser />}/>
          <Route path="/me" element={<p>me</p>}/>
        </Routes>
      </main>
    </>
  );
};

export default Profile;
