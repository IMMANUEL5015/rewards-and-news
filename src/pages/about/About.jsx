import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import MatadorLogo from '../../svgs/group_9296.svg';
import Group9313 from '../../svgs/group_9313_about.svg';
import Group9325 from '../../svgs/group_9325.svg';
import './about.css';

const About = () => {
    return (
        <div className="about">
            <section className="about-intro">
                <Header/>

                <div className="welcome-text">
                    <h1>Meet</h1> 
                    <h1 style={{marginBottom: "20px"}}>Our Team</h1>
                    <p>
                        Cras Rutrum Aliquet Massa, Eu Luctus Nibh Egestas Sed.
                    </p> 
                    <p>
                        Nam At Venenatis Enim, Ac Malesuada Ex. Etiam Blandit Neque.
                    </p>
                </div>

                <div className="about-section-two">
                    <div className="logo-and-text">
                        <img src={Group9313} alt="Group 9313"/>

                        <div>
                            <h2>Our</h2>
                            <h2>Mission</h2>
                        </div>
                    </div>

                    <div className="about-mission">
                        <p>
                            Mauris Hendrerit Enim Erat, Sit Amet Tincidunt Nulla Cursus Ut. 
                            Fusce Ullamcorper Lobortis Viverra. Donec Cursus Eleifend Neque. 
                            Nunc Finibus, Tellus Ac Dignissim Pulvinar, Sapien Dolor Fringilla Nisl, 
                            Sagittis Aliquam Elit Mi Eu Lorem. Ut Dictum Faucibus Felis, Id Rutrum Erat 
                            Vestibulum In. Sed Dapibus Nulla Eget Sapien Convallis
                        </p>
                    </div>
                </div>

                <div className="about-ceo">
                    <div className="about-ceo-text"> 
                        <div>
                            Cras Rutrum Aliquet Massa, Eu Luctus Nibh Egestas Sed Nam At Venenatis Enim.
                            Ac Malesuada Ex. Etiam Blandit Neque Non Turpis Porta, A Sagittis Justo Feugiat.
                        </div>
                        
                        <div>
                            <h2>Name Here</h2>
                            <h3>CEO Matador</h3>
                        </div>
                    </div>

                    <img src="/assets/pexels-cottonbro-4255415.png" alt="CEO"/>
                </div>

                <div className="team" style={{
                    backgroundImage: `url("/assets/mask_group_18.png")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundColor: "#191919"
                }}>
                    <h2>
                        Our Top <span className="team-title"> Team</span>
                    </h2>

                    <div className="team-members">
                        <div className="team-member">
                            <div></div>
                            <p>Name Here</p>
                            <small>Founder/CEO</small>
                        </div>

                        <div className="team-member">
                            <div></div>
                            <p>Name Here</p>
                            <small>Founder/CEO</small>
                        </div>

                        <div className="team-member">
                            <div></div>
                            <p>Name Here</p>
                            <small>Founder/CEO</small>
                        </div>

                        <div className="team-member">
                            <div></div>
                            <p>Name Here</p>
                            <small>Founder/CEO</small>
                        </div>

                        <div className="team-member">
                            <div></div>
                            <p>Name Here</p>
                            <small>Founder/CEO</small>
                        </div>

                        <div className="team-member">
                            <div></div>
                            <p>Name Here</p>
                            <small>Founder/CEO</small>
                        </div>

                        <div className="team-member">
                            <div></div>
                            <p>Name Here</p>
                            <small>Founder/CEO</small>
                        </div>

                        <div className="team-member">
                            <div></div>
                            <p>Name Here</p>
                            <small>Founder/CEO</small>
                        </div>
                    </div>
                </div>

                <div className="become-a-part">
                    <div className="xyz">
                        <div className="zyx">
                            <div> </div>
                            <h3>Interdum Convallis</h3>
                            <p>
                                Lorem. Ut Dictum Faucibus Felis, Id Rutrum Erat Vestibulum In. 
                                Sed Dapibus Nulla Eget Sapien Convallis, 
                                Eget Efficitur Eros Facilisis. 
                                Nulla Elementum Bibendum Condimentum.
                            </p>
                        </div>

                        <div className="zyx">
                            <div> </div>
                            <h3>Interdum Convallis</h3>
                            <p>
                                Lorem. Ut Dictum Faucibus Felis, Id Rutrum Erat Vestibulum In. 
                                Sed Dapibus Nulla Eget Sapien Convallis, 
                                Eget Efficitur Eros Facilisis. 
                                Nulla Elementum Bibendum Condimentum.
                            </p>
                        </div>

                        <div className="zyx">
                            <div> </div>
                            <h3>Interdum Convallis</h3>
                            <p>
                                Lorem. Ut Dictum Faucibus Felis, Id Rutrum Erat Vestibulum In. 
                                Sed Dapibus Nulla Eget Sapien Convallis, 
                                Eget Efficitur Eros Facilisis. 
                                Nulla Elementum Bibendum Condimentum.
                            </p>
                        </div>
                    </div>

                    <div className="join-the-team">
                        <img className="logo-one" src={MatadorLogo} alt="Matador Logo"/>

                        <div>
                            <p className="fp">Become a Part of Our Team</p>
                            <p className="sp">
                                Cras Rutrum Aliquet Massa, Eu Luctus Nibh Egestas Sed. 
                                Nam At Venenatis Enim, Ac Malesuada Ex
                            </p>
                            <button>Join Our Team</button>
                        </div>

                        <img className="logo-two" src={Group9325} alt="Matador Logo Two"/>
                    </div>
                </div>

                <Footer/>
            </section>
        </div>
    )
}

export default About;