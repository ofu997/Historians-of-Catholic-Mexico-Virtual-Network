import { useQuery, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import AnnouncementForm from 'src/components/Announcement/AnnouncementForm'
import {getLoggedInUser} from 'src/functions/GetLoggedInUser'
import USER_QUERY from 'src/graphql-helpers/userquery'
import dummyObject from 'src/graphql-helpers/dummyobject'

export const QUERY = gql`
  query FindAnnouncementById($id: Int!) {
    announcement: announcement(id: $id) {
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
const UPDATE_ANNOUNCEMENT_MUTATION = gql`
  mutation UpdateAnnouncementMutation($id: Int!, $input: UpdateAnnouncementInput!) {
    updateAnnouncement(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ announcement }) => {
  const [updateAnnouncement, { loading, error }] = useMutation(
    UPDATE_ANNOUNCEMENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Announcement updated')
        navigate(routes.announcements())
      },
    }
  )

  const onSave = (input, id) => {
    updateAnnouncement({ variables: { id, input } })
  }

  const currentUser = getLoggedInUser();
  const currentUserId = currentUser.id;

  const { loading:useQueryLoading, error: useQueryError, data } = currentUserId ?
    useQuery(USER_QUERY, {
      variables: { currentUserId }
    })
    :
    dummyObject;

  return (
    ((currentUser.localSessionPassword === data?.user.localSessionPassword) && data?.user.isAdmin) ? (
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Edit Announcement {announcement.id}
          </h2>
        </header>
        <div className="rw-segment-main">
          <AnnouncementForm
            announcement={announcement}
            onSave={onSave}
            error={error}
            useQueryError={useQueryError}
            loading={loading}
            useQueryLoading={useQueryLoading}
          />
        </div>
      </div>
    ) :
    ( <h2>Invalid credentials</h2>)
  )
}
