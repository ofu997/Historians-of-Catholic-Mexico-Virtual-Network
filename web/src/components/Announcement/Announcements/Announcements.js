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

const AnnouncementsList = ({ announcements }) =>
  <div>
    {announcements.map((announcement) => (
      <AnnouncementBox announcement={announcement} key={announcement.id} />
    ))}
  </div>

const AnnouncementBox = ( {announcement} ) => {
  const currentUser = getLoggedInUser();
  const language = currentUser.preferSpanish ? 'Spanish' : sessionStorage.getItem('language') || 'English';
  const isSpanish = Boolean(language==='Spanish' ? true : false)

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

  const currentUserId = currentUser.id;

  const { error:useQueryError, data } = currentUserId ?
    useQuery(USER_QUERY, {
      variables: { currentUserId }
    })
    :
    dummyObject;

  return (
    <section id='announcement-box'>
      <p>{useQueryError}</p>
      <h1>{isSpanish?announcement.spanishHeadline:announcement.englishHeadline}</h1>
      <h2>{isSpanish?announcement.spanishSubheadline:announcement.englishSubheadline}</h2>
      <p>{isSpanish?announcement.spanishDate:announcement.date}</p>
      {( (currentUser.localSessionPassword === data?.user.localSessionPassword) && data?.user.isAdmin ) && (
      <>
      <Link
        to={routes.editAnnouncement({ id: announcement.id })}
        title={'Edit announcement ' + announcement.id}
        className="rw-button rw-button-blue home-page-buttons cntr-h"
      >
        Edit
      </Link>
      <a
        href="/"
        title={'Delete announcement ' + announcement.id}
        className="rw-button rw-button-red home-page-buttons cntr-h"
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
