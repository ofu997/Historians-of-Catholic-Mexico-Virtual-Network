import { Link, routes } from '@redwoodjs/router'
import MainLayout from 'src/layouts/MainLayout/MainLayout'
import { useState } from 'react'

const ProfilesPage = () => {
  const [language, setLanguage] = useState(sessionStorage.getItem('language')||'English')
  return (
    <MainLayout
      language={language} setLanguage={setLanguage}
    >
      <ProfilesPageContent />
    </MainLayout>
  )
}

const ProfilesPageContent = props => {
  return(
    <>
      <h1>ProfilesPage</h1>
      <p>
        Find me in <code>./web/src/pages/ProfilesPage/ProfilesPage.js</code>
      </p>
      <p>
        My default route is named <code>profiles</code>, link to me with `
        <Link to={routes.profiles()}>Profiles</Link>`
      </p>
      <p>{props.language}</p>
    </>
  )
}

export default ProfilesPage
