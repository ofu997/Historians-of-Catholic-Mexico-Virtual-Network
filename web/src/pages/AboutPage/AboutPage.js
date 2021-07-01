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
    <h1>AboutPage</h1>
    <p>
      Find me in <code>./web/src/pages/AboutPage/AboutPage.js</code>
    </p>
      <div>
        My default route is named <code>about</code>, link to me with `
        <Link to={routes.about()}>About</Link>`
        <p>{props.language}</p>
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
