import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// Dependencies
// Components
import { TotalExpense, TotalIncome } from '../../../Utils/Total';
// Redux
//prettier-ignore
import { selectFilter, selectStartDate } from '../../../redux/filter/filterSelector';
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
} from '../TransactionsHistory.styled';

const IncomeSection = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const filter = useSelector(selectFilter);
  const date = useSelector(selectStartDate);

  const formattedDate = `${date.year}-${String(date.month).padStart(
    2,
    '0'
  )}-${String(date.day).padStart(2, '0')}`;

  useEffect(() => {
    //
    //
    dispatch(getTransactionsThunk({ type: 'incomes', date: formattedDate }));
  }, [dispatch, filter, formattedDate, date]);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <IncomeContainer>
      <IncomeSubContainer>
        <TitleHeader>All Income</TitleHeader>
        <Para>
          Track and celebrate every bit of earnings effortlessly! Gain insights
          into your total revenue in a snap.
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

export default IncomeSection;
