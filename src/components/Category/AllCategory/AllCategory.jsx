import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  getCategoriesThunk,
  createCategoryThunk,
  deleteCategoryThunk,
  updateCategoryThunk,
} from '../../../redux/category/categoryOperations';
import { selectCategories } from '../../../redux/category/categorySelectors';
import { selectIsLoggedIn } from '../../../redux/auth/authSelectors';
import { CategoryForm } from '../CategoryForm/CategoryForm';
import { CategoryItem } from 'components/Category/CategoryItem/CategoryItem.jsx';
import { schemaCategoryInput } from 'Utils/schemas';
import {
  AllCategoryText,
  CategoryContainer,
  CategoryList,
  CategoryTransactionType,
  CategoryPlugInfo,
} from './AllCategory.styled';

export const AllCategory = ({
  type,
  chooseCategories,
  closeModal,
  setCategoryId,
}) => {
  const categories = useSelector(selectCategories);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const [currentCategory, setCurrentCategory] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [addedCategories, setAddedCategories] = useState([]);

  const categoriesListRef = useRef();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaCategoryInput),
  });

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getCategoriesThunk())
        .unwrap()
        .catch(e => {
          toast.error('Oops, something went wrong. Try to reload page');
        });
    }
  }, [dispatch, isLoggedIn, type]);

  useEffect(() => {
    if (categories[type]) {
      setAddedCategories(categories[type]);
    }
  }, [categories, type]);

  const editCategory = category => {
    setCurrentCategory(category);
    reset({ categoryName: category.categoryName });
    setIsEditing(true);
  };

  const onCancel = () => {
    reset({ categoryName: '' });
    setCurrentCategory(null);
    setIsEditing(false);
  };

  const submit = ({ categoryName }) => {
    const categoryDate = { type, categoryName };

    const addedCategory = addedCategories.find(
      category => category.categoryName === categoryName
    );

    if (addedCategory) {
      toast.warning('Category with this name already exists');
      return;
    }

    if (currentCategory) {
      dispatch(updateCategoryThunk({ id: currentCategory._id, categoryName }))
        .unwrap()
        .catch(e => {
          toast.error('Oops, something went wrong. Try to reload page');
        });
      reset({ categoryName: '' });
      setIsEditing(false);
    } else {
      dispatch(createCategoryThunk(categoryDate))
        .unwrap()
        .then(() => {
          if (categoriesListRef.current) {
            categoriesListRef.current.scrollTop =
              categoriesListRef.current.scrollHeight;
          }
        })
        .catch(e => {
          toast.error('Oops, something went wrong. Try to reload page');
        });
    }
    reset();
    setCurrentCategory(null);
  };

  const deleteCategory = id => {
    if (currentCategory && currentCategory._id === id) {
      reset({ categoryName: '' });
      setCurrentCategory(null);
      setIsEditing(false);
    }

    dispatch(deleteCategoryThunk(id))
      .unwrap()
      .catch(e => {
        toast.error('Oops, something went wrong. Try to reload page');
      });
  };

  return (
    <CategoryContainer>
      <CategoryTransactionType>{type}</CategoryTransactionType>
      <AllCategoryText>All categories</AllCategoryText>
      <CategoryList ref={categoriesListRef}>
        {categories[type]?.length ? (
          categories[type]?.map(category => (
            <CategoryItem
              setCategoryId={setCategoryId}
              closeModal={closeModal}
              chooseCategories={chooseCategories}
              key={category._id}
              {...category}
              deleteCategory={() => deleteCategory(category._id)}
              editCategory={() => editCategory(category)}
            />
          ))
        ) : (
          <CategoryPlugInfo>There are no categories yet😭</CategoryPlugInfo>
        )}
      </CategoryList>
      <CategoryForm
        isEditing={isEditing}
        currentCategory={currentCategory}
        handleSubmit={handleSubmit}
        submit={submit}
        register={register}
        errors={errors}
        onCancel={onCancel}
      />
    </CategoryContainer>
  );
};
