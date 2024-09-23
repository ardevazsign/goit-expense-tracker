import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
import { TotalIncome, TotalExpense } from '../../Utils/Total';
import OperationForm from 'Utils/Operations/OperationForm';
import DoughnutComponent from 'components/TransactionsChart/TransactionsChart';
// styled
import {
  StyledHeaders,
  StyledSection,
  StyledText,
  StyledHeadersWrapper,
  StyledTotalUl,
  StyledMain,
  StyledWrapper,
} from './MainTransactionsPage.styled';
// thunk's
import { getTransactionsThunk } from '../../redux/transactions/transactionOperations';
import { Navigate } from 'react-router-dom';
import { FramerMotion } from 'Utils/framer-motion';

const MainTransactionsPage = () => {
  // adaptive design
  const isNotDesktop = useMediaQuery({ query: '(max-width: 1439.98px' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  // dispatch to get all transactions
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getTransactionsThunk({ type: 'expenses', date: '' }));
    }
  }, [dispatch, isLoggedIn]);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <StyledSection>
      {isNotDesktop && (
        <>
          <FramerMotion $variant="mainTransactionsHeaderNotDesktop">
            <StyledHeadersWrapper>
              <StyledHeaders>Expense log</StyledHeaders>
              <StyledText>
                Capture and organize every penny spent with ease! A clear view
                of your financial habits at your fingertips.
              </StyledText>
            </StyledHeadersWrapper>
          </FramerMotion>
          <FramerMotion $variant="mainTransactionsListNotDesktop">
            <StyledTotalUl>
              <li>
                <TotalIncome />
              </li>
              <li>
                <TotalExpense />
              </li>
            </StyledTotalUl>
          </FramerMotion>
          <FramerMotion $variant="operationForm">
            <OperationForm editData={null} />
          </FramerMotion>
          <FramerMotion $variant="doughnut">
            <StyledMain>
              <DoughnutComponent />
            </StyledMain>
          </FramerMotion>
        </>
      )}
      {isDesktop && (
        <>
          <FramerMotion $variant="mainTransactionsInfoDesktop">
            <StyledWrapper>
              <StyledHeadersWrapper>
                <StyledHeaders>Expense log</StyledHeaders>
                <StyledText>
                  Capture and organize every penny spent with ease! A clear view
                  of your financial habits at your fingertips.
                </StyledText>
              </StyledHeadersWrapper>
              <StyledTotalUl>
                <li>
                  <TotalIncome />
                </li>
                <li>
                  <TotalExpense />
                </li>
              </StyledTotalUl>
              <StyledMain>
                <DoughnutComponent />
              </StyledMain>
            </StyledWrapper>
          </FramerMotion>
          <FramerMotion $variant="operationForm">
            <OperationForm />
          </FramerMotion>
        </>
      )}
    </StyledSection>
  );
};

export default MainTransactionsPage;
