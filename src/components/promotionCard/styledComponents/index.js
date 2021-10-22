import styled from 'styled-components';
import { calculateRem } from '../../../utils/helpers';

const StyledPromotionCard = styled.div``;
const StyledResponsivePromo = styled.div`
  margin-top:${calculateRem(60)};
  position: relative;
  height:100%;
  width: 100%;
  img {
   width: 100%;
    height: 85vh;
    margin-top: 50px;
  }
`;
const StyledResponsiveCaption = styled.div`
  z-index: 5;
  position: absolute;
  bottom: 0;
  width:100%;
  align-items: center;
  display:flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.75);
  button {
    height: ${calculateRem(50)};
    max-width: ${calculateRem(355)};
    padding: 0 ${calculateRem(32)};
    width: 100%;
    background-color: ${(props) => props.color};
    border-color: ${(props) => props.color};
    cursor: pointer;
    font-family: Interface, Arial, sans-serif;
    font-size: 20px;
    font-weight: 900;
    line-height: 1;
  }
  p {
    color: ${({ theme }) => theme.colors.white};
  }
  p:nth-child(1) {
    font-size: 16px;
    margin-bottom: 10px;
    text-transform: uppercase;
  }
  p:nth-child(2) {
    font-size: ${calculateRem(28)};
    font-weight: ${calculateRem(700)};
    margin-bottom: ${calculateRem(14)};
  }
  p:nth-child(4) {
    margin-top: ${calculateRem(10)};
    padding: ${calculateRem(10)};
    font-size: ${calculateRem(12)};
    background-color: rgba(0, 0, 0, 0.75);
  }
`;

export { StyledPromotionCard,StyledResponsivePromo,StyledResponsiveCaption };