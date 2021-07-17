import { Link, routes } from '@redwoodjs/router'
import {getLoggedInUser} from 'src/functions/GetLoggedInUser'

const truncate = (text) => {
  let output = text
  if (text && text.length > 150) {
    output = output.substring(0, 150) + '...'
  }
  return output
}

const UsersList = ({ users }) => {
  const currentUser = getLoggedInUser();
  // preferSpanish is priority. English is set if sessionStorage language key is English
  // or if there is no key at all
  const language = currentUser.preferSpanish ? 'Spanish' : sessionStorage.getItem('language') || 'English';
  const isSpanish = Boolean(language==='Spanish' ? true : false)

  return (
  <div id='users-table' className="rw-segment rw-table-wrapper-responsive">
    <table className="rw-table">
      <thead>
        <tr>
          <th id='th-name'>{isSpanish? `Nombre`:`Name`}</th>
          <th>{isSpanish?`Estado`:`Status`}</th>
          <th>{isSpanish?`Universidad`:`University`}</th>
          <th>{isSpanish?<span>Ubicaci&oacute;n</span>:<span>Location</span>}</th>
          <th>{isSpanish?`Credenciales`:`Credentials`}</th>
          <th>{isSpanish?<span>&Aacute;reas de concentraci&oacute;n</span>:<span>Focus by topic</span>}</th>
          <th>{isSpanish?<span>Eras de concentraci&oacute;n</span>:<span>Focus by era</span>}</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <Link
              to={routes.profile({ id: user.id })}
              id='link-for-username'
              className="rw-button-profiles rw-button-small"
            >
              <td id='td-username'>{truncate(user.name)}</td>
            </Link>
            <td>{truncate(user.status)}</td>
            <td>{truncate(user.university)}</td>
            <td>{truncate(user.location)}</td>
            <td>{truncate(user.credentials)}</td>
            <td>{truncate(user.focusByTopic)}</td>
            <td>{truncate(user.focusByEra)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}


export default UsersList
