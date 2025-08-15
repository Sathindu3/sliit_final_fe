import React from 'react'
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
// import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
// import { faAmbulance } from '@fortawesome/free-solid-svg-icons';
// import Logo from '../../Resources/images/logo.png';
import './Navbar.css';


function Navigation() {
    return (
        <div>
            <div className="container-fluid section-navbar">
                <div className="row">
                    <Navbar collapseOnSelect expand="lg" >
                        <Container className='nav-container'>
                            <div className="col-lg-2 col-xs-12  content-1">
                                <Navbar.Brand href="/">
                                    {/* <img src={Logo} alt="" /> */}
                                </Navbar.Brand>
                            </div>
                            <div className="col-lg-12 col-xs-12  content-1">
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link as={Link} to="/" className='navlink'>Home</Nav.Link>
                                        <Nav.Link as={Link} to="/Capture" className='navlink'>Capture</Nav.Link>
                                        <Nav.Link as={Link} to="/news" className='navlink'>News</Nav.Link>
                                        <Nav.Link as={Link} to="/identify" className='navlink'>Identify</Nav.Link>
                                        <Nav.Link as={Link} to="/learn" className='navlink'>Learn</Nav.Link>
                                        <Nav.Link as={Link} to="/help" className='navlink'>Help</Nav.Link>


                                        {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.2">
                                                    Another action
                                                </NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                                <NavDropdown.Divider />
                                                <NavDropdown.Item href="#action/3.4">
                                                    Separated link
                                                </NavDropdown.Item>
                                            </NavDropdown> */}
                                    </Nav>
                                    <div className="col-lg-2 col-xs-12  content-3">
                                        <Nav>
                                            {/* <FontAwesomeIcon icon={faTachometerAlt} /> <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link> */}
                                        </Nav>
                                        <Nav>
                                            {/* <Nav.Link as={Link} to="/profile">Account</Nav.Link> */}
                                            {/* <FontAwesomeIcon icon={faUser} /> */}
                                        </Nav>

                                    </div>
                                </Navbar.Collapse>
                            </div>
                        </Container>
                    </Navbar>
                </div>
            </div>
        </div>
    );

}

export default Navigation;
