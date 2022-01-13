import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../styles/App.css';

// Importar Componentes
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

var articulos = [""];


class Menu extends Component {

    constructor(props) {
        super(props);   
        this.state = {
            articulos: articulos
        }
    }
    state = {
        
    }

    render() { 
        return ( 
            <div>
                <Header name="BIENVENIDO A TU TIENDA WEB" />
                <Content data={ this.state.data } />
                <Footer />
            </div>
         );
    }
}
 
export default Menu;