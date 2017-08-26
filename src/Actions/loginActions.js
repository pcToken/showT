import * as types from "../ActionTypes/loginActionTypes.js"
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8080/api/empresa/CT';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export function login(username, password){
  return({
    type:types.LOG_IN,
    payload: axios.post("/empleado/login",{
      login: username,
      clave: password
    })
  })
}
export function saveUserInfo(id, username){
  return({
    type:types.SAVE_USER_INFO,
    payload: {
      username : username,
      id: id
    }
  })
}
export function logOut(){
  return({
    type:types.LOG_OUT,
  })
}
