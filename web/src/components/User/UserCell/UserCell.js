import User from 'src/components/User/User'
import {getLoggedInUser} from 'src/functions/GetLoggedInUser'

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
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>User not found</div>

export const Success = ({ user }) => {
  const currentUser = getLoggedInUser();
  const language = sessionStorage.getItem('language')||'English';
  // preferSpanish is priority. || operator needed in case language is set
  // with dropdown. English is set if sessionStorage language key is English
  // or if there is no key at all
  const getLanguage = currentUser.preferSpanish || language === 'Spanish' ? 'Spanish' : 'English';

  return <User user={user} language={getLanguage} />
}
