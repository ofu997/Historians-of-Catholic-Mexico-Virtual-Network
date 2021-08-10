import { Link, routes } from '@redwoodjs/router'
import Announcements from 'src/components/Announcement/Announcements'
import Spinner from 'react-bootstrap/Spinner'

export const QUERY = gql`
  query ANNOUNCEMENTS {
    announcements {
      id
      englishHeadline
      spanishHeadline
      englishSubheadline
      spanishSubheadline
      date
      spanishDate
      important
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
      {/* {'No announcements yet. '}
      <Link to={routes.newAnnouncement()} className="rw-link">
        {'Create one?'}
      </Link> */}
      <h1 style={{fontSize:'48px'}}>
        <span style={{color:'red'}}>.</span><span style={{color:'blue'}}>.</span><span style={{color:'green'}}>.</span>
      </h1>
    </div>
  )
}

export const Success = ({ announcements }) => {
  return <Announcements announcements={announcements} />
}
