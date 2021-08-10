import Announcements from 'src/components/Announcement/Announcements'

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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div></div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ importantAnnouncements }) => {
  return (
    <Announcements announcements={importantAnnouncements} />
  )
}
