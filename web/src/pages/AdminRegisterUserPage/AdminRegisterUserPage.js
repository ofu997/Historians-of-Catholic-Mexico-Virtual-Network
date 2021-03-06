import MainLayout from 'src/layouts/MainLayout/MainLayout';
import { useState } from 'react'
import {getLoggedInUser} from 'src/functions/GetLoggedInUser'
import NewUser from 'src/components/User/NewUser'

const AdminRegisterUserPage = () => {
  const [language, setLanguage] = useState(sessionStorage.getItem('language')||'English')
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('user')||false)

  const currentUser = getLoggedInUser();

  return (
    <>
      <MainLayout
        language={currentUser.preferSpanish ? 'Spanish' : language}
        setLanguage={setLanguage}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        showFooter={false}
      >
        <AdminRegisterUserPageContent />
      </MainLayout>
    </>
  )
}

export const AdminRegisterUserPageContent = props => {
  return (
    <>
      <h1>Admin Register User Page</h1>
      <h2>The purpose of this page is to add users to the platform</h2>
      <NewUser />
    </>
  )
}

export default AdminRegisterUserPage
