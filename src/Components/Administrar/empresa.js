import React from "react"
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { connect } from 'react-redux'
import ReactLoading from 'react-loading';
import "react-bootstrap-table/css/react-bootstrap-table.css"
import "../../CSS/listadoCompras.css"
import { listCompras } from "../../Actions/comprasActions.js"
import {Button,Grid,Col,Row,FormGroup,InputGroup,FormControl,DropdownButton,MenuItem
  ,ControlLabel,DateTimeField} from 'react-bootstrap'

  const COL_WIDTH = "160px"

  class Empresa extends React.Component{
    constructor(props){
      super(props);
    }
    componentDidMount(){

    }
    render(){
      return(

        <div>
        
        
        <h1>Gestionar Empresa</h1>
        <p>Testig paragrah</p>
        

        </div>

        );
    }
  }

  const mapStateToProps = (state) => {
    return;
  }

  const mapDispatchToProps = (dispatch) => {
    return ;
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Empresa);

