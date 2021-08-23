import
{
  Navbar,
  Nav,
  NavDropdown,
  Container
} from 'react-bootstrap';
import { navigate, routes } from '@redwoodjs/router'
import logo from '../../../public/histcatmex-logo.png'
import { toast } from '@redwoodjs/web/toast'
import { getLoggedInUser } from 'src/functions/GetLoggedInUser'
import { useMutation } from '@redwoodjs/web'

const LOG_OUT_MUTATION = gql`
mutation LogOutMutation($id: Int!) {
  logoutUser(id: $id) {
    id
  }
}
`

const Header = props => {
  const sessionStorageUser = getLoggedInUser()
  const isSpanish = Boolean(props.language === 'Spanish');

  const [logoutUser, { loading, error }] = useMutation(LOG_OUT_MUTATION, {
    onCompleted: () => {
      toast.success('Logged out', { classes: 'rw-flash-success',  position: 'bottom-center', })

      sessionStorage.removeItem('user');
      setTimeout(() => {
        navigate(routes.home())
      }, 200)
    },
    onError: (e) => {
      console.log(e)
    },
    ignoreResults: false,
  })

  return(
    <>
      <Container>
      <Navbar id='Navbar' className="header-custom" bg='white' variant='light' expand="md" collapseOnSelect
      >
        <a href="/">
          <div
            style={{ backgroundColor: '#ffffff' }}
          >
            <img src={logo} width='120' height='120' />
          </div>
        </a>
        <Navbar.Brand href="/">{ isSpanish ? <h3 className='branding-font'>Historiadores del Catolicismo en M&eacute;xico</h3> : <h3 className='branding-font'>Historians of Catholic Mexico</h3> }</Navbar.Brand>
        <Navbar.Toggle
        // aria-controls="basic-navbar-nav"
        aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav"
        className="justify-content-end "
        >
          <Nav
            className="justify-content-center underline-nav"
            activeKey='/'
            id='nav'
          >
            <Nav.Item className='react-bootstrap-nav'>
              <Nav.Link
                href={routes.about()}
              >
                <p className='nav-item'>{ isSpanish ? `SOBRE NOSOTROS`:`ABOUT` }</p>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className='react-bootstrap-nav'>
              <Nav.Link
                href={routes.profiles()}
              >
                <p className='nav-item'>{ isSpanish ? `PERFILES`:`PROFILES` }</p>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className='react-bootstrap-nav'>
              <Nav.Link
                href={routes.announcements()}
              >
                <p className='nav-item'>{ isSpanish ? `ANUNCIOS`:`ANNOUNCEMENTS` }</p>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <NavDropdown title="LANGUAGE/IDIOMA" id="collapsible-nav-dropdown">
                <NavDropdown.Item
                  onClick={()=>{sessionStorage.setItem('language', 'English'); props.setLanguage('English')}}
                >
                  <p>English</p>
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={()=>{sessionStorage.setItem('language', 'Spanish'); props.setLanguage('Spanish')}}
                >
                  <p>espa&ntilde;ol</p>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav.Item>
            <Nav.Item>
              <NavDropdown title={isSpanish ? `CUENTA`:`ACCOUNT`} id='login-account'>
                {props.isLoggedIn? (
                  <NavDropdown.Item
                    onClick={()=>{logoutUser({ variables: { id: sessionStorageUser.id } } ); props.setIsLoggedIn(false) }}
                  >
                    <div>
                      {isSpanish? <p>Cerrar sesi&oacute;n</p> : <p>Log out</p>}
                    </div>
                  </NavDropdown.Item>
                )
                :(
                  <NavDropdown.Item href={routes.login()}>{isSpanish ? <p>Iniciar sesi&oacute;n</p> : <p>Log in</p>}</NavDropdown.Item>
                )}

                {props.isLoggedIn && (
                  <NavDropdown.Item href={routes.profile({ id:sessionStorageUser.id })}>
                    {isSpanish? <p>Mi perfil</p> : <p>My profile</p>}
                  </NavDropdown.Item>
                )}
              </NavDropdown>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </Container>
    </>
  )
}

export default Header
