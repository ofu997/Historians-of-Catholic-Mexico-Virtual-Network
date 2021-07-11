import MainLayout from 'src/layouts/MainLayout/MainLayout';
import { useState } from 'react'
import {getLoggedInUser} from 'src/functions/GetLoggedInUser'
import { useQuery } from '@redwoodjs/web'
import { USER_QUERY } from 'src/components/User/EditUserForm'

const PageTemplate = () => {
  const [language, setLanguage] = useState(sessionStorage.getItem('language')||'English')
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('user')||false)

  const dummyObject = { error: null, data: null };

  const currentUser = getLoggedInUser();
  const userId = currentUser.id

  const { error:useQueryError, data } = userId ?
    useQuery(USER_QUERY, {
      variables: { userId }
    })
    :
    dummyObject;

  return (
    <MainLayout
      language={data?.user.preferSpanish ? 'Spanish' : language} setLanguage={setLanguage}
      isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}
    >
      <p>{useQueryError}</p>
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
