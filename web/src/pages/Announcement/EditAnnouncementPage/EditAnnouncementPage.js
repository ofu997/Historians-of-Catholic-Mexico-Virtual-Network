import EditAnnouncementCell from 'src/components/Announcement/EditAnnouncementCell'
import MainLayout from 'src/layouts/MainLayout/MainLayout';

const EditAnnouncementPage = ({ id }) => {
  return (
    <MainLayout>
      <EditAnnouncementCell id={id} />
    </MainLayout>
  )
}

export default EditAnnouncementPage
