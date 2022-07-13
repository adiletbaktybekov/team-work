import React from 'react';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer-general">
                    <div>
                        <h1 className="footer-general__h1">SONUN DEVS</h1>
                    </div>
                    <div className="footer-general__nav">
                        <a href="#" className="footer-general__a">Главная</a>
                        <a href="#" className="footer-general__a">О нас</a>
                        <a href="#" className="footer-general__a">Наши услуги</a>
                        <a href="#" className="footer-general__a">Портфолио</a>
                        <a href="#" className="footer-general__a">Наша команда</a>
                        <div></div>
                    </div>
                </div>

                <div className="footer-general__left">
                    <h1>Напишите нам:</h1>

                    <div className="footer-general__left--icon">
                        <div><i className="fa-brands fa-telegram"></i></div>
                        <a href="#">kgadiletofficial</a>
                    </div>

                    <div className="footer-general__left--icon">
                        <div><i className="fa-brands fa-instagram"></i></div>
                        <a href="#">kgadilet_official</a>
                    </div>

                    <div className="footer-general__left">
                        <h1>Позвоните нам:</h1>


                        <div className="footer-general__left--icon">
                            <div><i className="fa-solid fa-phone"></i></div>
                            <a href="tel:+996 773 514 789">+996 773 514 789</a>
                        </div>
                    </div>
                </div>
            </div>

        </footer>

    );
};

export default Footer;