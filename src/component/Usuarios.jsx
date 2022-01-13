import React from 'react'
import { Link } from "react-router-dom";
import { Container, Button } from "@material-ui/core";
// import HomeIcon from '@material-ui/icons/Home';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import Header from './Header';
import UsuariosView from '../view/Usuarios';
import Footer from './Footer';

class Usuarios extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <Header name="USUARIOS" />
                <UsuariosView />
                <Footer />
            </div>
         );
    }
}
 
export default Usuarios;