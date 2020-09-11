import React from 'react';
import {Link } from 'react-router-dom';
const Header = () => {
    return (
        <div> 
                <div className="nav">
                    <div className = "nav-item">
                        <Link className="nav-link" to = "/summary">Claimsummary</Link>
                    </div>
                    <div className ="nav-item ">
                        <Link className="nav-link text-center" to = "/login">logout</Link>
                    </div>   
                </div>
        </div>
    );
};

export default Header;