import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { calculateRem } from '../../../utils/helpers';
import { responsiveTheme } from '../../../utils/responsiveTheme';

const StyledNavBar = styled.div`
  z-index: 3;
  top: 0px;
  position: absolute;
  width: 100%;
`;
const StyledNavBarTopHeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background: ${({ theme }) => theme.colors.black};
  padding: 0 ${calculateRem(10)} 0 ${calculateRem(10)};
  ${breakpoint('mobile')`
      padding: 0 ${calculateRem(20)} 0 ${calculateRem(10)};
  `}
  height: ${calculateRem(60)};
  a img {
    height: ${calculateRem(25)};
    margin-right: ${calculateRem(5)};
  }
  justify-content: space-between;
  >div: first-child {
    display: flex;
    flex-direction: row;
  }
`;
const StyledNavBarBottomHeaderRow = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: row;
  width: 100%;
  > div {
    flex: 1 1;
    font-family: inherit;
    font-size: 12px;
    font-weight: 900;
    margin: 0;
    outline: none;
    padding: 15px 0;
    text-align: center;
    text-transform: lowercase;
    color: ${({ theme }) => theme.colors.white};
    &.active {
      border-bottom: 4px solid ${(props) => props.color};
    }
  }
`;
const StyledLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const StyledActionBar = styled.div`
  .btn-primary {
    background-color: ${(props) => props.color};
    border: 2px solid ${(props) => props.color};
    font-weight: 900;
    height: auto;
    font-size: ${calculateRem(14)};
    min-height: ${calculateRem(30)};
    min-width:${calculateRem(75)}
    padding: ${calculateRem(7)} ${calculateRem(12)};
    margin-top: ${calculateRem(12)};
    margin-right: ${calculateRem(5)};
    box-shadow:none;
  }
  .btn-primary:nth-child(2){
    background-color: ${({ theme }) => theme.colors.white};
    color: ${(props) => props.color};
    &:hover,:focus {
     background-color: ${(props) => props.color};
      color: ${({ theme }) => theme.colors.white};
      box-shadow:none;
    }
  }


`;

export {
  StyledNavBar,
  StyledNavBarTopHeaderRow,
  StyledNavBarBottomHeaderRow,
  StyledActionBar,
  StyledLogo,
};
