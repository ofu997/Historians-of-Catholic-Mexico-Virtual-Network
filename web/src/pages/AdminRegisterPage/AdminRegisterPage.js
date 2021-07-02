import { Link, routes } from '@redwoodjs/router'

const AdminRegisterPage = () => {
  return (
    <>
      <h1>AdminRegisterPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/AdminRegisterPage/AdminRegisterPage.js</code>
      </p>
      <p>
        My default route is named <code>adminRegister</code>, link to me with `
        <Link to={routes.adminRegister()}>AdminRegister</Link>`
      </p>
    </>
  )
}

export default AdminRegisterPage
