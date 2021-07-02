import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const AnnouncementsLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.announcements()} className="rw-link">
            Announcements
          </Link>
        </h1>
        <Link
          to={routes.newAnnouncement()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Announcement
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default AnnouncementsLayout
