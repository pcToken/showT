import React from 'react'
import { Route } from 'react-router-dom'
import Administrar from "../../Components/Administrar"


export default (
  <Route id= "routeAdministrar" path="/Administrar" render = {()=>{
    return(<Administrar/>);
  }} />
  );
