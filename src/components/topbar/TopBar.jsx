
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { Navbar, Nav, Container } from 'react-bootstrap';
import "./topbar.css";


export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div>
    {/* <div className="top"> 
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>

      </div> <div className="topCenter"> 
        <ul className="topList">
           <li className="topListItem"> 
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
       </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF+user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
        </div>*/}

<Navbar collapseOnSelect fixed="top" expand='sm' className="nav">
       <Container>
         <Navbar.Toggle aria-controls='responsive-navbar-nav' />
         <Navbar.Collapse id='responsive-navbar-nav'>
           <Nav>
             <Nav.Link href='/' className="link topListItem">
              HOME
            </Nav.Link>

            <Nav.Link href='/' className="link topListItem">
              ABOUT
            </Nav.Link>
            <Nav.Link href='/' className="link topListItem">
              CONTACT
            </Nav.Link>

            <Nav.Link href='/write' className="link topListItem">
              CREATE
            </Nav.Link>
            {user ? (
          <Nav.Link href='/settings' className="link topListItem">
            <img className="topImg" src={PF+user.profilePic} alt="" />
          </Nav.Link>
        ) : (
          
            <>
            <Nav.Link href='/login' className="link topListItem">
                LOGIN
              </Nav.Link>
            
            
            <Nav.Link href='/register' className="link topListItem">
                REGISTER
              </Nav.Link>
      
        </>
        )}

           
       <div>
     <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
     </div>
        </Nav>
         </Navbar.Collapse>
       </Container>
     </Navbar>

    
    </div>
  );
}