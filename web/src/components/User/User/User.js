import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_USER_MUTATION = gql`
  mutation DeleteUserMutation($id: Int!) {
    deleteUser(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const User = ({ user, language }) => {
  const [deleteUser] = useMutation(DELETE_USER_MUTATION, {
    onCompleted: () => {
      toast.success('User deleted')
      navigate(routes.users())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete user ' + id + '?')) {
      deleteUser({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            User {user.id} Detail
          </h2>
          <h2>{language}</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{user.id}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{user.email}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{user.name}</td>
            </tr>
            <tr>
              <th>Password</th>
              <td>{user.password}</td>
            </tr>
            <tr>
              <th>Is admin</th>
              <td>{checkboxInputTag(user.isAdmin)}</td>
            </tr>
            <tr>
              <th>Jwt</th>
              <td>{user.jwt}</td>
            </tr>
            <tr>
              <th>Local session password</th>
              <td>{user.localSessionPassword}</td>
            </tr>
            <tr>
              <th>Prefer spanish</th>
              <td>{checkboxInputTag(user.preferSpanish)}</td>
            </tr>
            <tr>
              <th>Bio</th>
              <td>{user.bio}</td>
            </tr>
            <tr>
              <th>Location</th>
              <td>{user.location}</td>
            </tr>
            <tr>
              <th>University</th>
              <td>{user.university}</td>
            </tr>
            <tr>
              <th>Credentials</th>
              <td>{user.credentials}</td>
            </tr>
            <tr>
              <th>Status</th>
              <td>{user.status}</td>
            </tr>
            <tr>
              <th>Profile pic url</th>
              <td>{user.profilePicUrl}</td>
            </tr>
            <tr>
              <th>Link academia</th>
              <td>{user.linkAcademia}</td>
            </tr>
            <tr>
              <th>Link twitter</th>
              <td>{user.linkTwitter}</td>
            </tr>
            <tr>
              <th>Link linked in</th>
              <td>{user.linkLinkedIn}</td>
            </tr>
            <tr>
              <th>Other media</th>
              <td>{user.otherMedia}</td>
            </tr>
            <tr>
              <th>Pub1</th>
              <td>{user.pub1}</td>
            </tr>
            <tr>
              <th>Pub1desc</th>
              <td>{user.pub1desc}</td>
            </tr>
            <tr>
              <th>Pub2</th>
              <td>{user.pub2}</td>
            </tr>
            <tr>
              <th>Pub2desc</th>
              <td>{user.pub2desc}</td>
            </tr>
            <tr>
              <th>Pub3</th>
              <td>{user.pub3}</td>
            </tr>
            <tr>
              <th>Pub3desc</th>
              <td>{user.pub3desc}</td>
            </tr>
            <tr>
              <th>Pub4</th>
              <td>{user.pub4}</td>
            </tr>
            <tr>
              <th>Pub4desc</th>
              <td>{user.pub4desc}</td>
            </tr>
            <tr>
              <th>Focus by topic</th>
              <td>{user.focusByTopic}</td>
            </tr>
            <tr>
              <th>Focus by era</th>
              <td>{user.focusByEra}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editUser({ id: user.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(user.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default User
