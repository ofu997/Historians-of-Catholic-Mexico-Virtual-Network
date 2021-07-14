import { useQuery, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/User/UsersCell'
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

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const UsersList = ({ users }) => {
  const currentUser = getLoggedInUser();
  const currentUserId = currentUser.id;

  const { error:useQueryError, data } = currentUserId ?
  useQuery(USER_QUERY, {
    variables: { currentUserId }
  })
  :
  dummyObject;

  const [deleteUser] = useMutation(DELETE_USER_MUTATION, {
    onCompleted: () => {
      toast.success('User deleted')
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete user ' + id + '?')) {
      deleteUser({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>Name</th>
            <th>Password</th>
            <th>Is admin</th>
            <th>Jwt</th>
            <th>Local session password</th>
            <th>Prefer spanish</th>
            <th>Bio</th>
            <th>Location</th>
            <th>University</th>
            <th>Credentials</th>
            <th>Status</th>
            <th>Profile pic url</th>
            <th>Link academia</th>
            <th>Link twitter</th>
            <th>Link linked in</th>
            <th>Other media</th>
            <th>Pub1</th>
            <th>Pub1desc</th>
            <th>Pub2</th>
            <th>Pub2desc</th>
            <th>Pub3</th>
            <th>Pub3desc</th>
            <th>Pub4</th>
            <th>Pub4desc</th>
            <th>Focus by topic</th>
            <th>Focus by era</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{truncate(user.id)}</td>
              <td>{truncate(user.email)}</td>
              <td>{truncate(user.name)}</td>
              <td>{truncate(user.password)}</td>
              <td>{checkboxInputTag(user.isAdmin)}</td>
              <td>{truncate(user.jwt)}</td>
              <td>{truncate(user.localSessionPassword)}</td>
              <td>{checkboxInputTag(user.preferSpanish)}</td>
              <td>{truncate(user.bio)}</td>
              <td>{truncate(user.location)}</td>
              <td>{truncate(user.university)}</td>
              <td>{truncate(user.credentials)}</td>
              <td>{truncate(user.status)}</td>
              <td>{truncate(user.profilePicUrl)}</td>
              <td>{truncate(user.linkAcademia)}</td>
              <td>{truncate(user.linkTwitter)}</td>
              <td>{truncate(user.linkLinkedIn)}</td>
              <td>{truncate(user.otherMedia)}</td>
              <td>{truncate(user.pub1)}</td>
              <td>{truncate(user.pub1desc)}</td>
              <td>{truncate(user.pub2)}</td>
              <td>{truncate(user.pub2desc)}</td>
              <td>{truncate(user.pub3)}</td>
              <td>{truncate(user.pub3desc)}</td>
              <td>{truncate(user.pub4)}</td>
              <td>{truncate(user.pub4desc)}</td>
              <td>{truncate(user.focusByTopic)}</td>
              <td>{truncate(user.focusByEra)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.user({ id: user.id })}
                    title={'Show user ' + user.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  {user?.localSessionPassword === currentUser?.localSessionPassword && (
                    <>
                      <Link
                        to={routes.editUser({ id: user.id })}
                        title={'Edit user ' + user.id}
                        className="rw-button rw-button-small rw-button-blue"
                      >
                        Edit
                      </Link>
                    </>
                  )}
                  {((data?.user.localSessionPassword === currentUser.localSessionPassword) && data?.user.isAdmin ) && (
                      <a
                        href="#"
                        title={'Delete user ' + user.id}
                        className="rw-button rw-button-small rw-button-red"
                        onClick={() => onDeleteClick(user.id)}
                      >
                        Delete
                      </a>
                    )
                  }
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UsersList
