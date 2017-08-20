import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect, BrowserRouter as Router} from 'react-router-dom'
import Main from './Components/Main'
import Routes from './Routes'
import Login from './Components/Login'
require("./CSS/App.css")

function PrivateRoute ({component: Component, loggedIn,children, ...rest}) {
  console.log("children:", children)
  return (
    <Route
      {...rest}
      render={(props) => loggedIn === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
	render(){
    return (
      <Router>
      <div id="appBody">
      <Route exact path="/login" component={ Login } />
      <PrivateRoute loggedIn={this.props.loggedIn} path='/' component={Main}/>
      { Routes }
      </div>
      </Router>
      );
  }
}
const mapStateToProps = (state) => {
  return {
    loggedIn: state.login.loggedIn,
    loginError: state.login.loginError
  };
}

const mapDispatchToProps = (dispatch) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

