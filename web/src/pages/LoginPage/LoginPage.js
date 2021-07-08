import { Link, routes } from '@redwoodjs/router'
import MainLayout from 'src/layouts/MainLayout/MainLayout'
import { useState } from 'react'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'
import { toast } from '@redwoodjs/web/toast'
import { useMutation } from '@redwoodjs/web'
import { navigate } from '@redwoodjs/router'

const LOG_IN_MUTATION = gql`
  mutation LogInMutation($input: LoginInput!) {
    loginUser(input: $input) {
      id
      name
      localSessionPassword
    }
  }
`

const LoginPage = () => {
  const [language, setLanguage] = useState(sessionStorage.getItem('language')||'English...')
  return (
    <>
      <MainLayout
        language={language} setLanguage={setLanguage}
      >
        <LoginPageContent />
      </MainLayout>

    </>
  )
}

const LoginPageContent = props => {

  const [loginUser, { loading, error }] = useMutation(LOG_IN_MUTATION, {
    onCompleted: ({ loginUser }) => {
      toast.success('Signed in', { classes: 'rw-flash-success' })

      const { id, name, localSessionPassword } = loginUser;
      const user = { id, name, localSessionPassword }
      sessionStorage.setItem('user', JSON.stringify(user));
      setTimeout(() => {
        navigate(routes.profiles())
      }, 50)
    },
    onError: (e) => {
      console.log(e)
    },
    ignoreResults: false,
  })

  const handleLogin = input => {
    console.table(input)
    loginUser({ variables: { input } })
  }
  return (
    <>
      <h1>LoginPage</h1>
      <p>
        Find me in <code>./web/src/pages/LoginPage/LoginPage.js</code>
      </p>
      <p>
        My default route is named <code>login</code>, link to me with `
        <Link to={routes.login()}>Login</Link>`
      </p>
      <div className="rw-form-wrapper">
        <Form onSubmit={handleLogin} error={error}>
          <FormError
            error={error}
            wrapperClassName="rw-form-error-wrapper"
            titleClassName="rw-form-error-title"
            listClassName="rw-form-error-list"
          />

          <Label
            name="email"
            className="rw-label"
            errorClassName="rw-label rw-label-error"
          >
            Email
          </Label>
          <TextField
            name="email"
            // defaultValue={props.user?.email}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
          <FieldError name="email" className="rw-field-error" />



          <Label
            name="password"
            className="rw-label"
            errorClassName="rw-label rw-label-error"
          >
            Password
          </Label>
          <TextField
            name="password"
            defaultValue={props.user?.password}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
          <FieldError name="password" className="rw-field-error" />
          <div className="rw-button-group">
            <Submit disabled={loading} className="rw-button rw-button-blue">
              Log in
            </Submit>
          </div>
        </Form>
      </div>
    </>
  )
}

export default LoginPage
