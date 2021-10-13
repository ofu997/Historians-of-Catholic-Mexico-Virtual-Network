import { Link, routes } from '@redwoodjs/router'
import {getLoggedInUser} from 'src/functions/GetLoggedInUser'

const truncate = (text) => {
  let output = text
  if (text && text.length > 150) {
    output = output.substring(0, 150) + '...'
  }
  return output
}

const UsersList = props => {
  const currentUser = getLoggedInUser();
  // preferSpanish is priority. English is set if sessionStorage language key is English
  // or if there is no key at all
  const language = currentUser.preferSpanish ? 'Spanish' : sessionStorage.getItem('language') || 'English';
  const isSpanish = Boolean(language==='Spanish' ? true : false)

  const users = props.users.filter(user => user.email != 'trees73@gmail.com')

  return (
    <>
      <div id='users-table' className="rw-segment rw-table-wrapper-responsive">
        <table className="rw-table">
          <thead>
            <tr>
              <th id='th-name'>{isSpanish? `Nombre`:`Name`}</th>
              <th>{isSpanish?`Estado`:`Status`}</th>
              <th>{isSpanish?`Universidad`:`University`}</th>
              <th>{isSpanish?<span>Ubicaci&oacute;n</span>:<span>Location</span>}</th>
              <th>{isSpanish?`Credenciales`:`Credentials`}</th>
              <th>{isSpanish?`Temas de enfoque`:`Focus by topic`}</th>
              <th>{isSpanish?`Eras de enfoque`:`Focus by era`}</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) =>
              <tr key={user.id}>
                <td id='td-username'>
                  <Link
                    to={routes.profile({ id: user.id })}
                    id='link-for-username'
                    className="rw-button-profiles rw-button-small"
                  >
                    {truncate(user.name)}
                  </Link>
                </td>
                <td>{truncate(user.status)}</td>
                <td>{truncate(user.university)}</td>
                <td>{truncate(user.location)}</td>
                <td>{truncate(user.credentials)}</td>
                <td>{truncate(user.focusByTopic)}</td>
                <td>{truncate(user.focusByEra)}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default UsersList
