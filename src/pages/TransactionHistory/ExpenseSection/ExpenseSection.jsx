import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { FramerMotion } from 'Utils/framer-motion';
import { toast } from 'react-toastify';
import svg from '../../../Assets/svg/Sprite.svg';
// prettier-ignore
import { deleteTransactionThunk, getTransactionsThunk } from '../../../redux/transactions/transactionOperations';
//
// prettier-ignore
import { selectFilter, selectStartDate } from '../../../redux/filter/filterSelector';
import { selectIsLoggedIn } from '../../../redux/auth/authSelectors';
import Modal from 'components/Modal/Modal';
import { useModal } from '../../../hooks/useModal';
import OperationForm from '../../../Utils/Operations/OperationForm';
// Dependencies
// Components
import { TotalExpense, TotalIncome } from '../../../Utils/Total';
import { SectionTransaction } from '../../../components/SectionTransactionList/SectionTransaction';
import { TransactionsSearchTools } from '../../../components/TransactionsSearchTools/TransactionsSearchTools';
import { selectTransaction } from '../../../redux/transactions/transactionSelectors';

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
  TransactionsContainer,
  TransSubContainer,
  TransactionsCategory,
  TransactionsComment,
  TransactionsDate,
  TransactionsTime,
  TransactionsSum,
  EditButton,
  DeleteButton,
} from '../TransactionsHistory.styled';

const ExpenseSection = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const filter = useSelector(selectFilter);
  const date = useSelector(selectStartDate);
  const transactions = useSelector(selectTransaction);

  const { isOpened, openModal, closeModal } = useModal();
  const [editData, setEditData] = useState('');

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

  const handleDelete = (transactionId, transactionComment) => {
    dispatch(deleteTransactionThunk(transactionId));
    toast.success(`Transaction ${transactionComment} was deleted`);
  };

  const filterTransactions = transactions.filter(transaction =>
    transaction.comment
      .toLowerCase()
      .trim()
      .includes(filter.toLowerCase().trim())
  );

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  const isDeletedCategory = catName => {
    if (!catName) {
      return `Deleted Category`;
    }
    return catName;
  };

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
            {filterTransactions?.length ? (
              <TransactionsContainer>
                {filterTransactions?.map(transaction => (
                  <TransSubContainer key={transaction._id}>
                    <TransactionsCategory>
                      {isDeletedCategory(transaction.category?.categoryName)}
                    </TransactionsCategory>
                    <TransactionsComment>
                      {transaction.comment}
                    </TransactionsComment>
                    <TransactionsDate>{transaction.date}</TransactionsDate>
                    <TransactionsTime>{transaction.time}</TransactionsTime>
                    <TransactionsSum>{transaction.sum} / UAH</TransactionsSum>
                    <EditButton
                      onClick={() => {
                        setEditData(transaction);
                        openModal();
                      }}
                    >
                      <svg width={16} height={16}>
                        <use href={svg + '#icon-edit-2'}></use>
                      </svg>
                      <span>Edit</span>
                    </EditButton>
                    <DeleteButton
                      onClick={() =>
                        handleDelete(transaction._id, transaction.comment)
                      }
                    >
                      <svg width={16} height={16}>
                        <use href={svg + '#icon-trash-2'}></use>
                      </svg>
                      <span>Delete</span>
                    </DeleteButton>
                  </TransSubContainer>
                ))}
              </TransactionsContainer>
            ) : null}
            {filter.trim().length > 0 && !filterTransactions.length && (
              <TextError>
                We couldn't find any transactions matching your request.
              </TextError>
            )}
          </DivWrap>
        </DivWrapper>
      </FramerMotion>
      {isOpened ? (
        <Modal
          children={
            <OperationForm editData={editData} closeModal={closeModal} />
          }
          closeModal={closeModal}
        />
      ) : null}
    </MainHistory>
  );
};

export default ExpenseSection;
