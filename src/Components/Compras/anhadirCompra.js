import React from "react"
import { connect } from 'react-redux'

import {
  FormGroup, FormControl, ControlLabel, HelpBlock, Form, Button, Grid, Row, Col,
} from 'react-bootstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import DatePicker from "react-bootstrap-date-picker"
import Select from 'react-select';

import { addCompra } from "../../Actions/comprasActions.js"
import { listProveedor } from "../../Actions/proveedorActions.js"

import "react-tabs/style/react-tabs.css"
import 'react-select/dist/react-select.css';
import "../../CSS/anhadirCompra.css"

import * as enums from "../enums.js"


// Be sure to include styles at some point, probably during your bootstrapping


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
    this.state = {
      fecha : (new Date()).toISOString(),
      proveedor: {},
      userId: props.userId,
      moneda: enums.monedaEnum[0],
      productoPedido:{},
      pedidos:[]

    };
  }
  componentWillMount(){
    this.props.listProveedores();
  }
  render(){
    return(
      <Form>
        <Tabs>
        <TabList>
        <Tab>Solicitud</Tab>
        <Tab>Pedido</Tab>
        <Tab>Pago</Tab>
        </TabList>

        <TabPanel>
          <Grid>
            <Row>
              <Col md={6} xs={6}>
                <h2> Solicitud Compra </h2>
              </Col>
              <Col md={4} xs={6}>
                <DatePicker value = {this.state.fecha}  onChange={(isoStr, dateStr)=>{ this.setState({fecha: isoStr})}}/>
                <HelpBlock>mm/dd/yyyy</HelpBlock>
                <FormGroup>
                  <ControlLabel> Moneda</ControlLabel>
                  <FormControl componentClass="select" placeholder="Seleccionar" onChange={(e)=>{
                        this.setState ({moneda: e.target.value});
                      }
                    }>
                      {
                        enums.monedaEnum.map(moneda=>{
                          return <option value={moneda._id}> {moneda}</option>
                        })
                      }
                    </FormControl>
                  </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={10} xs={12}>
                <FormGroup>
                  <ControlLabel>Proveedor</ControlLabel>
                  <FormControl componentClass="select" placeholder="Seleccionar" onChange={(e)=>{
                    if(e.target.value === "Seleccionar"){
                      this.setState = {proveedor: {}};
                    }
                    else{
                      this.setState ({proveedor: this.props.proveedores.filter(proveedor=>proveedor._id == e.target.value)[0]});
                    }
                  }}>
                    <option value="" > Seleccionar</option>
                    {
                      this.props.proveedores.map(proveedor=>{
                        return <option value={proveedor._id}> {proveedor.nombre}</option>
                      })
                    }
                  </FormControl>
                </FormGroup>
                {this.state.proveedor.contactos && this.state.proveedor.contactos.length >  0?
                  <FormGroup>
                    <ControlLabel>Contacto</ControlLabel>
                    <FormControl componentClass="select" placeholder="Seleccionar" onChange={(e)=>{
                      if(e.target.value === "Seleccionar"){
                        this.setState ({contacto: {}});
                      }
                      else{
                        this.setState({contacto : this.state.proveedor.contactos.filter(contacto=>contacto._id == e.target.value)[0]
                        })
                      }
                    }}>
                      <option value="" > Seleccionar</option>
                      {
                        this.state.proveedor.contactos.map(contacto=>{
                          return <option value={contacto._id}> {contacto.nombre}</option>
                        })
                      }
                      </FormControl>
                  </FormGroup>:<div></div>
                }
                <FieldGroup label = "Usuario" value ={this.props.username} disabled/>
              </Col>
            </Row>
          </Grid>
        </TabPanel>

        <TabPanel>
          <Grid>
            <Row>
              <Col md={5} xs={6}>
              {this.state.proveedor.productos?
                <FormGroup>
                  <ControlLabel>Articulo</ControlLabel>
                  <Select name="Articulo" value={this.state.proveedor.productos[0]._id}
                  options={this.state.proveedor.productos.map(producto=>{
                    return {value: producto._id, label: producto.idArticulo.nombre}
                  })}
                  />
                </FormGroup>:
                <div></div>
              }
              </Col>
              <Col md={5} xs={6}>
                {}
              </Col>
            </Row>
          </Grid>
        </TabPanel>
        <TabPanel>
        <h2>Hola DIEGO</h2>
        </TabPanel>
        </Tabs>
        </Form>
      );
  }
}

const mapStateToProps = (state) => {
  console.log("stado:", state);
  return{
    proveedores : state.proveedor.proveedores,
    username : state.login.username,
    userId: state.login.userId
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    listProveedores : ()=>{
      dispatch(listProveedor());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(anhadirCompra);
