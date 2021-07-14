import { useQuery, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Announcement/AnnouncementsCell'
import {getLoggedInUser} from 'src/functions/GetLoggedInUser'
import USER_QUERY from 'src/graphql-helpers/userquery'
import dummyObject from 'src/graphql-helpers/dummyobject'

const DELETE_ANNOUNCEMENT_MUTATION = gql`
  mutation DeleteAnnouncementMutation($id: Int!) {
    deleteAnnouncement(id: $id) {
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

const AnnouncementsList = ({ announcements }) => {


  return (
<div>
        {announcements.map((announcement) => (
          <AnnouncementBox announcement={announcement} key={announcement.id} />
        ))}
</div>
  )
}

const AnnouncementBox = ( {announcement} ) => {
  const [deleteAnnouncement] = useMutation(DELETE_ANNOUNCEMENT_MUTATION, {
    onCompleted: () => {
      toast.success('Announcement deleted')
    },
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete announcement ' + id + '?')) {
      deleteAnnouncement({ variables: { id } })
    }
  }
  const currentUser = getLoggedInUser();
  const currentUserId = currentUser.id;

  const { error:useQueryError, data } = currentUserId ?
    useQuery(USER_QUERY, {
      variables: { currentUserId }
    })
    :
    dummyObject;

  return (
    <section id='announcement-box' style={{ minWidth: '400px', width: '60%', borderBottom: '1px solid black', margin: '0px auto 250px auto' }}>
      <p>{useQueryError}</p>
      <h1>{announcement.englishHeadline}</h1>
      <h1>{announcement.spanishHeadline}</h1>
      <h1>{announcement.englishSubheadline}</h1>
      <h1>{announcement.spanishSubheadline}</h1>
      <p>{announcement.date}</p>
      {( (currentUser.localSessionPassword === data?.user.localSessionPassword) && data?.user.isAdmin ) && (
      <>
      <Link
        to={routes.editAnnouncement({ id: announcement.id })}
        title={'Edit announcement ' + announcement.id}
        className="rw-button rw-button-small rw-button-blue"
      >
        Edit
      </Link>
      <a
        href="#"
        title={'Delete announcement ' + announcement.id}
        className="rw-button rw-button-small rw-button-red"
        onClick={() => onDeleteClick(announcement.id)}
      >
        Delete
      </a>
      </>
      )}
    </section>
  )
}


export default AnnouncementsList


            {/* <tr key={announcement.id}>
              <td>{truncate(announcement.id)}</td>
              <td>{truncate(announcement.englishHeadline)}</td>
              <td>{truncate(announcement.englishSubheadline)}</td>
              <td>{truncate(announcement.date)}</td>
              { ((currentUser.localSessionPassword === data?.user.localSessionPassword) && data?.user.isAdmin) && (
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.announcement({ id: announcement.id })}
                    title={'Show announcement ' + announcement.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editAnnouncement({ id: announcement.id })}
                    title={'Edit announcement ' + announcement.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete announcement ' + announcement.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(announcement.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
              )}
            </tr> */}
