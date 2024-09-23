import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// Dependencies
// Components
import { TotalExpense, TotalIncome } from '../../../Utils/Total';
// Redux
//prettier-ignore
import { selectFilter, selectStartDate } from '../../../redux/filter/filterSelector';
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
} from '../TransactionsHistory.styled';

const ExpenseSection = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const filter = useSelector(selectFilter);
  const date = useSelector(selectStartDate);

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

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
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
  );
};

export default ExpenseSection;
