import MainLayout from 'src/layouts/MainLayout/MainLayout'
import { useState } from 'react'
import {getLoggedInUser} from 'src/functions/GetLoggedInUser'
import UsersCell from 'src/components/User/UsersCell'
import TagAndSearch from 'src/components/TagAndSearch/TagAndSearch'

const ProfilesPage = () => {
  const [language, setLanguage] = useState(sessionStorage.getItem('language')||'English')
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('user')||false)

  const currentUser = getLoggedInUser();

  return (
    <MainLayout
      language={currentUser.preferSpanish ? 'Spanish' : language}
      setLanguage={setLanguage}
      isLoggedIn={isLoggedIn}
      setIsLoggedIn={setIsLoggedIn}
      showFooter={false}
    >
      <ProfilesPageContent />
    </MainLayout>
  )
}

const ProfilesPageContent = () => {
  return(
    <>
    <TagAndSearch />
      <UsersCell />
    </>
  )
}

export default ProfilesPage
