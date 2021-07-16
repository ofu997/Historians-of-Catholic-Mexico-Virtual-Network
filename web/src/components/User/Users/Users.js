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
    <div id='users-table' className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th id='th-name'>Name</th>
            <th>Email</th>
            <th>University</th>
            <th>Credentials</th>
            <th>Focus by topic</th>
            <th>Focus by era</th>
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
              <td>{truncate(user.email)}</td>
              <td>{truncate(user.university)}</td>
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
