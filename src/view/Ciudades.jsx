import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import { Fab, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import PersonIcon from '@material-ui/icons/Person';

import {
    Button,
    Container,
    List,
    ListItem,
    ListSubheader,
    ListItemText,
    ListItemIcon
  } from "@material-ui/core";


class Ciudades extends Component {
    constructor(props) {
        super(props);   
        this.state = {
            edit: false,
            idAlumno: 0,
            alumnos1: []
        }
    }
    state = {

    }
  
    titulo = "LISTA DE ARTICULOS";


    frmNoControl = React.createRef();
    frmNombre = React.createRef();

  addAlumno = event => {
    event.preventDefault();


    const data = { noControl:this.frmNoControl.value, nombre:this.frmNombre.value }

    
    if(!this.state.edit) {
        const url ='http://localhost:4000/articulos';

        axios.post(url, data)
	        .then(res => console.log(res.data));


        this.frmNoControl.value = "";
        this.frmNombre.value = "";
        this.frmNoControl.focus();
        this.frmNombre.focus();
    }
    else {

        const url ='http://localhost:4000/articulos'+this.state.id;

        const data = { noControl:this.frmNoControl.value, nombre:this.frmNombre.value }

        axios.put(url, data)
            .then(res => console.log(res.data));
        
        console.log(url);
    
        }
    

        this.loadAlumno();
    
  }

  viewAlumno = (id) => event => {
    event.preventDefault();

    this.frmNoControl.value = "";
    this.frmNombre.value = "";
    this.frmNoControl.focus();
    this.frmNombre.focus();
    this.frmNombre.value = this.state.alumnos[id];
  }


  editAlumno = (id, row) => event => {
    event.preventDefault();

    var newState = this.state;
    newState.edit = true;
    newState.id = id;

    this.setState(newState);

    this.frmNoControl.focus();
    this.frmNoControl.value = this.state.alumnos1[row].noControl;
    this.frmNombre.focus();
    this.frmNombre.value = this.state.alumnos1[row].nombre;

  }

  deleteAlumno = (id) => event => {
        event.preventDefault();

        const url ='http://localhost:4000/articulos'+id;

        axios.delete(url)
            .then(res => console.log(res.data));
        
        
        this.loadAlumno();
        
        console.log(url);
    }  

  loadAlumno () {

    axios.get('http://localhost:4000/articulos')
    .then(res => {
      //const emps = res.data;
      this.setState({ alumnos1: res.data });
      console.log(res.data);
    })



  }

  componentDidMount() {
    this.loadAlumno();
  }
  

    render() { 
        return ( 
            <div className="App-alumnos">
            <Container maxWidth="xs">
                <Link to="/">
                    <Button
                        variant="contained"
                        color="default"
                        size="small"
                        startIcon={<HomeIcon />}
                    >
                    Regresar
                    </Button>
                </Link>
            </Container>
                <form autoComplete="off" onSubmit={this.addAlumno}>    
                    <TextField
                        label="Ciudad"
                        type="text"
                        margin="normal"
                        variant="outlined"
                        inputRef={e => (this.frmNoControl = e)}
                    />
                    <TextField
                        label="Estado"
                        type="text"
                        margin="normal"
                        variant="outlined"
                        inputRef={e => (this.frmNombre = e)}
                    />
                    <Fab
                        color="primary"
                        size="medium"
                        //className="dish-form-icon"
                        onClick={this.addAlumno}
                    >
                        <AddIcon />
                    </Fab>
                </form>

                <List
                    component="nav"
                    subheader={<ListSubheader component="div">{ this.titulo }</ListSubheader>}
                    >
                    {this.state.alumnos1.map((alumno, index) => (
                        <ListItem button key={index}>
                            <ListItemIcon onClick={this.viewAlumno(index)}>
                                <PersonIcon />
                            </ListItemIcon>
                            <ListItemText inset primary={alumno.noControl} />
                            <ListItemText inset primary={alumno.nombre} />
                            <ListItemIcon onClick={this.editAlumno(alumno.id, index)}>
                                <EditIcon />
                            </ListItemIcon>
                            <ListItemIcon onClick={this.deleteAlumno(alumno.id)}>
                                <DeleteIcon />
                            </ListItemIcon>
                        </ListItem>
                    ))}
                </List>



            </div>
         );
    }
}
 
export default Ciudades;