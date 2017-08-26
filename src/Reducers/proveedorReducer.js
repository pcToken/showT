import * as types from "../ActionTypes/proveedorActionTypes.js"
export default function reducer(state={
  proveedores:[],
  fetchingError: false
}, action){
  switch(action.type){
    case types.LIST_PROVEEDOR_PENDING:{
      return({...state});
    }
    case types.LIST_PROVEEDOR_REJECTED:{
      return state;
    }
    case types.LIST_PROVEEDOR_FULFILLED:{
      return({...state, proveedores: action.payload.data })
    }
    default:
    return state;
  }
}
