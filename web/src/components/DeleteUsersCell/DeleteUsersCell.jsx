import DeleteUsers from 'src/components/User/DeleteUsers'

export const QUERY = gql`
  query DeleteUsersQuery {
    deleteUsers: users {
      id
      name
      email
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ deleteUsers }) => {
  return (
    <DeleteUsers users={deleteUsers} />
  )
}
