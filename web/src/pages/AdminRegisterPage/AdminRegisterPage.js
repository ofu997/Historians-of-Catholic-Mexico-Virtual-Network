import { Link, routes } from '@redwoodjs/router'
import MainLayout from 'src/layouts/MainLayout/MainLayout'
import { useState } from 'react'
import NewAdmin from 'src/components/User/NewAdmin'
// import { navigate, routes } from '@redwoodjs/router'

const AdminRegisterPage = () => {
  const [language, setLanguage] = useState(sessionStorage.getItem('language')||'English...')
  return (
    <>
      <MainLayout
        language={language} setLanguage={setLanguage}
      >
        <AdminRegisterPageContent />
        <NewAdmin />
      </MainLayout>
    </>
  )
}


const AdminRegisterPageContent = () => {
  return (
    <div>
      <h1>Sole purpose of this page is for admins to register themselves</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/AdminRegisterPage/AdminRegisterPage.js</code>
      </p>
      <p>
        My default route is named <code>adminRegister</code>, link to me with `
        <Link to={routes.adminRegister()}>AdminRegister</Link>`
      </p>
    </div>
  )
}


export default AdminRegisterPage
