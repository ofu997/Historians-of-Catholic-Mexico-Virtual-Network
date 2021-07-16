import { useQuery, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import NewUserForm from 'src/components/User/NewUserForm'
import {getLoggedInUser} from 'src/functions/GetLoggedInUser'
import USER_QUERY from 'src/graphql-helpers/userquery'
import dummyObject from 'src/graphql-helpers/dummyobject'

const CREATE_USER_MUTATION = gql`
  mutation CreateUserMutation($input: CreateUserInput!) {
    createUser(input: $input) {
      id
    }
  }
`

const NewUser = () => {
  const [createUser, { loading, error }] = useMutation(CREATE_USER_MUTATION, {
    onCompleted: () => {
      toast.success('User created')
      navigate(routes.profiles())
    },
  })


const currentUser = getLoggedInUser();
const currentUserId = currentUser.id;

const { error:useQueryError, data } = currentUserId ?
  useQuery(USER_QUERY, {
    variables: { currentUserId }
  })
  :
  dummyObject;

  const onSave = (input) => {
    createUser({ variables: { input } })
  }

  return (
    ((currentUser.localSessionPassword === data?.user.localSessionPassword) && data?.user.isAdmin) ? (
    <div className="rw-segment">
      <p>{useQueryError}</p>
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New User</h2>
      </header>
      <div className="rw-segment-main">
        <NewUserForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
    )
    :
    (
      <h2>Invalid Credentials</h2>
    )
  )
}

export default NewUser
