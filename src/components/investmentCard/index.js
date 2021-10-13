import React from 'react'
import AppleLogo from '../../svgs/group_9290.svg';
import GoogleLogo from '../../svgs/group_9289.svg';
import ScanLogo from '../../svgs/group_9306.svg';

const InvestmentCard = () =>{
    return(

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
    )
}

export default InvestmentCard