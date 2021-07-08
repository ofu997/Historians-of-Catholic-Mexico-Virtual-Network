import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import AdminForm from 'src/components/User/AdminForm'

const CREATE_ADMIN_MUTATION = gql`
  mutation CreateAdminMutation($input: CreateUserInput!) {
    createAdmin(input: $input) {
      id
    }
  }
`

const NewAdmin = () => {
  const [createAdmin, { loading, error }] = useMutation(CREATE_ADMIN_MUTATION, {
    onCompleted: () => {
      toast.success('User created')
      navigate(routes.users())
    },
  })

  const onSave = (input) => {
    createAdmin({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Admin</h2>
      </header>
      <div className="rw-segment-main">
        <AdminForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewAdmin
