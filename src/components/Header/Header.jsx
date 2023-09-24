import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('log out success')
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div>
            <Navbar expand="lg" className="bg-light shadow">
                <Container fluid>
                    <Navbar.Brand href='/' className='fw-bold' style={{ color: '#96F796' }}>RECIPE HUNTER</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto pe-5 my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to="/" className='text-black fw-semibold me-4 text-decoration-none'>Home</Link>
                            <Link to="/blog" className='text-black fw-semibold me-4 text-decoration-none'>Blog</Link>
                            <Link className='text-black fw-semibold me-4 text-decoration-none'>About</Link>
                        </Nav>
                        <div>
                            {user
                                ?
                                <>
                                    <Image title={user?.displayName} className='cirkle me-3' style={{ width: '35px', height: '35px' }} src={user.photoURL} roundedCircle />
                                    <Button onClick={handleLogOut} to="/login" style={{ backgroundColor: '#96F796', border: 'none' }} className="btn text-white fw-semibold">Sign Out</Button></>
                                :
                                <><FaUserCircle className='me-3' style={{ fontSize: '32px' }} />
                                    <Link to="/login" style={{ backgroundColor: '#96F796' }} className="btn text-white fw-semibold">login</Link></>
                            }
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;