import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_ANNOUNCEMENT_MUTATION = gql`
  mutation DeleteAnnouncementMutation($id: Int!) {
    deleteAnnouncement(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
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

const Announcement = ({ announcement }) => {
  const [deleteAnnouncement] = useMutation(DELETE_ANNOUNCEMENT_MUTATION, {
    onCompleted: () => {
      toast.success('Announcement deleted')
      navigate(routes.announcements())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete announcement ' + id + '?')) {
      deleteAnnouncement({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Announcement {announcement.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{announcement.id}</td>
            </tr>
            <tr>
              <th>Headline</th>
              <td>{announcement.headline}</td>
            </tr>
            <tr>
              <th>Subheadline</th>
              <td>{announcement.subheadline}</td>
            </tr>
            <tr>
              <th>Date</th>
              <td>{announcement.date}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editAnnouncement({ id: announcement.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(announcement.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Announcement
