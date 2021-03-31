import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/icons/logo2.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">

                <div className="col-6">
                    <Navbar.Brand as={Link} to="/home"><img className="brandLogo" src={logo} alt="" /></Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <div className="col-6 d-flex justify-content-end">
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto" >
                            <Nav.Link as={Link} to="/home" className="ml-3">Home</Nav.Link>
                            <Nav.Link as={Link} to="/orders" className="ml-3">Orders</Nav.Link>
                            <Nav.Link as={Link} to="/admin" className="ml-3">Admin</Nav.Link>
                            <Nav.Link className="ml-3">Deals</Nav.Link>
                            <button className="btn btn-sm btn-dark ml-3" >Login</button>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    );
};

export default Header;