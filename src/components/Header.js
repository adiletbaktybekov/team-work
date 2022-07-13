import React from 'react';
import Logo from '../assets/img/photo_2022-07-08_12-01-59.jpg'

const Header = () => {
    return (
        <section id="header">
            <div className="container">
                <div className="header">
                    <a href="#" className="header-title">Sonun Devs</a>
                    <div className="header-nav">
                        <a href="#" className="header-nav-item">О нас</a>
                        <a href="#" className="header-nav-item">Наши услуги</a>
                        <a href="#" className="header-nav-item">Портфолио</a>
                        <a href="#" className="header-nav-item">Наша команда</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;