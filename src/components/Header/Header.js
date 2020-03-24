import React, { useContext } from 'react';
import './Header.css'
import { Navbar, Nav, Container} from 'react-bootstrap';
import logo from '../../images/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { AuthContext, CartContext } from '../../App'



const Header = (props) => {
    const user = useContext(AuthContext)
    const cart = useContext(CartContext)
    const { logOut } =props
   
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
                        {
                            user.name ? <p>Welcome <span style={{color: "#f91944"}}> {user.name}</span></p> : <React.Fragment/>
                        }
                        <Link to="/review"><FontAwesomeIcon icon={faShoppingCart} /><span className="badge badge-pill badge-danger">{cart.totalQuantity || 0}</span></Link>                        
                        { user.isSignIn ? 
                            <Nav.Link href="/" onClick={logOut}><span className="round-button">Log Out</span></Nav.Link> 
                            :
                            <React.Fragment>
                                <Link to="/login">Login</Link>                    
                                <Link to="/signup"><span className="round-button">Sign up</span></Link>
                            </React.Fragment>
                        }
                        
                    </Nav> 
                </Navbar.Collapse>
            </Container>
            </Navbar>   
        </div>
    );
};

export default Header;