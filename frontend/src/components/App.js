import React from 'react';
import { HashRouter, Switch, Route, BrowserRouter } from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/Home';
import Lineal from '../pages/Lineal';
import Ordenamiento from '../pages/Ordenamiento';
import Arborea from '../pages/Arborea';
import NotFound from '../pages/NotFound';
import LinealEC from '../pages/LinealEC';
import LinealPC from '../pages/LinealPC';
import Navbar from './NavBar';

function  App(){
    return (
      <BrowserRouter>
      <>
        <Navbar/>
      </>
      <Switch>
            <Route exact path="/TytusDS/frontend/build/" component={Home} />
            <Route exact path="/TytusDS/frontend/build//Lineales" component={Lineal} />
            <Route path="/Ordenamientos" component={Ordenamiento} />
            <Route path="/Arboreas" component={Arborea} />
            <Route path="./EnlazadaSimple" component={LinealEC} />
            <Route path="/CircularDoble" component={LinealEC} />
            <Route path="/Pila" component={LinealPC} />
            <Route component={NotFound} />
            </Switch>
      </BrowserRouter>
    )
  
}

export default App;