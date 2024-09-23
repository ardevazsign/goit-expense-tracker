import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FramerMotion } from 'Utils/framer-motion';
import { Navigate, useLocation } from 'react-router-dom';
// Dependencies
// Components
import { SectionTransaction } from 'components/sectionTransactionList/SectionTransaction';
import { TransactionsSearchTools } from 'components/TransactionsSearchTools/TransactionsSearchTools';
import TransactionList from 'components/TransactionsList/TransactionList';
// pages
import ExpenseSection from './ExpenseSection/ExpenseSection';
import IncomeSection from './IncomeSection/IncomeSection';
// Redux
// prettier-ignore
import { selectTransaction } from '../../redux/transactions/transactionSelectors';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
import { selectFilter } from '../../redux/filter/filterSelector';

// Styled Components
import {
  MainHistory,
  DivWrapper,
  DivWrap,
  TextError,
} from './TransactionsHistory.styled';

const TransactionHistory = () => {
  const location = useLocation();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const filter = useSelector(selectFilter);
  const transactions = useSelector(selectTransaction);

  const [activeSection, setActiveSection] = useState(
    location.state?.from?.pathname === '/expenses' ? 'expenses' : 'incomes'
  );

  useEffect(() => {
    setActiveSection(
      location.state?.from?.pathname === '/expenses' ? 'expenses' : 'incomes'
    );
  }, [location]);

  // Hooks
  //
  // const formattedDate = `${date.year}-${String(date.month).padStart(
  //   2,
  //   '0'
  // )}-${String(date.day).padStart(2, '0')}`;
  //
  // useEffect(() => {
  //   //
  //   dispatch(getTransactionsThunk({ type: 'expenses', date: formattedDate }));
  // }, [dispatch, filter, formattedDate, date]);

  const filterTransactions = transactions.filter(transaction =>
    transaction.comment
      .toLowerCase()
      .trim()
      .includes(filter.toLowerCase().trim())
  );

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  //
  return (
    <MainHistory>
      {activeSection === 'expenses' ? <ExpenseSection /> : <IncomeSection />}
      {/* {activeSection === 'expenses' ? <IncomeSection /> : <ExpenseSection />} */}
      <FramerMotion
        $variant={activeSection ? 'allExpensesList' : 'allIncomesList'}
      >
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

export default TransactionHistory;
