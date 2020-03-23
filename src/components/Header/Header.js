import React, { useContext } from 'react';
import './Header.css'
import { Navbar, Nav, Container} from 'react-bootstrap';
import logo from '../../images/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { TotalQuantityContext } from '../FoodItems/FoodItems';



const Header = () => {
    const totalCartItem = useContext(TotalQuantityContext)
 

    return (
        <div> 

            <Navbar bg="white" variant="light" expand="lg">
            <Container>
                <Navbar.Brand href="/home">
                    <img
                        src={logo}
                        height="40"
                        className="d-inline-block align-top"
                        alt="Red Onion logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto nav-link">
                        <Nav.Link href="/cart"><FontAwesomeIcon icon={faShoppingCart} /><span className="badge badge-pill badge-danger">{totalCartItem}</span></Nav.Link>                        
                        <Nav.Link href="/login">Login</Nav.Link>                    
                        <Nav.Link href="/signup"><span className="round-button">Sign up</span></Nav.Link>
                        
                    </Nav> 
                </Navbar.Collapse>
            </Container>
            </Navbar>   
        </div>
    );
};

export default Header;