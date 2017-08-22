import React from 'react';
import {SideMenu} from 'react-sidemenu';
import "react-sidemenu/dist/react-sidemenu.css"
import "font-awesome/css/font-awesome.css"
import "../CSS/mainContent.css"
import { Grid, Row, Col } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
const mobileWidth = 390;
// PROPS
// menu : estructura del sidemenu en un arreglo de objetos json
// currentSection : seccion actual del path en el que se encuentra, como este componente esta disenhado para ser usado como seccion principal de cada subdivision de la app(compras, ventas,etc) deberia estar justo en alguna subruta de la pagina principal ej: si currentSection"compras" en la url seria http://algo/compras para acceder a este componente
// content: contenido que ira en la seccion de la derecha
class mainContent extends React.Component{
  constructor(props){
    super(props);
    if(window.innerWidth <= mobileWidth){
      this.state= {
        mobile:true
      }
    }
    else{
      this.state= {
        mobile:false
      }
    }
  }
  componentDidMount(){
    window.addEventListener("resize", ()=>{
      if(window.innerWidth <= mobileWidth && !this.state.mobile){
        this.setState({mobile:true})
      }
      else if(window.innerWidth > mobileWidth && this.state.mobile){
        this.setState({mobile:false})
      }
    });
  }
  render(){
    return(
      <Grid id="contentSection" style={{marginTop:-20}}>
        <Row style={{height:"100%"}}>
          <Col md={2} sm={3} style={this.state.mobile? {margin:0,padding:0}:{height:"100%",margin:0,padding:0}}>
            <SideMenu theme="custom" items={this.props.menu} onMenuItemClick={(value)=>{
              this.props.history.push("/" + this.props.currentSection+ "/" + value);
            }}/>
          </Col>
          <Col md={10} sm={9} style={{margin:0,padding:0,height:"100%"}}>
            { this.props.content }
          </Col>
        </Row>
      </Grid>
      );
  }
}

export default withRouter( mainContent );
