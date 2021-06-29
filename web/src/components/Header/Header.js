import
{
  Navbar,
  Nav,
} from 'react-bootstrap';
import logo from '../../../public/histcatmex-logo.png'

const Header = () => {
  return(
    <>
      <Navbar id='Navbar' className="header-custom" bg='white' variant='light' expand="md" collapseOnSelect
      >
        <div
          style={{ backgroundColor: '#ffffff' }}
        >
          <img src={logo} width='120' height='120' />
        </div>
        <Navbar.Brand href="/"><h3 className='branding-font'>Historians of Catholic Mexico</h3></Navbar.Brand>
        <Navbar.Toggle
        // aria-controls="basic-navbar-nav"
        aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav"
        className="justify-content-end "

        >
          <Nav
            className="justify-content-end underline-nav"
            activeKey='/'
          >
            <Nav.Item>
              <Nav.Link>
                <p className='nav-item'>About</p>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <p className='nav-item'>Profiles</p>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <p className='nav-item'>Announcements</p>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header
