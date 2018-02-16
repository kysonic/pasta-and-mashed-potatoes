import React from 'react';

import Header from './Layout/Header/Header';
import SiteBar from './Layout/SideBar/SiteBar';
import Main from './Layout/Main/Main'; 

import './RootComponent.css';

const RootComponent = ()=>{
    return (
        <div className="RootComponent">
            <Header></Header>
            <div className="content">
                <SiteBar></SiteBar>
                <Main></Main>
            </div>
        </div>
    )
};

export default RootComponent;