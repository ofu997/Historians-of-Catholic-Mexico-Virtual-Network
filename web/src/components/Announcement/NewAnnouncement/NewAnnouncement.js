import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import AnnouncementForm from 'src/components/Announcement/AnnouncementForm'

const CREATE_ANNOUNCEMENT_MUTATION = gql`
  mutation CreateAnnouncementMutation($input: CreateAnnouncementInput!) {
    createAnnouncement(input: $input) {
      id
    }
  }
`

const NewAnnouncement = () => {
  const [createAnnouncement, { loading, error }] = useMutation(
    CREATE_ANNOUNCEMENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Announcement created')
        navigate(routes.announcements())
      },
    }
  )

  const onSave = (input) => {
    createAnnouncement({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Announcement</h2>
      </header>
      <div className="rw-segment-main">
        <AnnouncementForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewAnnouncement
