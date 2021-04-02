import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/icons/logo2.png';
import './Header.css';

const Header = () => {

    //destructuring if user signed in and taking profile image
    const [{ isSignedIn, image }] = useContext(UserContext);

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
                            {
                                !isSignedIn && <Link to="/login" className="btn btn-dark ml-3" >Login
                               </Link>
                            }
                            {isSignedIn && <img className="ml-3" style={{ borderRadius: "50%" }} height="35px" width="35px" src={image} alt="" />}

                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    );
};

export default Header;