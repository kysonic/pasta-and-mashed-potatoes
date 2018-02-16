import React from 'react';
import  './DishPage.css';

import DishCard from '../UI/DishCard/DishCard';

const DishPage = (props) => {
    return (
        <div className="DishPage">
            <DishCard dishId={props.match.params.id}></DishCard>
        </div>
    );
}

export default DishPage;