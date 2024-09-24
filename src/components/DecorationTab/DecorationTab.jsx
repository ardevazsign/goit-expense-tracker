import React from 'react';
import arrow from '../../Assets/svg/arrow.svg';
import {
  ArrowContainer,
  Balance,
  BalanceHolder,
  DecorContainer,
  DecorTitle,
  InfoContainer,
  Percentage,
  PercentageHolder,
} from './DecorativeTab.styled';

function DecorationTab() {
  return (
    // <div className={className}>
    <DecorContainer>
      <ArrowContainer>
        <img src={arrow} alt="arrow" />
      </ArrowContainer>
      <InfoContainer>
        <DecorTitle>Your Balance</DecorTitle>
        <BalanceHolder>
          <Balance>$632.000</Balance>
          <PercentageHolder>
            <Percentage>+1.29%</Percentage>
          </PercentageHolder>
        </BalanceHolder>
      </InfoContainer>
    </DecorContainer>
    // </div>
  );
}

export default DecorationTab;
