import React from 'react';
import AboutPhoto from '../assets/img/Rectangle 42.png'

const About = () => {
    return (
        <section id="hero1">
            <div className="container">
                <div className="hero-general">
                    <div className="hero-general__block">
                        <div className="hero-general__center">
                            <h1 className="hero-general__h1">Кто мы есть</h1>
                            <h1 className="hero-general__h11">О нас</h1>
                            <p className="hero-general__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                eget eu vitae amet netus mattis integer proin.</p>
                            <p className="hero-general__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <img src={AboutPhoto} alt="" className="hero-general__img"></img>
                </div>
            </div>
        </section>
    );
};

export default About;