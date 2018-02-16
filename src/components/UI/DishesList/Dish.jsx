import React from 'react';
import './Dish.css';
import {Link} from 'react-router-dom';

const Dish = (props) => {
    return (
        <div className="Dish">
            <div className="left">
                <div className="avatar" style={{backgroundImage:`url(${props.data.get('picture')})`}}></div>
            </div>
            <div className="center">
                <div className="title">
                    <Link to={`/dish/${props.data.get('id')}`}>{props.data.get('title')}</Link>
                </div>
            </div>
            <div className="right">
                <div className="button" onClick={(e)=>props.addBasketItems(props.data)}>Buy</div>
            </div>
        </div>
    );
}

export default Dish;