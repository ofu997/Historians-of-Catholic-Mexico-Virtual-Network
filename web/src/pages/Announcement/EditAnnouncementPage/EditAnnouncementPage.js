import EditAnnouncementCell from 'src/components/Announcement/EditAnnouncementCell'
import MainLayout from 'src/layouts/MainLayout/MainLayout';
import { useState } from 'react'

const EditAnnouncementPage = ({ id }) => {
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
      <EditAnnouncementCell id={id} />
    </MainLayout>
  )
}

export default EditAnnouncementPage
