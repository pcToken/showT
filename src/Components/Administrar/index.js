import React from 'react';
import MainContent from '../MainContent.js'
import ContenidoAdministrar from "../../Routes/Administrar/contentAdministrar.js"
import "bootstrap/dist/css/bootstrap.css"
import "jquery/dist/jquery.js"
var menu = [
{
  divider: true, label: 'Administrar', value: 'main-nav'
},
{
  label: 'Administrar', value: 'Administrar',
  icon: 'fa-table',
  children:[
  {
    label:"Empresa", value:"Empresa"
  },
  {
    label:"Programa", value:"Programa"
  },
  {
    label:"Empleado", value:"Empleado"
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
   return( <MainContent currentSection="administrar" menu={menu} content={ContenidoAdministrar} />);
  }
}
