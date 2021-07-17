import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import EditUserForm from 'src/components/User/EditUserForm'
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
const UPDATE_USER_MUTATION = gql`
  mutation UpdateUserMutation($id: Int!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
      preferSpanish
    }
  }
`

export const Loading = () => <div>Loading...</div>

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
      {/* <header className="rw-segment-header">
       <h2 className="rw-heading rw-heading-secondary">Edit User {user.id}</h2>
      </header> */}
      <div className="rw-segment-main">
        <EditUserForm user={user} onSave={onSave} error={error} loading={loading} language={language} />
      </div>
    </div>
  )
}
