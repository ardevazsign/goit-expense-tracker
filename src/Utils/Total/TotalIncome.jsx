import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/user/userSelectors';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors.js';
import Currency from '../../Utils/Total/Currency';
import arrow from '../../Assets/svg/Sprite.svg';
// styled
import {
  StyledWrapper,
  StyledSvgWrapper,
  StyledSvg,
  StyledHeaders,
  StyledMoney,
  StyledTotalWrapper,
} from '../../Utils/Total/StyledTotal';

const TotalIncome = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  let totalIncome = user?.transactionsTotal?.incomes;
  let currency = Currency(user.currency);

  const MockData = () => {
    if (!isLoggedIn) {
      currency = '$';
      totalIncome = '12.000';
      return `${currency}${totalIncome}`;
    }
    return `${currency}${totalIncome}`;
  };

  // function that put dot if sum have more than 3 digits
  const formatNumber = () => {
    const inputString = totalIncome?.toString();
    const isLessThanFourDigits = inputString?.length < 4;

    return isLessThanFourDigits
      ? inputString
      : inputString?.replace(/(\d)(?=(\d{3})+$)/g, '$1.');
  };

  // styles for mock-data
  const wrapperStyle = {
    backgroundColor: isLoggedIn ? '#171719' : '#FAFAFA',
  };

  const headerStyle = {
    color: isLoggedIn ? '#FAFAFA80' : '#11101C80',
  };

  const moneyStyle = {
    color: isLoggedIn ? '#FAFAFA' : '#11101C',
  };

  return (
    <StyledWrapper style={wrapperStyle}>
      <StyledSvgWrapper>
        <StyledSvg width={18} height={18}>
          <use href={arrow + '#icon-Arrow-UP'} />
        </StyledSvg>
      </StyledSvgWrapper>
      <StyledTotalWrapper>
        <StyledHeaders style={headerStyle}>Total income</StyledHeaders>
        <StyledMoney style={moneyStyle}>
          {isLoggedIn ? `${currency}${formatNumber()}` : MockData()}
        </StyledMoney>
      </StyledTotalWrapper>
    </StyledWrapper>
  );
};

export default TotalIncome;
