import React from 'react';
import './news.css';
import Header from '../../components/header/Header';
import MatadorLogo from '../../svgs/group_9296.svg';
import InvestmentCard from '../../components/investmentCard';
import Footer from '../../components/footer/Footer';
import SecurePaymentCard from '../../components/securePaymentCard';

function News() {
    return (
        <div className="Landing">
            <section className="intro" style={{
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



                  
                </div>
            </section>
    <Footer />
        </div>
    );
}

export default News;
