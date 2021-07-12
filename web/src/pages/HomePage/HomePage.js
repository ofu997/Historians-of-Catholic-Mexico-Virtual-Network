import { Link, routes } from '@redwoodjs/router'
import MainLayout from 'src/layouts/MainLayout/MainLayout'
import { useState } from 'react'
import {getLoggedInUser} from 'src/functions/GetLoggedInUser'

const HomePage = () => {
  const [language, setLanguage] = useState(sessionStorage.getItem('language')||'English')
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('user')||false)

  const currentUser = getLoggedInUser();

  return (
    <>
      <MainLayout
        language={currentUser.preferSpanish ? 'Spanish' : language} setLanguage={setLanguage}
        isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}
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
      <p>I don't know what goes here</p>
      <p>Presented language: {props.language}</p>
      <p>Loggedin: {props.isLoggedIn}</p>
    </>
  )
}

export default HomePage
