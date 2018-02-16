import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './HeaderBasket.css';

import {connect} from 'react-redux';

const mapStateToProps = (state)=>({basket:state.basket});

class HeaderBasket extends Component {
    render() {
        return (
            <div className="HeaderBasket">
                {this.props.basket.size ? this.renderBasket() : <span className="basket-message">Cart is empty...</span>}
            </div>
        );
    }
    renderBasket(){
        return (
            <Link to="/cart">
                Cart items: {this.props.basket.size}
            </Link>
        )
    }
}

export default connect(mapStateToProps)(HeaderBasket);