import React from "react";
import './Header.css';
import Logo from './Logo';
import HeaderBasket from '../../UI/HeaderBasket/HeaderBasket';

const Header = () => {
    return (
        <div className="Header">
            <div className="block">
                <Logo></Logo>
            </div>
            <div className="block">
                <HeaderBasket></HeaderBasket>
            </div>
        </div>
    );
}

export default Header;