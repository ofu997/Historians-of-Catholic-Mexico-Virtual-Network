import { useQuery, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, navigate, routes } from '@redwoodjs/router'
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

const DeleteUsers = ({ users }) => {
  const [deleteUser] = useMutation(DELETE_USER_MUTATION, {
    onCompleted: () => {
      toast.success('User deleted')
      navigate(routes.profiles())
    },
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })
  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete user ' + id + '?')) {
      deleteUser({ variables: { id } })
    }
  }

  return (
  <table className="rw-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    {users.map(user =>
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <nav className="rw-table-actions" style={{ margin: '20px 0px' }}>
          <a
            // href='/admin/delete-user'
            title={`Delete user ${user.id}`}
            className="rw-button rw-button-small rw-button-red"
            onClick={() => onDeleteClick(user.id)}
          >
            Delete
          </a>
        </nav>
      </tr>
    )}
    </tbody>
  </table>
  )
}

export default DeleteUsers
