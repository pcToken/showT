import React from 'react'
import { Route } from 'react-router-dom'
import Compras from "../../Components/Compras"


export default (
  <Route id= "routeCompra" path="/compras" render = {()=>{
    return(<Compras/>);
  }} />
  );
