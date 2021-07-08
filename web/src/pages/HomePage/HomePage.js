import { Link, routes } from '@redwoodjs/router'
import MainLayout from 'src/layouts/MainLayout/MainLayout'
import { useState } from 'react'

const HomePage = () => {
  const [language, setLanguage] = useState(sessionStorage.getItem('language')||'English...')
  return (
    <>
      <MainLayout
        language={language} setLanguage={setLanguage}
      >
        <HomePageContent />
        {/* access language from state hook or as prop from parent component */}
        {/* <p>language is : {language}</p> */}
      </MainLayout>
    </>
  )
}

const HomePageContent = props => {
  return(
    <>
    <h1>HomePage</h1>
    <p>
      Find me in <code>./web/src/pages/HomePage/HomePage.js</code>
    </p>
    <p>
      My default route is named <code>home</code>, link to me with `
      <Link to={routes.home()}>Home</Link>`
    </p>
    {
      props.language && (
        <p>language from MainLayout: {props.language}</p>
      )
    }
    </>
  )
}

export default HomePage
