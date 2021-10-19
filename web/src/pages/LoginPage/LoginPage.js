import { Link, routes } from '@redwoodjs/router'
import MainLayout from 'src/layouts/MainLayout/MainLayout'
import { useState } from 'react'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'
import { toast } from '@redwoodjs/web/toast'
import { useMutation } from '@redwoodjs/web'
import { navigate } from '@redwoodjs/router'
import {getLoggedInUser} from 'src/functions/GetLoggedInUser'

const LOG_IN_MUTATION = gql`
  mutation LogInMutation($input: LoginInput!) {
    loginUser(input: $input) {
      id
      name
      localSessionPassword
      preferSpanish
    }
  }
`

const LoginPage = () => {
  const [language, setLanguage] = useState(sessionStorage.getItem('language')||'English...')
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('user')||false)

  const currentUser = getLoggedInUser();

  return (
    <>
      <MainLayout
        language={currentUser.preferSpanish ? 'Spanish' : language}
        setLanguage={setLanguage}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        showFooter={false}
      >
        <LoginPageContent />
      </MainLayout>

    </>
  )
}

const LoginPageContent = props => {
  const isSpanish = Boolean(props.language==='Spanish' ? true : false);

  const [loginUser, { loading, error }] = useMutation(LOG_IN_MUTATION, {
    onCompleted: ({ loginUser }) => {
      toast.success('Signed in', { classes: 'rw-flash-success' })

      const user = loginUser;
      sessionStorage.setItem('user', JSON.stringify(user));
      user && navigate(routes.profiles());
    },
    onError: (e) => {
      console.log(e)
    },
    ignoreResults: false,
  })

  const handleLogin = input => {
    loginUser({ variables: { input } })
  }
  return (
    <>
      {props.isLoggedIn ?
        (
          <p><Link to={routes.home()}>Home</Link></p>
        )
        :
        (
          <>
            <div id='login-form-wrapper' className="rw-form-wrapper">
              <Form
                onSubmit={handleLogin}
                // error={error}
                id='login-form'
              >
                <FormError
                  error={error}
                  loading={loading}
                  wrapperClassName="rw-form-error-wrapper"
                  titleClassName="rw-form-error-title"
                  listClassName="rw-form-error-list"
                />
                <Label
                  name="email"
                  className="rw-label"
                  errorClassName="rw-label rw-label-error"
                >
                  {isSpanish ? <span>Correo electr&oacute;nico</span> : <span>Email</span>}
                </Label>
                <TextField
                  name="email"
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
                  {isSpanish? <span>Contrase&ntilde;a</span> : <span>Password</span>}
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
                    {isSpanish? <span>Iniciar sesi&oacute;n</span> : <span>Log in</span>}
                  </Submit>
                </div>
              </Form>
            </div>
          </>
        )
      }
    </>
  )
}

export default LoginPage
