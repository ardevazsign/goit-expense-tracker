import React from 'react';
//prettier-ignore
import { TransSubContainer, TransactionsCategory, TransactionsComment, TransactionsDate, TransactionsTime, TransactionsSum,
} from './sectionTransaction.styled';

export const SectionTransaction = () => {
  return (
    <TransSubContainer>
      <TransactionsCategory>Category</TransactionsCategory>
      <TransactionsComment>Comment</TransactionsComment>
      <TransactionsDate>Date</TransactionsDate>
      <TransactionsTime>Time</TransactionsTime>
      <TransactionsSum>Sum</TransactionsSum>
      <p>Actions</p>
    </TransSubContainer>
  );
};
