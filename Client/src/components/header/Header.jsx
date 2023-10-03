
// import { AppBar, Toolbar, styled } from '@mui/material'; 
// import { Link } from 'react-router-dom';


// const Component = styled(AppBar)`
//     background: #FFFFFF;
//     color: black;
// `;

// const Container = styled(Toolbar)`
//     justify-content: center;
//     & > a {
//         padding: 20px;
//         color: #000;
//         text-decoration: none;
//     }
// `

// const Header = () => {
        
//     return (
//         <Component>
//             <Container>
//                 <Link to='/'>HOME</Link>
//                 <Link to='/about'>ABOUT</Link>
//                 <Link to='/contact'>CONTACT</Link>
//                 <Link to='/account'>LOGOUT</Link>
//             </Container>
//         </Component>
//     )
// }

// export default Header;

import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import myImage from '../images/image.gif';
import 'bootstrap/dist/css/bootstrap.min.css';

function ColorSchemesExample() {
  return (
    <>
      <style>
        {`
          .navbar-link {
            padding: 0 10px; /* Adjust the padding as needed */
            text-decoration: none; /* Remove default underline */
            color: white; /* Set link color */
          }
        `}
        {`
          .navbar {
            margin-top: 0; /* Adjust this value as needed */
          }
        `}
      </style>
      <Navbar bg="dark" data-bs-theme="dark" className="fixed-top">
        <Container>
          <Navbar.Brand as={Link} to="/create">
          <img
              src={myImage}
              alt="Navbar Brand"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to='/' className="navbar-link">HOME</Link>
            <Link to='/about' className="navbar-link">ABOUT</Link>
            <Link to='/contact' className="navbar-link">CONTACT</Link>
            <Link to='/account' className="navbar-link">LOGOUT</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
