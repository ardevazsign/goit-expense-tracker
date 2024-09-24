import React from 'react';

import {
  CancelButton,
  EditButton,
  InputInfo,
  ErrorInfoText,
  CategoryMainForm,
  CategoryInput,
} from './CategoryForm.styled';
import { FramerMotion } from 'Utils/framer-motion';

export const CategoryForm = ({
  isEditing,
  currentCategory,
  handleSubmit,
  errors,
  onCancel,
  submit,
  register,
}) => (
  <FramerMotion $variant="categoryForm">
    <CategoryMainForm action="" onSubmit={handleSubmit(submit)}>
      <InputInfo $error={errors?.categoryName}>
        {isEditing ? 'Edit category' : 'New category'}
      </InputInfo>
      <CategoryInput
        type="text"
        placeholder="Enter the text"
        {...register('categoryName')}
        autoFocus={currentCategory !== null}
        key={currentCategory?._id}
        $error={errors?.categoryName}
      />
      <EditButton $error={errors?.categoryName}>
        {isEditing ? 'Edit' : 'Add'}
      </EditButton>
      {isEditing && <CancelButton onClick={onCancel}>Cancel</CancelButton>}
    </CategoryMainForm>
    {errors?.categoryName && (
      <ErrorInfoText>{errors.categoryName.message}</ErrorInfoText>
    )}
  </FramerMotion>
);
