import { combineReducers } from 'redux'

import login from "./loginReducer.js"
import compras from './comprasReducer.js'
export default combineReducers({
  login,
  compras
});
