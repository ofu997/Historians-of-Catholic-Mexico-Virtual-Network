import Users from 'src/components/User/Users'
import Spinner from 'react-bootstrap/Spinner'

export const QUERY = gql`
  query FindSearchResultQuery($entry: String) {
    searchResult: search(entry: $entry) {
      id
      name
      email
      status
      university
      location
      credentials
      focusByTopic
      focusByEra
    }
  }
`

export const Loading = () =>
  <div className='spinner cntr-h'>
    <Spinner animation="border" variant="success" />
  </div>

export const Empty = () => <h1>&#x2715;</h1>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ searchResult }) => {
  return <Users users={searchResult} />
}
