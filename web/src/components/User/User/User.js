import { useQuery, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'
import {getLoggedInUser} from 'src/functions/GetLoggedInUser'
import USER_QUERY from 'src/graphql-helpers/userquery'
import dummyObject from 'src/graphql-helpers/dummyobject'

const DELETE_USER_MUTATION = gql`
  mutation DeleteUserMutation($id: Int!) {
    deleteUser(id: $id) {
      id
    }
  }
`

const User = ({ user }) => {
  const [deleteUser] = useMutation(DELETE_USER_MUTATION, {
    onCompleted: () => {
      toast.success('User deleted')
      navigate(routes.profiles())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete user ' + id + '?')) {
      deleteUser({ variables: { id } })
    }
  }

  // query the user being displayed instead of currentUser
  const { error, data } = user.id ?
    useQuery(USER_QUERY, {
      variables: { currentUserId : user.id }
    })
    :
    dummyObject;

  const currentUser = getLoggedInUser();
  // preferSpanish is priority. English is set if sessionStorage language key is English
  // or if there is no key at all
  const language = currentUser.preferSpanish ? 'Spanish' : sessionStorage.getItem('language') || 'English';
  const isSpanish = Boolean(language==='Spanish' ? true : false)

  return (
    <>
      <div id='user-component'>
        <h1>{error}</h1>
        <h3 className="rw-heading cntr-h">
          {user.name}
        </h3>
        {user.profilePicUrl && (
          <div id='img-container'>
            <img src={user.profilePicUrl} width='400' height='400' />
          </div>
        )}
        <table id='primary-profile-table' className="rw-table-profile">
          <tbody>
            {user.bio && (
              <tr>
                <th>Bio</th>
                <td>{user.bio}</td>
              </tr>
            )}

            {user.status && (
              <tr>
                <th>{isSpanish?`Estado`:`Status`}</th>
                <td>{user.status}</td>
              </tr>
            )}
            {user.university && (
              <tr>
                <th>{isSpanish?<span>Universidad o afiliaci&oacute;n</span>:<span>University or affiliation</span>}</th>
                <td>{user.university}</td>
              </tr>
            )}
            {user.credentials && (
              <tr>
                <th>{isSpanish?`Credenciales`:`Credentials`}</th>
                <td>{user.credentials}</td>
              </tr>
            )}
            {user.focusByTopic && (
              <tr>
                <th>{isSpanish?<span>&Aacute;reas de concentraci&oacute;n</span>:<span>Focus by topic</span>}</th>
                <td>{user.focusByTopic}</td>
              </tr>
            )}
            {user.focusByEra && (
              <tr>
                <th>{isSpanish?<span>Eras de concentraci&oacute;n</span>:<span>Focus by era</span>}</th>
                <td>{user.focusByEra}</td>
              </tr>
            )}
          </tbody>
        </table>

        {user.pub1 && (
          <h4 className="rw-heading cntr-h">{isSpanish?`Publicaciones`:`Publications`}</h4>
        )}
        <table className="rw-table-profile">
          <tbody>
            {user.pub1 && (
              <>
                <tr>
                  <td>{user.pub1}</td>
                </tr>
                {user.pub1desc && (
                  <tr>
                    <td>{isSpanish?<span>Descripci&oacute;n/v&iacute;nculo</span>:<span>Description/link</span>}: {user.pub1desc}</td>
                  </tr>
                )}
                <hr />
              </>
            )}
            {user.pub2 && (
              <>
                <tr>
                  <td>{user.pub2}</td>
                </tr>
                {user.pub2desc && (
                <tr>
                  <td>{isSpanish?<span>Descripci&oacute;n/v&iacute;nculo</span>:<span>Description/link</span>}: {user.pub2desc}</td>
                </tr>
                )}
                <hr />
              </>
            )}
            {user.pub3 && (
              <>
                <tr>
                  <td>{user.pub3}</td>
                </tr>
                {user.pub3desc && (
                <tr>
                  <td>{isSpanish?<span>Descripci&oacute;n/v&iacute;nculo</span>:<span>Description/link</span>}: {user.pub3desc}</td>
                </tr>
                )}
                <hr />
              </>
            )}
            {user.pub4 && (
              <>
                <tr>
                  <td>{user.pub4}</td>
                </tr>
                {user.pub4desc && (
                <tr>
                  <td>{isSpanish?<span>Descripci&oacut;en/v&iacute;nculo</span>:<span>Description/link</span>}: {user.pub4desc}</td>
                </tr>
                )}
                <hr />
              </>
            )}
          </tbody>
        </table>

        <h4 className="rw-heading cntr-h">{isSpanish?`Contacto`:`Contact`}</h4>
        <section id='user-social-media'>
          <p><a href={`mailto:${user.email}`}>{user.email}</a></p>
          {user.linkAcademia && (
            <p><a href={user.linkAcademia} target='_blank' rel="noopener noreferrer">Academia.edu</a></p>
          )}
          {user.linkTwitter && (
          <p><a href={user.linkTwitter} target='_blank' rel="noopener noreferrer">Twitter</a></p>
          )}
          {user.linkLinkedIn && (
          <p><a href={user.linkLinkedIn} target='_blank' rel="noopener noreferrer">LinkedIn</a></p>
          )}
          {user.otherMedia && (
          <p><a href={user.otherMedia} target='_blank' rel="noopener noreferrer">{user.otherMedia}</a></p>
          )}
        </section>
      </div>

      <nav className="rw-button-group">
      {// currentUser owns displayed user
      (currentUser.localSessionPassword === data.user.localSessionPassword) && (
        <Link
          to={routes.editProfile({ id: user.id })}
          className="rw-button rw-button-blue"
        >
          {isSpanish?`Editar`:`Edit`}
        </Link>
      )}
      </nav>
    </>
  )
}

export default User
