import { combineReducers } from 'redux'

import login from "./loginReducer.js"
import compras from './comprasReducer.js'
import proveedor from './proveedorReducer.js'
export default combineReducers({
  login,
  compras,
  proveedor
});
