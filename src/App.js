import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import JavascriptRoute from './components/JavascriptRoute'

export default function App(){
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/javascript" component={JavascriptRoute} />
        </Switch>
    );
};