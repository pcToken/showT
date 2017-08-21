import * as types from "../ActionTypes/comprasActionTypes.js"
import axios from 'axios'
import { baseUrl } from "./constants.js"
export function listCompras(){
  return({
    type:types.LIST_COMPRAS,
    payload: axios.get("/compra")
  })
}
