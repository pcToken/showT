import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'
import promise from "redux-promise-middleware"
import reducer from "./Reducers"
import logger from 'redux-logger'
import * as types from "./ActionTypes/loginActionTypes.js"

const checkUnauthorized = store => next => action => {
  if(action.payload && action.payload.response && action.payload.response.status === 401){
    store.dispatch({type : types.LOG_OUT})
  }
  else{
    next(action);
  }

}

const middleware = applyMiddleware(thunk, logger, promise(), checkUnauthorized);

export default createStore(reducer, middleware)
