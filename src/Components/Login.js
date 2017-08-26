import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login, saveUserInfo } from '../Actions/loginActions.js'
import {FormGroup, FormControl, ControlLabel, HelpBlock, Form, Button, Grid, Row, Col} from 'react-bootstrap'
import "../CSS/Login.css"

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
    <ControlLabel>{label}</ControlLabel>
    <FormControl {...props} />
    {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
    );
}

class Login extends React.Component{
  constructor(props){
    console.log("props:", props)
    super(props);
    this.state = {
      username: "",
      password : ""
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  render(){
    if(this.props.loggedIn){
      return(
        <Redirect to="/"/>
        );
    }
    return(
      <Grid id="loginForm">
      <Row className="show-grid">
      <Col  mdPush={4} md={4} xs={8} xsPush={6}>
      <h1> Casa del Tenis</h1>
      </Col>
      </Row>
      <Row className="show-grid">
      <Col id="col" mdPush={4} md={4} xs={8} xsPush={6}>
      <Form onSubmit={this.onSubmit}>
      <FieldGroup
      id="username"
      type="text"
      label="Username"
      placeholder="username"
      onChange={e=>this.setState({username:e.target.value})}
      value = {this.state.username}
      />
      <FieldGroup
      id="password"
      type="password"
      label="Password"
      placeholder="password"
      onChange={e=>this.setState({password:e.target.value})}
      value = {this.state.password}
      />
      <Button type="submit" id="loginBtn" className="btn btn-primary">
      Log In
      </Button>
      </Form>
      {this.props.loggingIn && <h3>Please wait</h3>}
      {this.props.loggedIn && <h3>Done</h3>}
      {this.props.loginError && <h3>failed</h3>}
      </Col>
      </Row>
      </Grid>
      );
  }
  onSubmit(e){
    e.preventDefault();
    let {username, password} = this.state;
    this.props.login(username, password);
    this.setState({
      username: "",
      password: ""
    });
  }
}


const mapStateToProps = (state) => {
  return {
    loggedIn: state.login.loggedIn,
    loggingIn: state.login.loggingIn,
    loginError: state.login.loginError
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => {
      dispatch(login(username, password));
      dispatch(saveUserInfo("CT-" + username, username));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
