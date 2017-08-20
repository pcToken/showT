import React from "react"
import App from "./App"
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery.js";
import { Provider } from 'react-redux';
import store from './store'
import * as types from './ActionTypes/loginActionTypes.js'

var token = localStorage.getItem("pcToken");
if(token){
  store.dispatch({type : types.LOG_IN_FULFILLED,
    payload:{
      data:{
        token:token
      }
    }
  })
}

ReactDOM.render((
  <Provider store={store} >
	<App/>
  </Provider>
	), document.getElementById('root'));
