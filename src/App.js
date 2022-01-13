import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";


import Articulos from './component/Articulos';
import Content from './component/Content';
import Footer from './component/Footer';
import Usuarios from './component/Usuarios';
import Header from './component/Header';
import Ciudades from './component/Ciudades';
import Menu from './component/Menu';
import './styles/App.css';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Menu} />
          <Route path="/articulos" exact component={Articulos} />
          <Route path="/ciudades" exact component={Ciudades} />
          <Route path="/usuarios" exact component={Usuarios} />
          <Route path="/test" exact component={() => <h1>Principal</h1>} />
          <Route path="/mantenimiento" exact component={() => <h1>ESTAMOS EN MANTENIMIENTO</h1>} />
          <Route path="*" component={() => <h1>404 Not FOUND</h1>} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
