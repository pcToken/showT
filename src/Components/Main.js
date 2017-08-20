import React from 'react'
import { connect } from 'react-redux'
import NavigationBar from './NavigationBar.js'
class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return(
      <div>
        <NavigationBar username = {this.props.username}/>
        {this.props.children}
      </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.login.loggedIn,
    loginError: state.login.loginError,
    username : state.login.username
  };
}

const mapDispatchToProps = (dispatch) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
