import MainLayout from 'src/layouts/MainLayout/MainLayout';
import { useState } from 'react'
import {getLoggedInUser} from 'src/functions/GetLoggedInUser'

const AboutPage = () => {
  const [language, setLanguage] = useState(sessionStorage.getItem('language')||'English')
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('user')||false)

  const currentUser = getLoggedInUser();

  return (
    <MainLayout
      language={currentUser.preferSpanish ? 'Spanish' : language}
      setLanguage={setLanguage}
      isLoggedIn={isLoggedIn}
      setIsLoggedIn={setIsLoggedIn}
    >
      <AboutPageContent />
    </MainLayout>
  )
}

const AboutPageContent = props => {
  const isSpanish = Boolean(props.language==='Spanish' ? true : false);
  return(
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      {isSpanish
      ? (
        <h4
        className='about-page-content'>
          HISTCATMEX se compone de una red internacional dedicada a fomentar investigaciones y promover colaboraci&oacute;n acad&eacute;mica
          relacionada con la historia del catolicismo en M&eacute;xico en el siglo XX. La red se compone de eruditos mayores, estudiantes de
          posgrado, y todo tipo de personas.
        </h4>
      )
      : (
        <h4
        className='about-page-content'>
          HISTCATMEX comprises an international network of historians devoted to furthering research and promoting academic collaboration
          pertinent to twentieth-century Mexican Catholic history.  The network is made up of senior scholars, advanced graduate students,
          and everyone in between.
        </h4>
      )}
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
