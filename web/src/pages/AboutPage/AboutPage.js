import MainLayout from 'src/layouts/MainLayout/MainLayout';
import { Link, routes } from '@redwoodjs/router'
import { useState } from 'react'

const AboutPage = () => {
  const [language, setLanguage] = useState(sessionStorage.getItem('language')||'English')
  return (
    <MainLayout
      language={language} setLanguage={setLanguage}
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
      {/* My default route is named <code>about</code>, link to me with `
      <Link to={routes.about()}>About</Link>` */}
      <p>Presented language: {props.language}</p>
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
