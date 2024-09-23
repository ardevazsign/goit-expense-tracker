import styled from 'styled-components';

export const TransSubContainer = styled.div`
  display: flex;

  margin-bottom: 14px;
  align-items: center;

  color: rgba(250, 250, 250, 0.4);

  font-family: Suisse Intl;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (min-width: 768px) {
    font-size: 16px;
  }
  @media (min-width: 1440px) {
  }
`;

export const TransactionsCategory = styled.p`
  width: 59px;
  margin: 0 14px 0 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (min-width: 768px) {
    width: 83px;
    margin: 0 31px 0 32px;
  }
  @media (min-width: 1440px) {
    width: 97px;
    margin: 0 60px 0 40px;
  }
`;

export const TransactionsComment = styled.p`
  width: 56px;
  margin-right: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (min-width: 768px) {
    width: 89px;
    margin-right: 26px;
  }
  @media (min-width: 1440px) {
    width: 120px;
    margin-right: 74px;
  }
`;

export const TransactionsDate = styled.p`
  width: 56px;
  margin-right: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (min-width: 768px) {
    width: 74px;
    margin-right: 26px;
  }
  @media (min-width: 1440px) {
    width: 130px;
    margin-right: 70px;
  }
`;

export const TransactionsTime = styled.p`
  width: 38px;
  margin-right: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (min-width: 768px) {
    width: 52px;
    margin-right: 25px;
  }
  @media (min-width: 1440px) {
    width: 54px;
    margin-right: 84px;
  }
`;

export const TransactionsSum = styled.p`
  width: 90px;
  margin-right: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (min-width: 768px) {
    width: 96px;
    margin-right: 40px;
  }
  @media (min-width: 1440px) {
    width: 90px;
    margin-right: 90px;
  }
`;

export const EditButton = styled.button`
  display: flex;
  padding: 14px;
  justify-content: center;
  align-items: center;

  background: #0c0d0d;

  border-radius: 40px;
  margin-right: 8px;
  transition: background-color 250ms ease-in-out;

  /* Скрыть текст при ширине экрана до 1440px */
  @media (max-width: 1440px) {
    span {
      display: none;
    }
  }

  stroke: white;
  fill: transparent;
  &:hover {
    stroke: black;
  }

  &:hover {
    background-color: #0ef387;
  }

  @media (min-width: 1440px) {
    padding: 14px 30px;
    gap: 10px;

    color: #fafafa;

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.32px;

    span {
      display: inline-block;
    }

    &:hover {
      color: #0c0d0d;
    }
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  padding: 14px;
  justify-content: center;
  align-items: center;

  background: #0c0d0d;

  border-radius: 40px;
  transition: background-color 250ms ease-in-out;

  stroke: white;
  fill: transparent;
  &:hover {
    stroke: black;
  }

  @media (max-width: 1440px) {
    span {
      display: none;
    }
  }

  &:hover {
    background-color: #0ef387;
  }

  @media (min-width: 1440px) {
    padding: 14px 30px;
    gap: 10px;

    color: #fafafa;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.32px;
    margin-right: 8px;

    span {
      display: inline-block;
    }

    &:hover {
      color: #0c0d0d;
    }
  }
`;

export const TransactionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 245px;

  &::-webkit-scrollbar {
    width: 8px;
    margin-right: 20px;
    height: 12px;
  }

  &::-webkit-scrollbar-thumb {
    width: 8px;
    height: 150px;
    border-radius: 12px;
    background: rgba(250, 250, 250, 0.2);
    margin-right: 20px;
  }

  @media (max-width: 768px) {
    width: 500px;
  }

  @media (min-width: 768px) {
    overflow-y: auto;
    overflow-x: hidden;
    height: 230px;
    width: 704px;
  }

  @media (min-width: 1440px) {
    height: 238px;
    width: 1240px;
    margin-right: 20px;
  }
`;
