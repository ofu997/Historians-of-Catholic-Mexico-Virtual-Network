import { Link, routes } from '@redwoodjs/router'

const ProfilesPage = () => {
  return (
    <>
      <h1>ProfilesPage</h1>
      <p>
        Find me in <code>./web/src/pages/ProfilesPage/ProfilesPage.js</code>
      </p>
      <p>
        My default route is named <code>profiles</code>, link to me with `
        <Link to={routes.profiles()}>Profiles</Link>`
      </p>
    </>
  )
}

export default ProfilesPage
