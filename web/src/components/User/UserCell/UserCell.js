import User from 'src/components/User/User'
import Spinner from 'react-bootstrap/Spinner'

export const QUERY = gql`
  query FindUserById($id: Int!) {
    user: user(id: $id) {
      id
      email
      name
      password
      isAdmin
      jwt
      localSessionPassword
      preferSpanish
      bio
      location
      university
      credentials
      status
      profilePicUrl
      linkAcademia
      linkTwitter
      linkLinkedIn
      otherMedia
      pub1
      pub1desc
      pub2
      pub2desc
      pub3
      pub3desc
      pub4
      pub4desc
      focusByTopic
      focusByEra
      tagChurchStateRels
      tagCathGender
      tagRightLeftWing
      tagViolenceMilitancyMartyrdom
      tagCathYouthStudentGroups
      tagNationalism
      tagMigrations
      tagModernitySecSciences
      tagPressLitIntelHist
      tagMusArts
      tagVisCulture
      tagTransIntlHist
      tagLocRegHist
      tagOralHist
      tagRaceRacism
    }
  }
`

export const Loading = () =>
  <div className='spinner cntr-h'>
    <Spinner animation="border" variant="success" />
  </div>

export const Empty = () => <div>User not found</div>

export const Success = ({ user }) => {
  return <User user={user}
  />
}
