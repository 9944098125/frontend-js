import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import JavascriptRoute from './components/JavascriptRoute'
import Node from './components/NodeRoute';
import Python from './components/PythonRoute';
import Sql from './components/SqlRoute'
import React from './components/ReactRoute'

export default function App(){
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/javascript" component={JavascriptRoute} />
            <Route exact path="/node" component={Node} />
            <Route exact path="/python" component={Python} />
            <Route exact path="/sql" component={Sql} />
            <Route exact path="/react" component={React} />
        </Switch>
    );
};