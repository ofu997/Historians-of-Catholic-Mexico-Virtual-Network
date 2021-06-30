// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'
import languageContext from './languageContext'
import { useState, useContext } from 'react'

const Routes = () => {
  const [language, setLanguage] = useState('hello')
  // const { language, setLanguage } = useContext(languageContext)

  return (
    <Router>
      <languageContext.Provider value={{ language, setLanguage }}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/profiles" page={ProfilesPage} name="profiles" />
        <Route notfound page={NotFoundPage} />
      </languageContext.Provider>
    </Router>
  )
}

export default Routes
