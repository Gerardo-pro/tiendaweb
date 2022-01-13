import React from 'react'
import { Link } from "react-router-dom";
import { Container, Button } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';

import Header from './Header';
import Ciudadesview from '../view/Ciudades';
import Footer from './Footer';

class Ciudades extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <Header name="CIUDADES" />
                <Ciudadesview />
                <Footer />
            </div>
         );
    }
}
 
export default Ciudades;