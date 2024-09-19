import React from 'react';
import AuthNav from '../AuthNav/AuthNav';
import AllUsersTab from 'components/AllUsersTab/AllUsersTab';

import {
  WelcomeContent,
  HeaderOne,
  HeaderTwo,
  HeaderSpan,
  WelcomeMessage,
} from './WelcomeHome.styled';

function WelcomeHome() {
  return (
    <>
      <WelcomeContent>
        <HeaderOne>Expense log</HeaderOne>
        <HeaderTwo>
          Manage Your{''} <HeaderSpan>Finances</HeaderSpan> {''}Masterfully!
        </HeaderTwo>
        <WelcomeMessage>
          ExpenseTracker effortlessly empowers you to take control of your
          finances! With intuitive features, it simplifies the process of
          tracking and managing expenses, allowing for a stress-free mastery
          over your financial world.
        </WelcomeMessage>
        <AuthNav />
      </WelcomeContent>
      <AllUsersTab />
    </>
  );
}

export default WelcomeHome;
