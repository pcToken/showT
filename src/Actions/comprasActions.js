import * as types from "../ActionTypes/comprasActionTypes.js"
import axios from 'axios'
import { baseUrl } from "./constants.js"
// devuelve todas las compras
export function listCompras(){
  return({
    type:types.LIST_COMPRAS,
    payload: axios.get("/compra")
  })
}
//anhadir compra
export function addCompra(compra){
  return({
    type:types.ADD_COMPRA,
    payload: ""//!!!
  })
}
