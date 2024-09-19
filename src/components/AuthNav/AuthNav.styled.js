import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const WrapBtn = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-bottom: 40px;
  margin-top: 30px;

  @media (min-width: 768px) and (max-width: 1439.8px) {
    margin-bottom: 36px;
    margin-top: 40px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 166px;
    margin-top: 40px;
  }
`;

export const SignIn = styled(NavLink)`
  display: inline-flex;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 40px;
  border: 1px solid rgba(250, 250, 250, 0.4);
  color: #fafafa;
  font-family: Suisse Intl;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.32px;
  text-decoration: none;
  &:hover {
    /* border-radius: 40px; */
    /* border: 1px solid #0ef387; */
    border-color: #0ef387;
  }
  @media (min-width: 768px) and (max-width: 1439.8px) {
    font-size: 16px;
  }

  @media (min-width: 1440px) {
    font-size: 16px;
  }
`;

export const SignUp = styled(NavLink)`
  display: inline-flex;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 40px;
  background: #0ef387;
  color: #0c0d0d;
  font-family: Suisse Intl;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.32px;
  text-decoration: none;

  &:hover {
    /* border-radius: 40px; */
    background: #0ebb69;
  }
  @media (min-width: 768px) and (max-width: 1439.8px) {
    font-size: 16px;
  }

  @media (min-width: 1440px) {
    font-size: 16px;
  }
`;

// .authNavContainer {
//   background: #0c0d0d;
//   display: inline-flex;
//   justify-content: center;
//   align-items: center;
//   gap: 20px;
// }

// .authNavBtn {
//   width: 145px;
//   display: inline-flex;
//   padding: 14px 44px;
//   justify-content: center;
//   align-items: center;
//   gap: 10px;
//   border-radius: 40px;
//   background: #0ef387;
//   border: 1px solid #0ef387;
//   color: #0c0d0d;
//   font-family: "Suisse Intl";
//   font-size: 16px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: normal;
//   letter-spacing: -0.32px;
//   cursor: pointer;
//   outline: none;
//   box-shadow: none;
// }

// .authNavBtn:hover {
//     color:  #FAFAFA;
//     background: transparent;
//     border: 1px solid rgba(250, 250, 250, 0.40);

// }
