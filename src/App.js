import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect, BrowserRouter as Router} from 'react-router-dom'
import Main from './Components/Main'
import Login from './Components/Login'

function PrivateRoute ({component: Component, loggedIn, ...rest}) {
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
      <div>
      <Switch>
      <Route exact path="/login" component={ Login } />
      <PrivateRoute loggedIn={this.props.loggedIn} path='/' component={Main} />
      </Switch>
      </div>
      </Router>
      );
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
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

