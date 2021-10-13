import {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './header.css';
import MatadorLogo from '../../svgs/group_9313.svg';

const Header = () => {
    const [show, setShow] = useState(false);
    const history = useHistory();

    return (
    <header className='header'>
        <section className="matador">
            <img style={
                {cursor: "pointer"}
            } src={MatadorLogo} alt="Matador Logo" onClick={() => history.push("/")}/>
            <span style={
                {cursor: "pointer"}
            } onClick={() => history.push("/")}>MATADOR</span>
        </section>

        <nav className="hide_on_mobile">
            <Link to='/about'>About Us</Link>
            <Link to='/reward'>Reward</Link>
            <Link to='/news'>News</Link>
            <a href='#'>FAQs</a>            
            <a href='#'>Careers</a>            
        </nav>

        <button className="hide_on_mobile">
            Create Account
        </button>

        {show && <nav className="show_on_mobile">
            <Link to='/about'>About Us</Link>
            <Link to='/reward'>Reward</Link>
            <Link to='/news'>News</Link>
            <a href='#'>FAQs</a>            
            <a href='#'>Careers</a> 
            <a href="#">Create Account</a>           
        </nav>}

        <span onClick={() => setShow(!show)} 
            className="hamburger_icon">
            <FontAwesomeIcon icon={faBars}/>
        </span>
    </header>)
}

export default Header;