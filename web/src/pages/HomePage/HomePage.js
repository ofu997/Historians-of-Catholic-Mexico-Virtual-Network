import { Link, routes } from '@redwoodjs/router'
import MainLayout from 'src/layouts/MainLayout/MainLayout'
import { useState } from 'react'
import {getLoggedInUser} from 'src/functions/GetLoggedInUser'
import { useQuery } from '@redwoodjs/web'
import USER_QUERY from 'src/graphql-helpers/userquery'
import dummyObject from 'src/graphql-helpers/dummyobject'
import ImportantAnnouncementsCell from 'src/components/Announcement/ImportantAnnouncementsCell'

const HomePage = () => {
  const [language, setLanguage] = useState(sessionStorage.getItem('language')||'English')
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('user')||false)
  const currentUser = getLoggedInUser()

  return (
    <>
      <MainLayout
        language={currentUser.preferSpanish ? 'Spanish' : language}
        setLanguage={setLanguage}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      >
        <HomePageContent />
        {/* access language from state hook or as prop from parent component */}
        {/* <p>language is : {language}</p> */}
      </MainLayout>
    </>
  )
}

const HomePageContent = props => {
  const { language } = props;
  const currentUser = getLoggedInUser()
  const isSpanish = Boolean(language==='Spanish' ? true : false)
  const { error, data } = currentUser.id
    ? useQuery(USER_QUERY, {
      variables: { currentUserId : currentUser.id }
    })
    : dummyObject;

  return(
    <>
      {((currentUser?.localSessionPassword === data?.user?.localSessionPassword) && data?.user?.isAdmin)
        && (
          <>
            <hr />
            <Link
              to={routes.adminRegisterUser()}
              className='rw-button rw-button-blue home-page-buttons cntr-h'
            >
              Create a new user
            </Link>
            <hr />
            <Link
              to={routes.adminDeleteUser()}
              className='rw-button rw-button-red home-page-buttons cntr-h'
            >
              Delete a user
            </Link>
            <hr />
            <Link
              to={routes.newAnnouncement()}
              className='rw-button rw-button-blue home-page-buttons cntr-h'
            >
              Create an announcement
            </Link>
            <hr />
          </>
        )
      }
      <section id='homepageContent'>
        <h1 className='rokkitt'>{isSpanish?<span>Resumen de HISTCATMEX</span>:<span>Summary of HISTCATMEX</span>}</h1>
      </section>
      <ImportantAnnouncementsCell />
    </>
  )
}

export default HomePage
