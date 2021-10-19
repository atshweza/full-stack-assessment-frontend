/*
*
* PromotionCard
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { StyledPromotionCard,StyledResponsivePromo,StyledResponsiveCaption } from './styledComponents';

function PromotionCard({promoInfo}) {
  return (<StyledPromotionCard>
    {promoInfo&&<StyledResponsivePromo>
                <img src={promoInfo.landingPageImage} alt={`landingPageImage`} />
                <StyledResponsiveCaption color={promoInfo.color}>
                  <p>{promoInfo.promtion.offerSubHeader}</p>
                  <p>{promoInfo.promtion.offerHeader}</p>
                  <Button>{promoInfo.promtion.JoinLabel}</Button>
                  <p>{promoInfo.promtion.termsAndConditionsMgs}</p>
                </StyledResponsiveCaption>
          </StyledResponsivePromo>}
  </StyledPromotionCard>)
}

export default PromotionCard;

PromotionCard.propTypes = {promoInfo:PropTypes.object };