import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { FramerMotion } from '../../../Utils/framer-motion';
// Dependencies
// Components
import { TotalExpense, TotalIncome } from '../../../Utils/Total';
import { SectionTransaction } from '../../../components/SectionTransactionList/SectionTransaction';
import { TransactionsSearchTools } from '../../../components/TransactionsSearchTools/TransactionsSearchTools';
import TransactionList from '../../../components/TransactionsList/TransactionList';
// Redux
//prettier-ignore
import { selectFilter, selectStartDate } from '../../../redux/filter/filterSelector';
import { selectTransaction } from '../../../redux/transactions/transactionSelectors';
import { getTransactionsThunk } from '../../../redux/transactions/transactionOperations';
import { selectIsLoggedIn } from '../../../redux/auth/authSelectors';
// Styled
import {
  IncomeContainer,
  IncomeSubContainer,
  TitleHeader,
  Para,
  ListHolder,
  ListItem,
  MainHistory,
  DivWrapper,
  DivWrap,
  TextError,
} from '../TransactionsHistory.styled';

const IncomeSection = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const filter = useSelector(selectFilter);
  const date = useSelector(selectStartDate);
  const transactions = useSelector(selectTransaction);

  const formattedDate = `${date.year}-${String(date.month).padStart(
    2,
    '0'
  )}-${String(date.day).padStart(2, '0')}`;

  useEffect(() => {
    //
    //
    dispatch(getTransactionsThunk({ type: 'incomes', date: formattedDate }));
  }, [dispatch, filter, formattedDate, date]);

  const filterTransactions = transactions.filter(transaction =>
    transaction.comment
      .toLowerCase()
      .trim()
      .includes(filter.toLowerCase().trim())
  );

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <MainHistory>
      <IncomeContainer>
        <IncomeSubContainer>
          <TitleHeader>All Income</TitleHeader>
          <Para>
            Track and celebrate every bit of earnings effortlessly! Gain
            insights into your total revenue in a snap.
          </Para>
        </IncomeSubContainer>
        <ListHolder>
          <ListItem>
            <TotalIncome />
          </ListItem>
          <ListItem>
            <TotalExpense />
          </ListItem>
        </ListHolder>
      </IncomeContainer>
      <FramerMotion $variant="allIncomesList">
        <DivWrapper>
          <TransactionsSearchTools />
          <DivWrap>
            <SectionTransaction />
            {filterTransactions?.length ? <TransactionList /> : null}
            {filter.trim().length > 0 && !filterTransactions.length && (
              <TextError>
                We couldn't find any transactions matching your request.
              </TextError>
            )}
          </DivWrap>
        </DivWrapper>
      </FramerMotion>
    </MainHistory>
  );
};

export default IncomeSection;
