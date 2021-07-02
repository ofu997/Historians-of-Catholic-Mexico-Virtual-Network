import { Link, routes } from '@redwoodjs/router'

import Announcements from 'src/components/Announcement/Announcements'

export const QUERY = gql`
  query ANNOUNCEMENTS {
    announcements {
      id
      headline
      subheadline
      date
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No announcements yet. '}
      <Link to={routes.newAnnouncement()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ announcements }) => {
  return <Announcements announcements={announcements} />
}
