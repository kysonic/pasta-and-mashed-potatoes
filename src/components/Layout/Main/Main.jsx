import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../../Pages/HomePage';
import CartPage from '../../Pages/CartPage';
import DishPage from '../../Pages/DishPage';

import './Main.css';

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/cart' component={CartPage}/>
                    <Route exact path='/:type' component={HomePage}/>
                    <Route exact path='/dish/:id' component={DishPage}/>
                </Switch>
            </div>
        )
    }
    componentWillUnmount(){
        this.unsubscribe();
    }
}

export default Main;