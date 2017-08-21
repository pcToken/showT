import React from "react"
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { connect } from 'react-redux'
import ReactLoading from 'react-loading';
import "react-bootstrap-table/css/react-bootstrap-table.css"
import "../../CSS/listadoCompras.css"
import { listCompras } from "../../Actions/comprasActions.js"

const COL_WIDTH = "160px"

class Listado extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.listCompras();
  }
  render(){
    return(
      (this.props.data.length > 0) ?
      <div style={{padding:0}}>
      <BootstrapTable data={ this.props.data } pagination exportCSV>
        <TableHeaderColumn filter={ { type: 'TextFilter'}} dataSort={ true } width = {COL_WIDTH} dataField='nro' isKey>Nro</TableHeaderColumn>
        <TableHeaderColumn filter={ { type: 'TextFilter'}} dataSort={ true } width = {COL_WIDTH} dataField='fecha'>fecha</TableHeaderColumn>
        <TableHeaderColumn filter={ { type: 'TextFilter'}} dataSort={ true } width = {COL_WIDTH} dataField='proveedor'>Proveedor</TableHeaderColumn>
        <TableHeaderColumn filter={ { type: 'TextFilter'}} dataSort={ true } width = {COL_WIDTH} dataField='total'>Total</TableHeaderColumn>
        <TableHeaderColumn filter={ { type: 'TextFilter'}} dataSort={ true } width = {COL_WIDTH} dataField='saldo'>Saldo</TableHeaderColumn>
        <TableHeaderColumn filter={ { type: 'TextFilter'}} dataSort={ true } width = {COL_WIDTH} dataField='pago'>Pago</TableHeaderColumn>
      </BootstrapTable>
      </div>
      :
      <div id="loader">
      <ReactLoading color="#6a5596" type="cylon" height='80' width='80' />
      </div>
      );
  }
}

const mapStateToProps = (state) => {
  var comprasParaTabla = [];
  state.compras.data.map(compra=>{
    var compraN ={};
    compraN.nro = compra.nro || "";
    compraN.fecha = compra.fecha || "";
    compraN.proveedor = compra.detalle.proveedor.nombre || "";
    compraN.total = compra.importe;
    compraN.saldo = compra.saldoPago;
    compraN.pago = compra.saldoPago > 0 ? "pendiente" : "pagado";
    comprasParaTabla.push(compraN);
  })
  return {
    data : comprasParaTabla,
    error: state.compras.fetchingError
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    listCompras: () => {
      dispatch(listCompras());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Listado);

