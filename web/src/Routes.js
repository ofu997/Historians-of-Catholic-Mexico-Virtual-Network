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
import { useState } from 'react'

const Routes = () => {
  const [language, setLanguage] = useState('EN')

  return (
    <Router>
      <languageContext.Provider value={{ language, setLanguage }}>
        <Route path="/" page={HomePage} name="home" />
        <Route notfound page={NotFoundPage} />
      </languageContext.Provider>
    </Router>
  )
}

export default Routes
