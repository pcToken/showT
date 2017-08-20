import * as types from "../ActionTypes/loginActionTypes.js"
export default function reducer(state={
    loggedIn: false,
    loggingIn:false,
    loginError:false

  }, action){
  switch(action.type){
    case types.SAVE_USER_INFO:{
      localStorage.setItem('pcUsername', action.payload.username);
      return({...state, username: action.payload.username});
    }
    case types.LOG_IN_PENDING:{
      return({...state, loggingIn:true});
    }
    case types.LOG_IN_REJECTED:{
      return({...state, loggingIn:false, loggedIn : false, loginError: true, username: ""});
    }
    case types.LOG_IN_FULFILLED:{
      localStorage.setItem('pcToken', action.payload.data.token);
      return({...state, loggedIn:true, loggingIn: false, loginError: false, token : action.payload.data.token, username : localStorage.getItem('pcUsername')});
    }
    case types.LOG_OUT:{
      localStorage.removeItem("pcToken");
      localStorage.removeItem("pcUsername");
      return({...state, loggingIn:false, loggedIn : false, username: ""});
    }
    default:
    return state;
  }
}
