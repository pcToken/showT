import * as types from "../ActionTypes/loginActionTypes.js"
export default function reducer(state={
    loggedIn: false,
    loggingIn:false,
    loginError:false

  }, action){
  switch(action.type){
    case types.LOG_IN:{
      return({...state, username: action.login});
    }
    case types.LOG_IN_PENDING:{
      return({...state, loggingIn:true});
    }
    case types.LOG_IN_REJECTED:{
      return({...state, loggingIn:false, loggedIn : false, loginError: true, username: ""});
    }
    case types.LOG_IN_FULFILLED:{
      localStorage.setItem('pcToken', action.payload.data.token);
      return({...state, loggedIn:true, loggingIn: false, loginError: false, token : action.payload.data.token});
    }
    default:
    return state;
  }
}
