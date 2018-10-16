import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <div className="header">
            <div>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg"
                    alt="ether"
                />
            </div>
            <div className="title">
                <h1>FamilyCoin</h1>
            </div>
        </div>
    );
};

export default Header;
