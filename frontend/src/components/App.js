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

class App extends React.Component{
  render(){
    return (
      <BrowserRouter basename="/">
        <Layout>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="Lineales" component={Lineal} />
            <Route exact path="./Ordenamientos" component={Ordenamiento} />
            <Route exact path="/Arboreas" component={Arborea} />
            <Route exact path="/EnlazadaSimple" component={LinealEC} />
            <Route exact path="/CircularDoble" component={LinealEC} />
            <Route exact path="/Pila" component={LinealPC} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    )
  }
}

export default App;