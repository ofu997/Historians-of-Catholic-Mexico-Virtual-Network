import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import EditUserForm from 'src/components/User/EditUserForm'
import {getLoggedInUser} from 'src/functions/GetLoggedInUser'
import Spinner from 'react-bootstrap/Spinner'

export const QUERY = gql`
  query FindUserByIdForEditing($id: Int!) {
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
      tagDevotions
      tagClergy
      tagLiturgy
    }
  }
`
const UPDATE_USER_MUTATION = gql`
  mutation UpdateUserMutation($id: Int!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
      preferSpanish
    }
  }
`

export const Loading = () =>
  <div className='spinner cntr-h'>
    <Spinner animation="border" variant="success" />
  </div>

export const Success = ({ user }) => {
  const currentUser = getLoggedInUser();

  const language = currentUser.preferSpanish ? 'Spanish' : sessionStorage.getItem('language') || 'English';

  const [updateUser, { loading, error }] = useMutation(UPDATE_USER_MUTATION, {
    onCompleted: ({ updateUser }) => {
      toast.success('User updated')
      const languageOnCompleted = updateUser.preferSpanish ? 'Spanish' : 'English'
      sessionStorage.setItem('language', languageOnCompleted)
      navigate(routes.profile({ id: updateUser.id }))
    },
  })

  const onSave = (input, id) => {
    updateUser({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <div className="rw-segment-main">
        <EditUserForm user={user} onSave={onSave} error={error} loading={loading} language={language} />
      </div>
    </div>
  )
}
