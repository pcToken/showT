import React from 'react'
import { Route } from 'react-router-dom'
import Compras from "../Components/Compras"
import "../CSS/routes.css"


const items = [
{
  divider: true, label: 'Main navigation', value: 'main-nav'
},
{
  label: 'item 1', value: 'solicitar',
  icon: 'fa-search'
},
{
  label: 'item 2', value: 'item2', icon: 'fa-automobile',
  children: [
  {
    label: 'item 2.1', value: 'item2.1',
    children: [
    {
      label: 'item 2.1.1', value: 'item2.1.1'
    },
    {
      label: 'item 2.1.2', value: 'item2.1.2'
    }]
  },
  {
    label: 'item 2.2', value: 'solicitar'
  }]
},
{divider: true, label: 'Motors', value: 'motors-nav'},
{
  label: 'item 3', value: 'item3', icon: 'fa-beer'
}];
export default (
  <Route id= "routeCompra" path="/compras" render = {()=>{
    return(<Compras/>);
  }} />
);
