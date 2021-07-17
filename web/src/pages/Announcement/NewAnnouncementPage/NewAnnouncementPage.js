import NewAnnouncement from 'src/components/Announcement/NewAnnouncement'
import MainLayout from 'src/layouts/MainLayout/MainLayout';
import {getLoggedInUser} from 'src/functions/GetLoggedInUser'
import { useQuery } from '@redwoodjs/web'
import USER_QUERY from 'src/graphql-helpers/userquery'
import dummyObject from 'src/graphql-helpers/dummyobject'
import { useState } from 'react'

const NewAnnouncementPage = () => {
  const [language, setLanguage] = useState(sessionStorage.getItem('language')||'English')
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('user')||false)
  const currentUser = getLoggedInUser();
  const currentUserId = currentUser.id;

  const { loading, error: useQueryError, data } = currentUserId ?
    useQuery(USER_QUERY, {
      variables: { currentUserId }
    })
    :
    dummyObject;

  const onSave = (input) => {
    createUser({ variables: { input } })
  }

  return (
  ((currentUser.localSessionPassword === data?.user.localSessionPassword) && data?.user.isAdmin) ? (
    <MainLayout
      language={currentUser.preferSpanish ? 'Spanish' : language}
      setLanguage={setLanguage}
      isLoggedIn={isLoggedIn}
      setIsLoggedIn={setIsLoggedIn}
    >
      <NewAnnouncement loading={loading} error={useQueryError} />
    </MainLayout>
    ):
    (<h2>Invalid credentials</h2>)
  )
}

export default NewAnnouncementPage
