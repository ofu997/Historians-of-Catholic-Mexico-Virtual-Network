import
{
  Navbar,
  Nav,
  NavDropdown
} from 'react-bootstrap';
import { routes } from '@redwoodjs/router'
import logo from '../../../public/histcatmex-logo.png'

const Header = props => {
  const englishHeader = <h3 className='branding-font'>Historians of Catholic Mexico</h3>
  const spanishHeader = <h3 className='branding-font'>Historiadores de M&eacute;xico Cat&oacute;lico</h3>
  const isSpanish = Boolean(props.language === 'Spanish');
  return(
    <>
      <Navbar id='Navbar' className="header-custom" bg='white' variant='light' expand="md" collapseOnSelect
      >
        <div
          style={{ backgroundColor: '#ffffff' }}
        >
          <img src={logo} width='120' height='120' />
        </div>
        <Navbar.Brand href="/">{ isSpanish ? spanishHeader : englishHeader }</Navbar.Brand>
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
            <Nav.Item>
              <Nav.Link
                href={routes.about()}
              >
                <p className='nav-item'>{ isSpanish ? `SOBRE NOSOTROS`:`ABOUT` }</p>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href={routes.profiles()}
              >
                <p className='nav-item'>{ isSpanish ? `PERFILES`:`PROFILES` }</p>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <p className='nav-item'>{ isSpanish ? `ANUNCIOS`:`ANNOUNCEMENTS` }</p>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <NavDropdown title="LANGUAGE/IDIOMA" id="collapsible-nav-dropdown">
                <NavDropdown.Item><p onClick={()=>{sessionStorage.setItem('language', 'English'); props.setLanguage('English')}}>English</p></NavDropdown.Item>
                <NavDropdown.Item><p onClick={()=>{sessionStorage.setItem('language', 'Spanish'); props.setLanguage('Spanish')}}>espa&ntilde;ol</p></NavDropdown.Item>
              </NavDropdown>
            </Nav.Item>
            <Nav.Item>
              <NavDropdown title="LOGIN/ACCOUNT" id='login-account'>
                <Nav.Link href={routes.login()}>Log in</Nav.Link>
                <Nav.Link>Account</Nav.Link>
              </NavDropdown>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header
