import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/icons/logo2.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">

                <div className="col-6">
                    <Navbar.Brand href="#home"><img className="brandLogo" src={logo} alt="" /></Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <div className="col-6 d-flex justify-content-end">
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto" >
                            <Nav.Link className="ml-3" href="#deets">Home</Nav.Link>
                            <Nav.Link className="ml-3" href="#memes">Orders</Nav.Link>
                            <Nav.Link className="ml-3" href="#memes">Admin</Nav.Link>
                            <Nav.Link className="ml-3" href="#memes">Deals</Nav.Link>
                            <button className="btn btn-sm btn-dark ml-3" >Login</button>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    );
};

export default Header;