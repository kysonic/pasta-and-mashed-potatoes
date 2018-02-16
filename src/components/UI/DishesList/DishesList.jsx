import React, {Component} from 'react';
import './DishesList.css';

import Dish from './Dish';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as dishesActions from '../../../redux/ducks/dishes';
import * as basketActions from '../../../redux/ducks/basket';

const mapStateToProps = (state)=>({types:state.types,dishes:state.dishes,loading:state.loading && state.loading.get('dishesIsLoading')});
const mapDispatchToProps = (dispatch)=>bindActionCreators(Object.assign(dishesActions,basketActions),dispatch);

class DishesList extends Component {
    componentDidMount(){
        if(!this.props.dishes.size && !this.props.loading) this.props.fetchDishes();
    }
    render() {
        return (
            <div className="DishesList">
                {this.props.loading && (<div className="loading"></div>)}
                {this.props.dishes.filter((dishData)=>this.props.type ? this.findTypeTitle(dishData.get('type'))===this.props.type : true).map(dishData=>(<Dish addBasketItems={this.props.addBasketItems} key={dishData.get('id')} data={dishData}></Dish>))}
            </div>
        );
    }
    findTypeTitle(typeId) {
        if(!this.props.types.size) return undefined;
        return this.props.types.find((type)=>type.get('id')===typeId).get('title').toLowerCase();
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DishesList);