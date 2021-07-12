import { Link, routes } from '@redwoodjs/router'
import MainLayout from 'src/layouts/MainLayout/MainLayout'
import { useState } from 'react'
import {getLoggedInUser} from 'src/functions/GetLoggedInUser'
import UsersCell from 'src/components/User/UsersCell'

const ProfilesPage = () => {
  const [language, setLanguage] = useState(sessionStorage.getItem('language')||'English')
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('user')||false)

  const currentUser = getLoggedInUser();

  return (
    <MainLayout
      language={currentUser.preferSpanish ? 'Spanish' : language} setLanguage={setLanguage}
      isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}
    >
      <ProfilesPageContent />
    </MainLayout>
  )
}

const ProfilesPageContent = props => {
  return(
    <>
      <h1>ProfilesPage</h1>
      <p>{props.language}</p>
      <UsersCell />
    </>
  )
}

export default ProfilesPage
