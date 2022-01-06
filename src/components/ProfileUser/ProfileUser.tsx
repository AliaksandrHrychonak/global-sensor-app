import React, { FC } from 'react'
import './ProfileUser.scss'
import { useSelector } from 'react-redux'
import ProfileForm from '../Forms/ProfileForm/ProfileForm'
import UpdatePasswordForm from '../Forms/UpdatePasswordForm/UpdatePasswordForm'

interface ProfileUserProps {
  
}

const ProfileUser: FC<ProfileUserProps> = ({}) => {
  const user: any = useSelector<any>(state => state.auth.user)
  return (
    <section className="profile-user">
      <h1 className="profile-user__title">Account Settings</h1>

      
      <ProfileForm/>
      <UpdatePasswordForm />
    </section>
  )
}

export default ProfileUser
