import React from "react"
import { Route, Switch } from 'react-router-dom'
import Listado from '../../Components/Compras/listado.js'
import AnhadirCompra from "../../Components/Compras/anhadirCompra.js"
export default (
  <div style={{margin:0,padding:0,height:"100%"}}>
  <Route exact path="/compras/solicitar" component={Listado} />
  <Route exact path="/compras/solicitar/anhadir" component={AnhadirCompra}/>
  </div>
  );
