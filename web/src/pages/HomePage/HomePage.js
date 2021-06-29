import { Link, routes } from '@redwoodjs/router'
import MainLayout from 'src/layouts/MainLayout/MainLayout'
import languageContext from 'src/languageContext'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useState, useEffect } from 'react'

const HomePage = () => {
  const { language } = useContext(languageContext)
  return (
    <>
      <MainLayout>
        <h1>HomePage</h1>
        <p>
          Find me in <code>./web/src/pages/HomePage/HomePage.js</code>
        </p>
        <p>
          My default route is named <code>home</code>, link to me with `
          <Link to={routes.home()}>Home</Link>`
          language is : { language }
        </p>
      </MainLayout>
    </>
  )
}

export default HomePage
