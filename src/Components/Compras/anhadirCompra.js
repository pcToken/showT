import React from "react"
import { connect } from 'react-redux'
import "../../CSS/anhadirCompra.css"
import { addCompra } from "../../Actions/comprasActions.js"
import {FormGroup, FormControl, ControlLabel, HelpBlock, Form, Button, Grid, Row, Col} from 'react-bootstrap'
import Tabs from 'react-responsive-tabs';
import 'react-responsive-tabs/styles.css'
const tabs = [
  {
    name:"Solicitud",
    content:<h1> hola 1</h1>
  },
  {
    name:"Pedido",
    content:<h1> hola 2</h1>
  },
  {
    name:"Pago",
    content:<h1> hola 2</h1>
  }
];

function getTabs() {
  return tabs.map(tab => ({
    tabClassName: 'tab', // Optional
    panelClassName: 'panel', // Optional
    title: tab.name,
    getContent: () => tab.content,
  }));
}
function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
    <ControlLabel>{label}</ControlLabel>
    <FormControl {...props} />
    {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
    );
}

class anhadirCompra extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){

  }
  render(){
    return(
      <Tabs items={getTabs()} showInkBar/>
      );
  }
}

const mapStateToProps = (state) => {
  return;
}

const mapDispatchToProps = (dispatch) => {
  return ;
}

export default connect(mapStateToProps, mapDispatchToProps)(anhadirCompra);
