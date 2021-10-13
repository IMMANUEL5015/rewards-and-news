import {Link} from 'react-router-dom';
import MatadorLogo from '../../svgs/group_9313.svg';
import Group9314 from '../../svgs/group_9314.svg';
import Group9315 from '../../svgs/group_9315.svg';
import Group9316 from '../../svgs/group_9316.svg';
import Group9317 from '../../svgs/group_9317.svg';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <h1>MATADOR</h1>
            <p>
                Mauris Hendrerit Enim Erat, Sit Amet Tincidunt Nulla Cursus Ut. 
                Fusce Ullamcorper Lobortis Viverra. Donec Cursus Eleifend Neque. 
                Nunc Finibus, Tellus Ac Dignissim Pulvinar, Sapien Dolor Fringilla Nisl, 
                Sagittis Aliquam Elit Mi Eu Lorem.
            </p>

            <div className="footer_section_two">
                <img src={MatadorLogo} alt="Matador Logo" />
                <h2>Matador Trust Limited</h2>
                <small>&copy; 2021 MATADOR Trust Limited. All Rights Reserved</small>
            </div>

            <div className="footer_office_information">
                <div>
                    <h3>Company</h3>
                    <p><Link to="/about">About Us</Link></p>
                    <p><Link to="/reward">Rewards</Link></p>
                    <p><Link to="/news">News</Link></p>
                    <p><a href="#">FAQs</a></p>
                    <p><a href="#">Careers</a></p>
                </div>
                <div>
                    <h3>Contact</h3>
                    <p className="orange">hello@matador.com</p>
                    <p className="orange">support@matador.com</p>
                    <p className="orange">+234 000 000 000 000</p>
                </div>
                <div className="hide_on_mobile">
                    <h3>Office</h3>
                    <p>
                    37B Block 3 Off 105102 Epe Express Road, Victoria Island, Lagos.
                    </p>
                </div> 
            </div>

            <div className="show_on_mobile company_address">
                <h3>Office</h3>
                <p>
                37B Block 3 Off 105102 Epe Express Road, Victoria Island, Lagos.
                </p>
            </div> 

            <div className="social_links">
                <div className="first_div">
                    <span>We're Social</span>
                    <a href="#"><img src={Group9314} alt="Group 9314"/></a>
                    <a href="#"><img src={Group9315} alt="Group 9315"/></a>
                    <a href="#"><img src={Group9316} alt="Group 9316"/></a>
                    <a href="#"><img src={Group9317} alt="Group 9317"/></a>
                </div>

                <div className="first_div">
                    <a href="#" className="terms_and_conditions_link">Terms and Conditions</a>
                    <a href="#">Privacy Policy</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;