import Announcements from 'src/components/Announcement/Announcements'
import Spinner from 'react-bootstrap/Spinner'

export const QUERY = gql`
  query ImportantAnnouncementsQuery {
    importantAnnouncements {
      id
      englishHeadline
      englishSubheadline
      date
      spanishHeadline
      spanishSubheadline
      spanishDate
    }
  }
`

export const Loading = () =>
  <div className='spinner cntr-h'>
    <Spinner animation="border" variant="success" />
  </div>

export const Empty = () => <div></div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ importantAnnouncements }) => {
  return (
    <Announcements announcements={importantAnnouncements} />
  )
}
