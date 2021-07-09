import { Link, routes } from '@redwoodjs/router'
import NewUser from 'src/components/User/NewUser'

const AdminRegisterUserPage = () => {
  return (
    <>
      <h1>AdminRegisterUserPage</h1>
      <h2>The purpose of this page is to add users to the platform</h2>
      <p>
        Find me in{' '}
        <code>
          ./web/src/pages/AdminRegisterUserPage/AdminRegisterUserPage.js
        </code>
      </p>
      <p>
        My default route is named <code>adminRegisterUser</code>, link to me
        with `<Link to={routes.adminRegisterUser()}>AdminRegisterUser</Link>`
      </p>
      <NewUser />
    </>
  )
}

export default AdminRegisterUserPage
