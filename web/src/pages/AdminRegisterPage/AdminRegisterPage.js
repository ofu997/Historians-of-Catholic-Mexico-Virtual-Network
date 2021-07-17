import { Link, routes } from '@redwoodjs/router'
import MainLayout from 'src/layouts/MainLayout/MainLayout'
import { useState } from 'react'
import NewAdmin from 'src/components/User/NewAdmin'
// import { navigate, routes } from '@redwoodjs/router'
import {getLoggedInUser} from 'src/functions/GetLoggedInUser'

const AdminRegisterPage = () => {
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
      >
        <AdminRegisterPageContent />
      </MainLayout>
    </>
  )
}


const AdminRegisterPageContent = () => {
  return (
    <div>
      <h1>Sole purpose of this page is for admins to register themselves</h1>
      <NewAdmin />
    </div>
  )
}


export default AdminRegisterPage
