import React from 'react';
import StaffPhotoAdilet from "../assets/img/DSC_2042.JPG"
import StaffPhotoSultan from "../assets/img/photo_2022-07-07_21-44-08.jpg"
import StaffPhotoKunsuluu from "../assets/img/photo_2022-07-07_21-54-49.jpg"
import {FiInstagram} from "react-icons/fi";
import {BsLinkedin} from "react-icons/bs";

const Staff = () => {
    return (
        <section id="staff">
            <div className="container">
                <div className="staff">
                    <h2 className="staff-title">Наши сотрудники</h2>
                    <h1 className="staff-title2">Мы работаем с командой</h1>
                    <div className="staff-div">
                        <div className="staff-block">
                            <div className="staff-asset">
                                <img src={StaffPhotoKunsuluu} alt="" className="staff-img"/>
                            </div>
                            <div className="staff-info">
                                <h1 className="staff-info-title">Эгембердиева Кунсулуу</h1>
                                <p className="staff-info-desc">UX/UI дизайнер</p>
                                <span className="staff-network">
                                        <FiInstagram/>
                                    <BsLinkedin/>
                                </span>
                            </div>
                        </div>
                        <div className="staff-block">
                            <div className="staff-asset">
                                {/*<img src={} alt="" className="staff-img"/>*/}
                            </div>
                            <div className="staff-info">
                                <h1 className="staff-info-title">Жаныбек Орозбеков</h1>
                                <p className="staff-info-desc">Front-end Разработчик

                                </p>
                                <span className="staff-network">
                                        <FiInstagram/>
                                    {/*<a href=""></a>*/}
                                    <BsLinkedin/>
                                </span>
                            </div>
                        </div>
                        <div className="staff-block">
                        <div className="staff-asset">
                            <img src={StaffPhotoAdilet} alt="" className="staff-img"/>
                        </div>
                        <div className="staff-info">
                            <h1 className="staff-info-title">Адилет Бактыбеков</h1>
                            <p className="staff-info-desc">Front-end Разработчик

                            </p>
                            <span className="staff-network">
                                        <FiInstagram/>
                                {/*<a href=""></a>*/}
                                <BsLinkedin/>
                                </span>
                        </div>
                    </div>
                        <div className="staff-block">
                            <div className="staff-asset">
                                <img src={StaffPhotoSultan} alt="" className="staff-img"/>
                            </div>
                            <div className="staff-info">
                                <h1 className="staff-info-title">Султан Максутов</h1>
                                <p className="staff-info-desc">Front-end Разработчик

                                </p>
                                <span className="staff-network">
                                        <FiInstagram/>
                                    {/*<a href=""></a>*/}
                                    <BsLinkedin/>
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Staff;