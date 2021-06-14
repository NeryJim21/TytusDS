import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/Home';
import Lineal from '../pages/Lineal';
import Ordenamiento from '../pages/Ordenamiento';
import Arborea from '../pages/Arborea';
import NotFound from '../pages/NotFound';
import LinealEC from '../pages/LinealEC';
import LinealPC from '../pages/LinealPC';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/TytusDS/" component={Home} />
          <Route exact path="/TytusDS/Lineales" component={Lineal} />
          <Route exact path="/TytusDS/Ordenamientos" component={Ordenamiento} />
          <Route exact path="/TytusDS/Arboreas" component={Arborea} />
          <Route exact path="/TytusDS/Lineales/EnlazadaSimple" component={LinealEC} />
          <Route exact path="/TytusDS/Lineales/CircularDoble" component={LinealEC} />
          <Route exact path="/TytusDS/Lineales/Pila" component={LinealPC} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;