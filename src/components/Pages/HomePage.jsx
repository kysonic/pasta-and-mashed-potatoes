import React from 'react';
import './HomePage.css';

import DishesList from '../UI/DishesList/DishesList';

const HomePage = (props)=> {
    return (
        <div className="HomePage">
            <DishesList type={props.match.params.type}></DishesList>
        </div>
    )
}


export default HomePage;