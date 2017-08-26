import * as types from "../ActionTypes/proveedorActionTypes.js"
import axios from 'axios'
// devuelve todos los proveedores
export function listProveedor(){
  return({
    type:types.LIST_PROVEEDOR,
    payload: axios.get("/proveedor")
  })
}
