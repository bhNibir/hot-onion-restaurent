import React, { useContext } from 'react';
import './Header.css'
import { Navbar, Nav, Container} from 'react-bootstrap';
import logo from '../../images/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { TotalQuantityContext } from '../FoodItems/FoodItems';
import { Link } from 'react-router-dom';



const Header = () => {
    const totalCartItem = useContext(TotalQuantityContext)
 

    return (
        <div> 

            <Navbar className="py-2" bg="white" variant="light" expand="lg">
            <Container>
                <Navbar.Brand>
                <Link to="/">
                    <img
                        src={logo}
                        height="40"
                        className="d-inline-block align-top"
                        alt="Red Onion logo"
                    />
                </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto nav-link">
                        <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} /><span className="badge badge-pill badge-danger">{totalCartItem || 0}</span></Link>                        
                        <Link to="/login">Login</Link>                    
                        <Link to="/signup"><span className="round-button">Sign up</span></Link>
                        
                    </Nav> 
                </Navbar.Collapse>
            </Container>
            </Navbar>   
        </div>
    );
};

export default Header;