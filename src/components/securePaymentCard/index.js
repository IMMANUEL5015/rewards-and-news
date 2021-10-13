import React from 'react';
import Ellipse from '../../svgs/ellipse_3.svg';
const SecurePaymentCard = () => {
    return (

       
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
    );
}

export default SecurePaymentCard;