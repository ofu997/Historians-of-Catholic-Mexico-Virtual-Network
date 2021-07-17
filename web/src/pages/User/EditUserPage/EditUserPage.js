import MainLayout from 'src/layouts/MainLayout/MainLayout';
import { useState } from 'react'
import {getLoggedInUser} from 'src/functions/GetLoggedInUser'
import EditUserCell from 'src/components/User/EditUserCell'

const EditUserPage = ({ id }) => {
  const [language, setLanguage] = useState(sessionStorage.getItem('language')||'English')
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('user')||false)

  const currentUser = getLoggedInUser();

  return(
    <MainLayout
      language={currentUser.preferSpanish ? 'Spanish' : language}
      setLanguage={setLanguage}
      isLoggedIn={isLoggedIn}
      setIsLoggedIn={setIsLoggedIn}
    >
      <EditUserCell id={id} language={language} />
    </MainLayout>
  )
}

export default EditUserPage
