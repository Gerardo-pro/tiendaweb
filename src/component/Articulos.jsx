import React from 'react'
import { Link } from "react-router-dom";
import { Container, Button } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';

import Header from './Header';
import ArticulosView from '../view/Articulos';
import Footer from './Footer';

class Articulos extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <Header name="Articulos" />
                <ArticulosView />
                <Footer />
            </div>
         );
    }
}
 
export default Articulos;