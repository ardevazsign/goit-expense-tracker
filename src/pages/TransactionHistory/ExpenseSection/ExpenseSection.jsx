import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { FramerMotion } from 'Utils/framer-motion';
// Dependencies
// Components
import { TotalExpense, TotalIncome } from '../../../Utils/Total';
import { SectionTransaction } from '../../../components/SectionTransactionList/SectionTransaction';
import { TransactionsSearchTools } from '../../../components/TransactionsSearchTools/TransactionsSearchTools';
import TransactionList from '../../../components/TransactionsList/TransactionList';

// Redux
//prettier-ignore
import { selectTransaction } from '../../../redux/transactions/transactionSelectors';
import {
  selectFilter,
  selectStartDate,
} from '../../../redux/filter/filterSelector';
//prettier-ignore
import { getTransactionsThunk } from '../../../redux/transactions/transactionOperations';
import { selectIsLoggedIn } from '../../../redux/auth/authSelectors';
// Styled-components
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

const ExpenseSection = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const filter = useSelector(selectFilter);
  const date = useSelector(selectStartDate);
  const transactions = useSelector(selectTransaction);

  // functions redux hooks
  const formattedDate = `${date.year}-${String(date.month).padStart(
    2,
    '0'
  )}-${String(date.day).padStart(2, '0')}`;

  useEffect(() => {
    //
    //
    dispatch(getTransactionsThunk({ type: 'expenses', date: formattedDate }));
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
          <TitleHeader>All Expense</TitleHeader>
          <Para>
            View and manage every transaction seamlessly! Your entire financial
            landscape, all in one place.
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
      <FramerMotion $variant="allExpensesList">
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

export default ExpenseSection;
