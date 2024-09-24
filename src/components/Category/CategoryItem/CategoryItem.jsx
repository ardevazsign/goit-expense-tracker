import React from 'react';

import { CategoryListItem } from './CategoryItem.styled';
import Symbols from 'Assets/svg/Symbols';

export const CategoryItem = ({
  setCategoryId,
  closeModal,
  chooseCategories,
  _id,
  categoryName,
  deleteCategory,
  editCategory,
}) => {
  const handleOnClick = (catName, catId) => {
    chooseCategories(catName);
    setCategoryId(catId);
    closeModal();
  };
  return (
    <CategoryListItem>
      <p>{categoryName}</p>
      <div>
        <Symbols />
        <button
          onClick={() => {
            handleOnClick(categoryName, _id);
          }}
        >
          <svg width={16} height={16}>
            <use xlinkHref="#icon-check" />
          </svg>
        </button>
        <button onClick={editCategory}>
          <svg width={16} height={16}>
            <use xlinkHref="#icon-edit-2" />
          </svg>
        </button>
        <button type="button" onClick={() => deleteCategory(_id)}>
          <svg width={16} height={16}>
            <use xlinkHref="#icon-trash-2" />
          </svg>
        </button>
      </div>
    </CategoryListItem>
  );
};
