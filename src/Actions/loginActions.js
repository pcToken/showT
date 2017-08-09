import * as types from "../ActionTypes/loginActionTypes.js"
import axios from 'axios'
import { baseUrl } from "./constants.js"
export function login(username, password){
  return({
    type:types.LOG_IN,
    payload: axios.post(baseUrl + "/empleado/login",{
      login: username,
      clave: password
    })
  })
}
