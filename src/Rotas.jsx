import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Arrays from './pages/Arrays';
import HelloWorld from './pages/HelloWorld';
import Objetos from './pages/Objetos';
import Orion from './pages/Orion';
import PaginaInicial from './pages/PaginaInicial';

const Rotas = () => {
    return (
        <Switch>
            <Route exact path="/" component={HelloWorld} />
            <Route exact path="/hello-world" component={HelloWorld} />
            <Route exact path="/inicial" component={PaginaInicial} />
            <Route exact path="/page2" component={Orion} />
            <Route exact path="/Arrays" component={Arrays} />
            <Route exact path="/Objetos" component={Objetos} />
        </Switch>
    )
}

export default Rotas