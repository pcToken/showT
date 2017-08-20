import React from 'react';
import MainContent from '../MainContent.js'

var menu = [
{
  divider: true, label: 'Compras', value: 'main-nav'
},
{
  label: 'Solicitar', value: 'solicitar',
  icon: 'fa-table',
  children:[
  {
    label:"Añadir", value:"solicitar/anhadir"
  },
  {
    label:"Inicio", value:"solicitar"
  }
  ]
},
{
  label: 'Cerrar', value: 'cerrar',
  icon: 'fa-check'
},
{
  label: 'Reportes', value: 'reportes',
  icon: 'fa-print'
},
{
  label: 'Busqueda', value: 'busqueda',
  icon: 'fa-search'
}
];
export default class Compras extends React.Component{
  render(){
   return( <MainContent currentSection="compras" menu={menu}/>);
  }
}
