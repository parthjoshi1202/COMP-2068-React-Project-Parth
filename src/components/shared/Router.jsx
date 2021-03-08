import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Data from '../Data/Data.jsx';

const Router = () => {
    return ( 
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/data" component={Data}/>
        </Switch>
     );
};
 
export default Router;