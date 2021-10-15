import React from 'react';
import './reward.css';
import Header from '../../components/header/Header';
import MatadorLogo from '../../svgs/group_9296.svg';
import InvestmentCard from '../../components/investmentCard';
import Footer from '../../components/footer/Footer';
import SecurePaymentCard from '../../components/securePaymentCard';

function Landing() {
    return (
        <div className="Landing">
            <section className="intro" style={{
                background: `transparent linear-gradient(243deg, #2AD999 0%, #189C7F 100%) 0% 0% no-repeat padding-box`,
                backgroundSize: 'cover',
                backgroundPosition: 'top'
            }}>
                <Header />

                <div className="intro_mainx">
                    <div className="show_on_mobile">
                        <img src={MatadorLogo} alt="Matador Logo" className="matador_logo" />
                    </div>
                    <div></div>
                    <div className="fifty">
                        <h2 className="h2">Reward</h2>
                        <p className="subtitle">MCras Rutrum Aliquet Massa, Eu Luctus Nibh Egestas Sed. Nam At Venenatis Enim, Ac Malesuada Ex. Etiam Blandit Neque. </p>


                        <div className="boxes">
                            <div className="box1"></div>
                            <div className="box1"></div>
                        </div>
                    </div>



                    <div className="investments_app_img">
                        <img src={MatadorLogo} alt="Matador Logo" className="matador_logo hide_on_mobile coin1" />
                        <img src="/assets/Reward1.png" alt="Investments App"
                            className="mask_group" />
                    </div>
                </div>
            </section>
            <section className="centered">
                <div className="blk-centered">
                    <p className="green">Buy</p>
                    <p className="black_bold">Gift Cards</p>
                    <p className="small_text">
                        Cras Rutrum Aliquet Massa, Eu Luctus Nibh Egestas Sed.
                        Nam At Venenatis Enim, Ac Malesuada Ex.
                        Etiam Blandit Neque
                        Non Turpis Porta, A Sagittis Justo Feugiat.
                    </p>
                </div>
            </section>

            <section className="section_three">
                <img src="/assets/giftCard1.png" alt="Group 9407" className="sm_img" />
            </section>


            <section className="black-bg2">
                <div className="blk">
                    <div className="img_cnt">
                        <div className="phone-img">
                            <img src="/assets/mobile.png" className="phone-img lay_img" alt="Mutual Investment" />
                        </div>
                    </div>

                    <div className="section_nine_text">
                        <div className="">

                            <p className="green">Loyalty</p>
                            <p className="white">Rewards</p>
                            <p className="small_text_white">
                                <span>Cras Rutrum Aliquet Massa, Eu Luctus Nibh Egestas Sed. <br /> Nam At Venenatis Enim, Ac Malesuada Ex</span>
                            </p>
                        </div>

                        <div className="boxes2">
                            <div className="box2"></div>
                            <div className="box2"></div>
                        </div>
                    </div>
                </div>
            </section>

            <SecurePaymentCard />
            <InvestmentCard />
            <Footer />
        </div>
    );
}

export default Landing;
