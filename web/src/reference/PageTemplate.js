import MainLayout from 'src/layouts/MainLayout/MainLayout';
import { useState } from 'react'
import {getLoggedInUser} from 'src/functions/GetLoggedInUser'

const PageTemplate = () => {
  const [language, setLanguage] = useState(sessionStorage.getItem('language')||'English')
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('user')||false)

  const currentUser = getLoggedInUser();

  return (
    <MainLayout
      language={currentUser.preferSpanish || language === 'Spanish' ? 'Spanish' : 'English'}
      setLanguage={setLanguage}
      isLoggedIn={isLoggedIn}
      setIsLoggedIn={setIsLoggedIn}
    >
      <PageTemplateContent />
    </MainLayout>
  )
}

const PageTemplateContent = props => {
  return(
    <>
      <h1>Page Template</h1>
      <p>Presented language: {props.language}</p>
      <p>Loggedin: {props.isLoggedIn}</p>
    </>
  )
}

export default PageTemplate
