import Users from 'src/components/User/Users'
import Spinner from 'react-bootstrap/Spinner'

export const QUERY = gql`
  query TaggedUser($tag: String) {
    users: findUsersByTag(tag: $tag) {
      id
      email
      name
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

export const Empty = () => <h1>&#x2715;</h1>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ users, tag}) => {
  return (
    <Users
      users={users}
      tag={tag}
    />
  )
}
