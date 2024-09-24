import styled from 'styled-components';

export const DecorContainer = styled.div`
  width: 303px;
  height: 121px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #fafafa;
  padding: 32px 23px;
  display: flex;
  justify-content: flex-start;
  gap: 22px;
  align-items: center;
`;
export const ArrowContainer = styled.div`
  width: 43px;
  height: 43px;
  flex-shrink: 0;
  border-radius: 13px;
  background: #0ef387;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 7px;
`;
export const DecorTitle = styled.p`
  color: rgba(17, 16, 28, 0.5);
  font-family: 'Suisse Intl';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
`;
export const BalanceHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 22px;
`;

export const Balance = styled.span`
  color: #11101c;
  font-family: "Suisse Int'l";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const PercentageHolder = styled.div`
  width: 58px;
  height: 22px;
  flex-shrink: 0;
  border-radius: 13px;
  background: rgba(2, 177, 90, 0.15);
  display: flex;
  justify-content: center;
`;
export const Percentage = styled.span`
  color: #02b15a;
  font-family: 'Suisse Intl';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
`;
