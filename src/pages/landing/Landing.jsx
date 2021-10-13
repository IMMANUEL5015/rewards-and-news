import React from 'react';
import './landing.css';
import Header from '../../components/header/Header';
import AppleLogo from '../../svgs/group_9290.svg';
import GoogleLogo from '../../svgs/group_9289.svg';
import ScanLogo from '../../svgs/group_9306.svg';
import MatadorLogo from '../../svgs/group_9296.svg';
import SectionTwoLogo from '../../svgs/group_9408.svg';
import SectionElevenLogo from '../../svgs/group_9320.svg';
import Group9325 from '../../svgs/group_9325.svg';
import Group9326 from '../../svgs/group_9326.svg';
import Ellipse from '../../svgs/ellipse_3.svg';
import Footer from '../../components/footer/Footer';

function Landing() {
  return (
    <div className="Landing">
      <section className="intro" style={{
        backgroundImage: `url('/assets/group_9311.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'top'
      }}>
        <Header/>

        <div className="intro_main">
            <div className="show_on_mobile">
              <img src={MatadorLogo} alt="Matador Logo" className="matador_logo"/>
            </div>
            <div></div>
            <div className="intro_main_first_section">
              <h2>Investment</h2>
              <h2>The Amet Tincidunt</h2>
              <p>Matador Eu Luctus Nibh Egestas Sed. Nam At Venenati</p>

              <div className="download_from_store"> 
                <img src={AppleLogo} alt="Apple Logo" className="apple_store_logo"/>
                <img src={GoogleLogo} alt="Google Playstore Logo"/>
              </div>

              <div className="scan_to_download hide_on_mobile">
                <img src={ScanLogo} alt="Scan Logo"/>
              </div>
            </div>

            <div className="investments_app_img">
              <img src={MatadorLogo} alt="Matador Logo" className="matador_logo hide_on_mobile"/>
              <img src="/assets/mask_group_8.png" alt="Investments App"
                className="mask_group"/>
            </div>
        </div>
      </section>

      <section className="section_two">
        <div className="section_two_text">
          <p className="green">Investment</p>
          <p className="black_and_bold">The Easiest Way</p>
          <p className="small_light_text">
            Cras Rutrum Aliquet Massa, Eu Luctus Nibh Egestas Sed. 
            Nam At Venenatis Enim, Ac Malesuada Ex. 
            Etiam Blandit Neque Non Turpis Porta, A Sagittis Justo Feugiat.
          </p>
        </div>

        <div className="section_two_img">
          <img src={SectionTwoLogo} alt="Section Two Logo" className="section_two_logo"/>
        </div>
      </section>

      <section className="section_three">
        <img src="/assets/group_9407.png" alt="Group 9407"/>
      </section>

      <section className="section_four">
        <img src="/assets/pexels-monstera-6311487.png" alt="Black Woman Smiling Beautifully"/>
        <div className="section_four_text">
          <p className="bold_white">Investment</p>
          <p className="bold_white">The Easiest Way</p>
          <p className="small_white">
            Cras Rutrum Aliquet Massa, Eu Luctus Nibh Egestas Sed. 
            Nam At Venenatis Enim, Ac Malesuada Ex. 
            Etiam Blandit Neque Non Turpis Porta, A Sagittis Justo Feugiat.
          </p>
        </div>
      </section>

      <section className="section_five">
        <div className="section_five_text">
          <p className="green">Equity</p>
          <p className="black_and_bold">Investment</p>
          <p className="small_light_text">
            <span></span>
            <span>Cras Rutrum Aliquet Massa, Eu Luctus Nibh Egestas Sed. 
            Nam At Venenatis Enim, Ac Malesuada Ex. 
            Etiam Blandit Neque Non Turpis Porta, A Sagittis Justo Feugiat.</span>
          </p>

          <div className="empty_ps">
            <p></p>
            <p></p>
          </div>
        </div>
        
        <img src="/assets/mask_group_9.png" alt="Equity Investment"/>
      </section>

      <section className="section_six">
        <p>
          <span className="green">Fixed </span>
          <span className="black_and_bold"> Investment</span>
        </p>
      </section>

      <section className="section_seven">
        <div className="circled-group">
          <img src="/assets/group_9406.png" alt="Group 9406"/>
          <span className="green">Sole</span>
        </div>

        <div className="circled-group">
          <img src="/assets/group_9405.png" alt="Group 9405"/>
          <span className="green">Circle</span>
        </div>

        <div className="circled-group">
          <img src="/assets/group_9404.png" alt="Group 9404"/>
          <span className="green">Mutual</span>
        </div>

        <div className="circled-group">
          <img src="/assets/group_9403.png" alt="Group 9403"/>
          <span>Target</span>
        </div>
      </section>

      <section className="section_eight">
        <img src="/assets/mask_group_10.png" alt="Mask Group 10"/>

        <div className="section_eight_b">
          <p className="green_text">Sole</p>
          <p className="white">Investment</p>
          <p className="light_text">
            Cras Rutrum Aliquet Massa, Eu Luctus Nibh Egestas Sed.
          </p>
          <p className="light_text"> 
            Nam At Venenatis Enim, Ac Malesuada Ex
          </p>
        </div>
      </section>

      <section className="section_five">
        <div className="section_five_text">
          <p className="green">Circle</p>
          <p className="black_and_bold">Investment</p>
          <p className="small_light_text">
            <span></span>
            <span>Cras Rutrum Aliquet Massa, Eu Luctus Nibh Egestas Sed. 
              Nam At Venenatis Enim, Ac Malesuada Ex.</span>
          </p>

          <div className="empty_ps">
            <p></p>
            <p></p>
          </div>
        </div>
        
        <img src="/assets/group_9322.png" alt="Equity Investment" className="absdf"/>
      </section>

      <section className="section_nine">
        <div className="mutual_investment">
          <div></div>
          <img src="/assets/mask_group11.png" alt="Mutual Investment"/>
        </div>

        <div className="section_nine_text">
          <p className="green">Mutual</p>
          <p className="black_and_bold">Investment</p>
          <p className="small_light_text">
            <span>Cras Rutrum Aliquet Massa, Eu Luctus Nibh Egestas Sed.</span> 
            <span>Nam At Venenatis Enim, Ac Malesuada Ex.</span>
          </p>

          <div className="empty_ps">
            <p></p>
            <p></p>
          </div>
        </div>
      </section>

      <section className="section_eleven">
        <p className="green">Target</p>
        <p className="black_and_bold">Investment</p>
        <p className="small_light_text">
          Cras Rutrum Aliquet Massa, Eu Luctus Nibh Egestas Sed.
        </p> 
         <p className="small_light_text"> 
           Nam At Venenatis Enim, Ac Malesuada Ex
        </p>

        <div>
          <img src="/assets/group_9402.png" alt="Section Eleven" className="section_eleven_image"/>
          <img src={SectionElevenLogo} alt="Section Eleven Logo" className="section_eleven_logo"/>
        </div>
      </section>

      <section className="section_twelve">
        <div className="section_twelve_card">
          <img src={SectionElevenLogo} alt="Matador Logo"/>
          <p className="bold_white_text">Interdum Convallis</p>
          <p className="small_light_text">
            Lorem. Ut Dictum Faucibus Felis, Id Rutrum Erat Vestibulum In. 
            Sed Dapibus Nulla Eget Sapien Convallis, Eget Efficitur Eros Facilisis. 
            Nulla Elementum Bibendum Condimentum.
          </p>
        </div>

        <div className="section_twelve_card">
          <img src={Group9325} alt="Matador Logo"/>
          <p className="bold_white_text">Interdum Convallis</p>
          <p className="small_light_text">
            Lorem. Ut Dictum Faucibus Felis, Id Rutrum Erat Vestibulum In. 
            Sed Dapibus Nulla Eget Sapien Convallis, Eget Efficitur Eros Facilisis. 
            Nulla Elementum Bibendum Condimentum.
          </p>
        </div>

        <div className="section_twelve_card">
          <img src={Group9326} alt="Matador Logo"/>
          <p className="bold_white_text">Interdum Convallis</p>
          <p className="small_light_text">
            Lorem. Ut Dictum Faucibus Felis, Id Rutrum Erat Vestibulum In. 
            Sed Dapibus Nulla Eget Sapien Convallis, Eget Efficitur Eros Facilisis. 
            Nulla Elementum Bibendum Condimentum.
          </p>
        </div>
      </section>

      <section className="section_thirteen">
        <div className="round_box">
          <img src={Ellipse} alt="Ellipse 3"/>
        </div>

        <div className="secure_payment_method">
          <p className="green">Secure</p>
          <p className="black_and_bold">Payment Method</p>
          <p className="small_light_text">Cras Rutrum Aliquet Massa, Eu Luctus Nibh Egestas Sed.</p> 
          <p className="small_light_text">Nam At Venenatis Enim, Ac Malesuada Ex</p>

          <div className="yellow_squares">
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
      </section>

      <section className="section_fourteen">
        <div className="section_fourteen_content">
            <div>
                <p className="bold_white_text">Investment The Easiest Way</p>

                <div className="download_from_store"> 
                <img src={AppleLogo} alt="Apple Logo" className="apple_store_logo"/>
                <img src={GoogleLogo} alt="Google Playstore Logo"/>
              </div>
            </div>
            
            <div className="scan_to_download hide_on_mobile">
                <img src={ScanLogo} alt="Scan Logo"/>
            </div>
            
            <img src="/assets/mask_group13.png" alt="Mask Group 13" className="mask_group_13"/>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default Landing;
