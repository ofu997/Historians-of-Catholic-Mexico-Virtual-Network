import MainLayout from 'src/layouts/MainLayout/MainLayout'
import { useState } from 'react'
import {getLoggedInUser} from 'src/functions/GetLoggedInUser'
import TaggedUsersCell from 'src/components/User/TaggedUsersCell'
import TagAndSearch from 'src/components/TagAndSearch/TagAndSearch'

const TaggedUsersPage = ({ tag }) => {
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
      <TaggedUsersPageContent tag={tag} />
    </MainLayout>
  )
}

export const TaggedUsersPageContent = props => {
  return (
    <>
      <TagAndSearch tag={props.tag} />
      <TaggedUsersCell tag={props.tag} />
    </>
  )
}

export default TaggedUsersPage
