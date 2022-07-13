import React from 'react';
import {AiFillHtml5} from "react-icons/ai";
import {FaReact, FaSass, FaGithub, FaFigma, FaCss3Alt,} from "react-icons/fa";
import {DiJavascript, DiPhotoshop} from "react-icons/di";
import {SiRedux, SiTailwindcss} from "react-icons/si";

const Tools = () => {
    return (
        <>
            <section id="tools">
                <div className="container">
                    <div className="tools">
                        <h3 className="tools-title">Что мы используем</h3>
                        <h1 className="tools-title1">Технологии и инструменты</h1>
                        <input type="radio" name="tabs" id="all" className="radio"/>
                        <input type="radio" name="tabs" id="design" className="radio"/>
                        <input type="radio" name="tabs" id="front" className="radio"/>

                        <div className="tech">
                            <label htmlFor="all">
                                <h1 className="tech-name">ВСЕ</h1>
                            </label>
                            <label htmlFor="design">
                                <h1 className="tech-name">UX/UI DESIGN</h1>
                            </label>
                            <label htmlFor="front">
                                <h1 className="tech-name">FRONT-END</h1>
                            </label>
                        </div>
                        <div className="content content-2">
                            <div className="tool">
                                <div className="tool-div">
                                    <FaFigma style={{color: ""}} className="tool-logo"/>
                                    <p className="tool-name">Figma</p>

                                </div>
                                <div className="tool-div">
                                    <DiPhotoshop style={{color: ""}} className="tool-logo"/>
                                    <p className="tool-name">Adobe Photoshop</p>
                                </div>
                            </div>
                        </div>
                        <div className="content content-3">
                            <div className="tool">
                                <div className="tool-div">
                                    <AiFillHtml5 style={{color: ""}} className="tool-logo"/>
                                    <p className="tool-name">HTML</p>
                                </div>
                                <div className="tool-div">
                                    <FaCss3Alt style={{color: ""}} className="tool-logo"/>
                                    <p className="tool-name">CSS</p>
                                </div>
                                <div className="tool-div">
                                    <DiJavascript style={{color: ""}} className="tool-logo"/>
                                    <p className="tool-name">JavaScript</p>
                                </div>
                                <div className="tool-div">
                                    <SiTailwindcss style={{color: ""}} className="tool-logo"/>
                                    <p className="tool-name">Tailwind CSS</p>
                                </div>
                                <div className="tool-div">
                                    <FaSass style={{color: ""}} className="tool-logo"/>
                                    <p className="tool-name">Sass</p>
                                </div>
                                <div className="tool-div">
                                    <FaGithub style={{color: ""}} className="tool-logo"/>
                                    <p className="tool-name">Git & GitHub</p>
                                </div>
                                <div className="tool-div">
                                    <FaReact style={{color: ""}} className="tool-logo"/>
                                    <p className="tool-name">React</p>
                                </div>
                                <div className="tool-div">
                                    <SiRedux style={{color: ""}} className="tool-logo"/>
                                    <p className="tool-name">Redux</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Tools;