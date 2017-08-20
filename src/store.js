import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'
import promise from "redux-promise-middleware"
import reducer from "./Reducers"
import logger from 'redux-logger'
const middleware = applyMiddleware(thunk, logger, promise());

export default createStore(reducer, middleware)
