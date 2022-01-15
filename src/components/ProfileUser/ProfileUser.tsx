import React, { FC } from 'react'
import './ProfileUser.scss'
import { useSelector } from 'react-redux'
import ProfileForm from '../Forms/ProfileForm/ProfileForm'
import UpdatePasswordForm from '../Forms/UpdatePasswordForm/UpdatePasswordForm'

interface ProfileUserProps {
  onUpdateUser: any
  onUpdateUserPas: any
}

const ProfileUser: FC<ProfileUserProps> = ({onUpdateUser, onUpdateUserPas}) => {
  return (
    <section className="profile-user">
      <h1 className="profile-user__title">Account Settings</h1>

      
      <ProfileForm onUpdateUser={onUpdateUser}/>
      <UpdatePasswordForm onUpdateUserPas={onUpdateUserPas}/>
    </section>
  )
}

export default ProfileUser
