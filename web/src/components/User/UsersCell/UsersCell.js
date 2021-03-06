import { Link, routes } from '@redwoodjs/router'
import Users from 'src/components/User/Users'
import Spinner from 'react-bootstrap/Spinner'

export const QUERY = gql`
  query USERS {
    users {
      id
      name
      location
      university
      credentials
      status
      focusByTopic
      focusByEra
    }
  }
`

export const Loading = () =>
  <div className='spinner cntr-h'>
    <Spinner animation="border" variant="success" />
  </div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No users yet. '}
      <Link to={routes.adminRegisterUser()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ users }) => {
  return <Users users={users} />
}
