import React from 'react'
import "../CSS/routes.css"
import Compras from "./Compras"

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
  <div style={{height:"100%"}}>
   { Compras }
  </div>
);
