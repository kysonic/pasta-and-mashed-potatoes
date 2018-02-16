import React from "react";
import "./Logo.css";
import logo from "../../../assets/logo.png";
import {Link} from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/">
            <div className="Logo">
                <img src={logo} alt="Pasta and Mashed potatoes"/>
                <div className="title">Pasta and mashed potatoes</div>
            </div>
        </Link>
    );
}

export default Logo;