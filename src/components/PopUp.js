import React from 'react';
import PropTypes from 'prop-types';
import mancalamix from '../assets/images/mancalamix.png';
import pubg from '../assets/images/pubg.png';
import superjewels from '../assets/images/superjewels.png';
import moleslayer from '../assets/images/moleslayer.png';

//declaring popUp_ functional component 
const PopUp = ({ data, setModalOpen,locale }) => {
  const { name, region, monthlyPrice, HalfYearlyPrice, yearlyPrice,popUpIcon } = data;
  let popUpImage;
  switch (popUpIcon) {
    case 'mancalamix': popUpImage = mancalamix; break;
    case 'pubg': popUpImage = pubg; break;
    case 'superjewels': popUpImage = superjewels; break;
    default : popUpImage = moleslayer;
  }
  return (
        <div className="popUp_Container">
          <div className="popUp_Wrapper">
                <div className="popUp_upper">
                    <img
                    className="popUp_icon"
                    src={popUpImage}
                    alt="Event"
                />
              
                <div className="popUp_headingcontainer">
                    <div className="popUp_name">{name}</div>
                    <div className="popUp_country">{region}</div>
                </div>
            </div>
            <div className="popUp_priceHeading">{locale.pricing}</div>
            <div className="popUp_pricing">
              <div className="popUp_pricingRow">
                <div className="popUp_priceText">{locale.monthlyText}</div>
                <div className="popUp_pricingvalue">$ {monthlyPrice}</div>
              </div>
              <div className="popUp_pricingRow">
                <div className="popUp_priceText">{locale.halfYearlyText}</div>
                <div className="popUp_pricingvalue">$ {HalfYearlyPrice}</div>
              </div>
              <div className="popUp_pricingRow">
                <div className="popUp_priceText">{locale.yearlyText}</div>
                <div className="popUp_pricingvalue">$ {yearlyPrice}</div>
              </div>
            </div>
            <div className="popUp_button">
              <div onClick={()=>setModalOpen(false)} className="popUp_closebutton">
                {locale.close}
              </div>
            </div>
          </div>
        </div>
      );
}
//using proptypes for props type safety(gets removed in production build)
PopUp.propTypes = {
    setModalOpen:PropTypes.func,
    data:PropTypes.object
}
export default PopUp;