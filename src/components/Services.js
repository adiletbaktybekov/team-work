import React from 'react';
import {FiMonitor} from "react-icons/fi";
import {RiCodeSSlashFill, RiHandbagLine} from "react-icons/ri";
import {AiOutlineMobile} from "react-icons/ai";
const Services = () => {
    return (
        <section id="services">
            <div className="container">
                <div className="services">
                    <h1 className="services-title">Услуги</h1>
                    <p className="services-desc">Разрабатываем удобные и адаптивные веб сайты. От Landing page до <br/>интернет магазина. Рисуем дизайны веб-сайтов.</p>
                    <div className="services-basis">
                        <div className="services-block">
                            <div className="services-info">
                                <FiMonitor className="services-asset-img"/>
                                <h1 className="services-info-title">Дизайн сайта</h1>
                                <p className="services-info-desc">Создание и запуск вашего
                                    веб-сайта- это только начало. Он должен
                                    работать исправно.</p>
                            </div>
                        </div>
                        <div className="services-block">
                            <div className="services-info">
                                <RiCodeSSlashFill className="services-asset-img"/>
                                <h1 className="services-info-title">Веб-разработка</h1>
                                <p className="services-info-desc">Веб-разработка — процесс создания веб-сайта или веб-приложения. Основными этапами процесса являются веб-дизайн, вёрстка страниц.</p>
                            </div>
                        </div>
                        <div className="services-block">
                            <div className="services-info">
                                <AiOutlineMobile className="services-asset-img"/>
                                <h1 className="services-info-title">Адаптивные веб-сайты</h1>
                                <p className="services-info-desc">Адаптивный web-сайт автоматически подгоняется под размеры окна браузера.</p>
                            </div>
                        </div>
                        <div className="services-block">
                            <div className="services-info">
                                <RiHandbagLine className="services-asset-img"/>
                                <h1 className="services-info-title">Интернет магазины</h1>
                                <p className="services-info-desc">Интернет-магазин позволяет клиенту просматривать ассортимент продуктов,информацию о технических характеристиках продукта и ценах.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Services;