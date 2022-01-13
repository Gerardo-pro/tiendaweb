import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Button } from "@material-ui/core";


class Content extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="App-content">
                <Container maxWidth="xs">
                <Link to="/articulos">
                    <Button variant="contained" color="default">
                        ARTICULOS
                    </Button>
                </Link>
                &nbsp;&nbsp;
                <Link to="/ciudades">
                    <Button variant="contained" color="default">
                        CIUDADES
                    </Button>
                </Link>
                &nbsp;&nbsp;
                <Link to="/usuarios">
                    <Button variant="contained" color="default">
                        USUARIOS
                    </Button>
                </Link>
            </Container>
            </div>
         );
    }
}
 
export default Content;