import Announcement from 'src/components/Announcement/Announcement'

export const QUERY = gql`
  query FindAnnouncementById($id: Int!) {
    announcement: announcement(id: $id) {
      id
      englishHeadline
      spanishHeadline
      englishSubheadline
      spanishSubheadline
      date
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Announcement not found</div>

export const Success = ({ announcement }) => {
  return <Announcement announcement={announcement} />
}
