import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/user/userSelectors';
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

const TotalExpense = () => {
  const user = useSelector(selectUser);

  const totalExpense = user?.transactionsTotal?.expenses;
  const currency = Currency(user.currency);

  const formatNumber = () => {
    const inputString = totalExpense?.toString();
    const isLessThanFourDigits = inputString?.length < 4;

    return isLessThanFourDigits
      ? inputString
      : inputString?.replace(/(\d)(?=(\d{3})+$)/g, '$1.');
  };

  return (
    <StyledWrapper>
      <StyledSvgWrapper>
        <StyledSvg width={18} height={18}>
          <use href={arrow + '#icon-Arrow-DWN'} />
        </StyledSvg>
      </StyledSvgWrapper>
      <StyledTotalWrapper>
        <StyledHeaders>Total expense</StyledHeaders>
        <StyledMoney>{`${currency}${formatNumber()}`}</StyledMoney>
      </StyledTotalWrapper>
    </StyledWrapper>
  );
};

export default TotalExpense;
