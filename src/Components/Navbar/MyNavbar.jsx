import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const MyNavbar = () => {


  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(''); 

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);




  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
<Container>
  <Navbar.Brand href="#home">Navbar</Navbar.Brand>
  <Nav className="me-auto">
    <Nav.Link href="/" style={{ color: currentPage === '/' ? 'purple' : 'inherit'}}>Home</Nav.Link>
    <Nav.Link href="/page1"  style={{ color: currentPage === '/page1' ? 'purple' : 'inherit'}}>Page1</Nav.Link>
    <Nav.Link href="/page2"  style={{ color: currentPage === '/page2' ? 'purple' : 'inherit'}}>Page2</Nav.Link>
    <Nav.Link href="/page3"  style={{ color: currentPage === '/page3' ? 'purple' : 'inherit'}}>Page3</Nav.Link>
  </Nav>
</Container>
</Navbar>
    </div>
  )
}

export default MyNavbar





