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
export function saveUserInfo(username){
  return({
    type:types.SAVE_USER_INFO,
    payload: {
      username : username
    }
  })
}
export function logOut(){
  return({
    type:types.LOG_OUT,
  })
}
