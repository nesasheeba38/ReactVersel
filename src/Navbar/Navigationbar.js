import React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import git from './git.svg';
import twitter from './twitter.svg';
import linkdin from './linkdin.svg';
import meta from './meta.svg';
import Table from 'react-bootstrap/Table';
export const Navigationbar=()=>{
    return(
      <div>
    <div>
     <Navbar expand="lg"bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand  width="15" height="15"className="d-flex  alighn-items-center ms-auto">
            <img src={meta}/>
            {''}Meta</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Profile</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="icons" style={{justifyContent:'end'}}>
         <Nav style={{gap:'15px',alignItems:'center'}}>
            <img src={git} alt="git"></img>
            <img src={twitter} alt="twitter"></img>
            <img src={linkdin} alt="linkdin"></img>  
         </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>'
    <div style={{margintop:"2px"}}>
    <Table striped bordered hover variant="dark" style={{gap:'12px'}}>
      <thead>
        <tr>
          <th>S.No</th>
          <th> First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>sheeba</td>
          <td>James</td>
          <td>sheebajames@gmail.com</td>
        </tr>
        <tr>
          <td>2</td>
          <td>divya</td>
          <td>jenifer</td>
          <td>divya@gmail.com</td>
        </tr>
        <tr>
          <td>3</td>
          <td>saimica</td>
          <td>xavier</td>
          <td>Saimica@gmail.com</td>
        </tr>
      </tbody>
    </Table>
    </div>
    </div>
)
};




    
export default Navigationbar;