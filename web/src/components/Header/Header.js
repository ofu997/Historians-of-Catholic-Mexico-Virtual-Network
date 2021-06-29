import
{
  Navbar,
  Nav,
} from 'react-bootstrap';
import logo from '../../../public/histcatmex-logo.png'

const Header = () => {
  return(
    <>
      <Navbar id='Navbar' className="header-custom" bg="light" variant='light' expand="md" collapseOnSelect
      >
        <img src={logo} /><Navbar.Brand href="/"><h1 className='branding-font'>Historians of Catholic Mexico</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"
        className="justify-content-end"
        >
          <Nav
            className="justify-content-end"
            activeKey='/'
          >thing</Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header
