import React from 'react';
import {
  SectionContainer,
  CategoryTxt,
  CommentTxt,
  DateTxt,
  TimeTxt,
  SumTxt,
} from './sectionTransaction.styled';

export const SectionTransaction = () => {
  return (
    <SectionContainer>
      <CategoryTxt>Category</CategoryTxt>
      <CommentTxt>Comment</CommentTxt>
      <DateTxt>Date</DateTxt>
      <TimeTxt>Time</TimeTxt>
      <SumTxt>Sum</SumTxt>
      <p>Actions</p>
    </SectionContainer>
  );
};
