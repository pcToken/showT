import * as types from "../ActionTypes/comprasActionTypes.js"
export default function reducer(state={
  data:[],
  fetchingError: false
}, action){
  switch(action.type){
    case types.LIST_COMPRAS_PENDING:{
      return({...state});
    }
    case types.LIST_COMPRAS_REJECTED:{
      return state;
    }
    case types.LIST_COMPRAS_FULFILLED:{
      return({...state, data: action.payload.data })
    }

    case types.ADD_COMPRA_PENDING:{
      return state;
    }
    case types.ADD_COMPRA_REJECTED:{
      return state;
    }
    case types.ADD_COMPRA_FULFILLED:{
      return state;
    }
    default:
    return state;
  }
}
