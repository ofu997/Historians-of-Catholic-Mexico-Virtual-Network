import AnnouncementsCell from 'src/components/Announcement/AnnouncementsCell'
import { Link, routes } from '@redwoodjs/router'
import MainLayout from 'src/layouts/MainLayout/MainLayout'
import { useState } from 'react'

const AnnouncementsPage = () => {
  const [language, setLanguage] = useState(sessionStorage.getItem('language')||'English...')
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('user')||false)

  return (
    <>
      <MainLayout
        language={language} setLanguage={setLanguage}
        isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}
      >
        <AnnouncementsCell />
      </MainLayout>
    </>
  )

}

export default AnnouncementsPage
