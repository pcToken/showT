import { applyMiddleware, createStore } from 'redux';

import promise from "redux-promise-middleware"
import reducer from "./Reducers"
import logger from 'redux-logger'
const middleware = applyMiddleware(promise(),logger);

export default createStore(reducer, middleware)
