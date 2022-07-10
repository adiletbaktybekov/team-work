import React from 'react';
import Logo from '../assets/img/photo_2022-07-08_12-01-59.jpg'

const Header = () => {
    return (
        <section id="header">
            <div className="container">
                <div className="header">
                    {/*<h1 className="header-title">SONUN DEVS</h1>*/}
                    <img src={Logo} alt="" className="header-logo"/>
                    <div className="header-nav">
                        <li className="header-nav-item">Главная</li>
                        <li className="header-nav-item">О нас</li>
                        <li className="header-nav-item">Наши услуги</li>
                        <li className="header-nav-item">Портфолио</li>
                        <li className="header-nav-item">Наша команда</li>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;