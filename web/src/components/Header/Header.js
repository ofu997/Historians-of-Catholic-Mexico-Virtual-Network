import
{
  Navbar,
  Nav,
  NavDropdown
} from 'react-bootstrap';
import { Link, navigate, routes } from '@redwoodjs/router'
import logo from '../../../public/histcatmex-logo.png'
import languageContext from 'src/languageContext';
import { useContext } from 'react'

const Header = () => {
  const { language,setLanguage } = useContext(languageContext)
  const englishHeader = <h3 className='branding-font'>Historians of Catholic Mexico</h3>
  const spanishHeader = <h3 className='branding-font'>Historiadores de M&eacute;xico Cat&oacute;lico</h3>
  const englishBool = Boolean(language === 'en' || language === '');
  return(
    <>
      <Navbar id='Navbar' className="header-custom" bg='white' variant='light' expand="md" collapseOnSelect
      >
        <div
          style={{ backgroundColor: '#ffffff' }}
        >
          <img src={logo} width='120' height='120' />
        </div>
        <Navbar.Brand href="/">{ englishBool? englishHeader : spanishHeader}</Navbar.Brand>
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
          >
            <Nav.Item>
              <Nav.Link
                href={routes.about()}
              >
                <p className='nav-item'>{ englishBool? `ABOUT` : `SOBRE NOSOTROS` }</p>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <p className='nav-item'>{ englishBool? `PROFILES` : `PERFILES` }</p>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <p className='nav-item'>{ englishBool? `ANNOUNCEMENTS` : `ANUNCIOS` }</p>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <NavDropdown title="LANGUAGE/IDIOMA" id="collapsible-nav-dropdown">
                <NavDropdown.Item><p onClick={()=>sessionStorage.setItem('language', 'English')}>English</p></NavDropdown.Item>
                <NavDropdown.Item><p onClick={()=>sessionStorage.setItem('language', 'Spanish')}>espa&ntilde;ol</p></NavDropdown.Item>
              </NavDropdown>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header
