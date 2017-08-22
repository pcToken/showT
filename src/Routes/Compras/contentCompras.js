import React from "react"
import { Route, Switch } from 'react-router-dom'
import Listado from '../../Components/Compras/listado.js'
import AnhadirCompra from "../../Components/Compras/anhadirCompra.js"
export default (
  <div>
  <Route exact path="/compras/solicitar" component={Listado} />
  <Route exact path="/compras/solicitar/anhadir" component={AnhadirCompra}/>
  </div>
  );
