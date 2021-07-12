import MainLayout from 'src/layouts/MainLayout/MainLayout';
import { useState } from 'react'
import {getLoggedInUser} from 'src/functions/GetLoggedInUser'

const AboutPage = () => {
  const [language, setLanguage] = useState(sessionStorage.getItem('language')||'English')
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('user')||false)

  const currentUser = getLoggedInUser();

  return (
    <MainLayout
      language={currentUser.preferSpanish ? 'Spanish' : language} setLanguage={setLanguage}
      isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}
    >
      <AboutPageContent />
    </MainLayout>
  )
}

const AboutPageContent = props => {
  return(
    <>
    <h1>About Page</h1>
    <div style={{ display: 'flex', justifyContent: 'center' }}>

    <h4 style={{ maxWidth: '60%', lineHeight: '60px' }}>
      HISTCATMEX comprises an international network of historians devoted to furthering research and promoting academic collaboration pertinent to twentieth-century Mexican Catholic history.  The network is made up of senior scholars, advanced graduate students, and everyone in between.
    </h4>
    </div>
    <div>
      <p>Presented language: {props.language}</p>
      <p>Loggedin: {props.isLoggedIn}</p>
    </div>
    </>
  )
}

const Console = props => {
  console.log('table of language')
  console.table(props.language)
  return false;
}

export default AboutPage
