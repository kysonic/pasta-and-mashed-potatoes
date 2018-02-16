import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as dishesActions from '../../../redux/ducks/dishes';
import * as basketActions from '../../../redux/ducks/basket';

import './DishCard.css';

import Extras from '../Extras/Extras';

const mapStateToProps = (state)=>({types:state.types,dishes:state.dishes,loading:state.loading && state.loading.get('dishesIsLoading')});
const mapDispatchToProps = (dispatch)=>bindActionCreators(Object.assign(dishesActions,basketActions),dispatch);

class DishCard extends Component {
    componentDidMount(){
        if(!this.props.dishes.size && !this.props.loading) this.props.fetchDishes();
    }
    render() {
        const dishData = this.props.dishes.find((dishData)=>dishData.get('id')===+this.props.dishId);
        return (dishData ? this.renderDish(dishData) : null)
    }
    renderDish(dishData){
        const extras = dishData && dishData.get('extras');
        return (
            <div className="DishCard">
                {this.props.loading && (<div className="loading"></div>)}
                <div className="left">
                    <div className="avatar" style={{backgroundImage:`url(${dishData&&dishData.get('picture')})`}}></div>
                </div>
                <div className="right">
                    <div className="title">{dishData.get('title')}</div>
                    <div className="subtitle">{this.findTypeTitle(dishData.get('type'))}</div>
                    <div className="desc">
                        Lorem ipsum dolores sir amit, lores ipsum dolores sir amit.
                        Lorem ipsum dolores sir amit, lores ipsum dolores sir amit.
                        Lorem ipsum dolores sir amit, lores ipsum dolores sir amit.
                    </div>
                    <div className="price">Price: <b>{dishData.get('price')}</b>$</div>
                    {extras&&extras.size ? <Extras extrasIds={dishData.get('extras')}></Extras> : null}
                    <div className="button" onClick={(e)=>this.props.addBasketItems(dishData)}>Buy</div>
                </div>
            </div>
        )
    }
    findTypeTitle(typeId) {
        if(!this.props.types.size) return undefined;
        const found = this.props.types.find((type)=>+type.get('id')===typeId);
        return found ? found.get('title') : 'Unknown';
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DishCard);