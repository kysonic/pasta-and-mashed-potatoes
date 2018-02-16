import React, {Component} from 'react';

import './Cart.css';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as basketActions from '../../../redux/ducks/basket';

import UserForm from '../UserForm/UserForm';

const mapStateToProps = (state)=>({basket:state.basket});
const mapDispatchToProps = (dispatch)=>bindActionCreators(basketActions,dispatch);


class Cart extends Component {
    state = {
        formOpened: false
    }
    render() {
        return (
            <div className="Cart">
                {this.props.basket.size ? this.renderCart() : <div className="empty-msg">There are no any items in cart...</div>}
            </div>
        );
    }
    renderCart() {
        return (
            <React.Fragment>
                <ul className="items">
                    {this.props.basket.map((item)=>(
                        <li className="item" key={item.get('id')+this.getItemType(item)+Math.random(2)}>
                            <div className="title">{item.get('title')}</div>
                            <div className="remove" onClick={(e)=>{this.removeItem(e,item)}}>Remove</div>
                        </li>
                    ))}
                    <li className="total">Total: <b>{this.calculateTotal()}$</b></li>
                </ul>
                {!this.state.formOpened ? <div className="continue" onClick={()=>this.setState({formOpened:true})}>Continue</div> : <UserForm clearBasket={this.props.clearBasket}></UserForm>}
            </React.Fragment>
        )
    }
    removeItem = (e,item)=>{
        const index = this.props.basket.findIndex((bItem)=>bItem.equals(item));
        this.props.removeBasketItem(index);
    }
    getItemType(item){
        if(item.get('picture')) return 'dish';
        if(item.get('price')) return 'extras';
        return 'type';
    }
    calculateTotal(){
        const calculated = this.props.basket.reduce((a,b)=>{
            // Duck typing
            const price = a.get ? a.get('price') : a;
            return price + b.get('price');
        },0);
        return calculated && calculated.toFixed && calculated.toFixed(2);
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);