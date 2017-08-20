import React from 'react'
import { connect } from 'react-redux'
import { Navbar, NavItem, MenuItem, NavDropdown, Nav} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from "react-router-dom"
import { logOut } from "../Actions/loginActions.js"
import logo from  "../icons/mini_black_logo.png"

class mainNavBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    this.onLogout = this.onLogout.bind(this);
  }
  onLogout(){
    this.props.logOut();
  }
  render(){
    return(
    <Navbar inverse collapseOnSelect className="ContainerFluid" style={{backgroundColor:'black'}}>
      <Navbar.Header>
      <img src={logo} style={{width:50, marginTop:3}}/>
        <Navbar.Brand>
          <Link to="/">Casa del Tenis</Link>
        </Navbar.Brand>
        {/*responsive menu*/}
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to="/compras"><NavItem eventKey={1}>Compras</NavItem></LinkContainer>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">{this.props.username}</NavItem>
          <NavDropdown eventKey={3} title=""  id="basic-nav-dropdown">
            <MenuItem eventKey={3.2}>Perfil</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3} onClick={this.onLogout}>Log Out</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }

};


const mapStateToProps = (state) => {
  return {
    loggedIn: state.login.loggedIn
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOut : ()=>{
      dispatch(logOut());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(mainNavBar);
