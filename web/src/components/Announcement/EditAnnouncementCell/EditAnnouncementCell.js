import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import AnnouncementForm from 'src/components/Announcement/AnnouncementForm'

export const QUERY = gql`
  query FindAnnouncementById($id: Int!) {
    announcement: announcement(id: $id) {
      id
      headline
      subheadline
      date
    }
  }
`
const UPDATE_ANNOUNCEMENT_MUTATION = gql`
  mutation UpdateAnnouncementMutation(
    $id: Int!
    $input: UpdateAnnouncementInput!
  ) {
    updateAnnouncement(id: $id, input: $input) {
      id
      headline
      subheadline
      date
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

  return (
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
          loading={loading}
        />
      </div>
    </div>
  )
}
