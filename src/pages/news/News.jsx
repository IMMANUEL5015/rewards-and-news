import React from 'react';
import './news.css';
import Header from '../../components/header/Header';
import MatadorLogo from '../../svgs/group_9296.svg';
import Footer from '../../components/footer/Footer';
import SearchSvg from "../../svgs/search.svg"

function News() {

    const LatestNews = () => {
        return (
            <div className="">

            </div>
        )
    }
    return (
        <div className="Landing">
            <section className="topside" style={{
                background: `transparent linear-gradient(243deg, #2AD999 0%, #189C7F 100%) 0% 0% no-repeat padding-box`,
                backgroundSize: 'cover',
                backgroundPosition: 'top'
            }}>
                <Header />

                <div className="intro_main">
                    <div className="show_on_mobile">
                        <img src={MatadorLogo} alt="Matador Logo" className="matador_logo" />
                    </div>
                    <div></div>
                    <div className="">
                        <h2 className="title">Our News</h2>
                        <p className="subtitle">Cras Rutrum Aliquet Massa, Eu Luctus Nibh Egestas Sed. Nam <br /> At Venenatis Enim, Ac Malesuada Ex. Etiam Blandit Neque. </p>



                    </div>
                    <div className="select-div">
                        <input placeholder="Search" type="text" className="text-input">

                        </input>
                        <select className="text-input">
                            <option className="select" defaultValue>All Categories</option>
                            <option value="1">category 1</option>
                            <option value="2">category 2</option>
                        </select>
                        <img src={SearchSvg} alt="Matador Logo" className="matador_logo" />
                    </div>


                </div>
            </section>

            <section className="newx">
                <h2 className="top-headline">Top Headline</h2>

                <div className="big-card">
                    <img src="/assets/pexels-anastasia-shuraeva-7539959@2x.png" alt="Investments App"
                        className="news_image" />

                    <div className="card-details">
                        <div className="">
                            <p className="details">5 hr ago - Investment - Matador</p>
                            <h3 className="headline">News Headline</h3>

                            <p>Cras Rutrum Aliquet Massa, Eu Luctus Nibh Egestas Sed. Nam At Venenatis Enim, Ac Malesuada Ex. Etiam Blandit Neque Non Turpis Porta, A Sagittis Justo Feugiat.</p>
                        </div>
                    </div>

                </div>


                <h2 className="top-headline">Latest News</h2>

                <div className="latest-news">
                    {[1, 2, 3, 4].map(() => {
                        return (

                            <div className="news-card">
                                <img src="/assets/phone.png" alt="Investments App"
                                    className="sm-img" />
                                <div className="card-details">
                                    <div className="">
                                        <p className="sm-details">5 hr ago - Investment - Matador</p>
                                        <h3 className="small-headline">Interdum Convallis</h3>

                                        <p>Cras Rutrum Aliquet Massa, Eu Luctus Nibh Egestas Sed. Nam At Venenatis Enim, Ac Malesuada Ex. Etiam Blandit Neque Non Turpis Porta, A Sagittis Justo Feugiat.</p>
                                    </div>
                                </div>
                            </div>


                        )
                    })}
                </div>

            </section>
            <Footer />
        </div>
    );
}

export default News;
