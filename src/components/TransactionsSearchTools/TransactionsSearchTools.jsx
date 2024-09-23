import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';
//prettier-ignore
import { selectFilter, selectStartDate } from '../../redux/filter/filterSelector';
import { setFilter, setStartDate } from '../../redux/filter/filterSlice';
//Styles
import {
  SearchContainer,
  DatePickerHolder,
  SearchForm,
  SearchInput,
  DatePickerWrapper,
  IconSvg,
} from './TransactionsSearchTools.styled';
import svg from '../../Assets/svg/Sprite.svg';

export const TransactionsSearchTools = () => {
  const filter = useSelector(selectFilter);
  const startDate = useSelector(selectStartDate);
  const dispatch = useDispatch();

  const [tempFilter, setTempFilter] = useState(filter);

  const onFilterChange = e => {
    setTempFilter(e.target.value);
  };

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
    if (date) {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      dispatch(setStartDate({ year, month, day }));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(setFilter(tempFilter));
  };

  return (
    <SearchContainer>
      <SearchForm onSubmit={handleSubmit}>
        <label>
          <SearchInput
            placeholder="Search for anything.."
            type="text"
            value={tempFilter}
            onChange={onFilterChange}
          />
          <button type="submit">
            <IconSvg width={20} height={20}>
              <use href={svg + '#icon-search'}></use>
            </IconSvg>
          </button>
        </label>
      </SearchForm>
      <DatePickerHolder>
        <DatePickerWrapper
          selected={selectedDate}
          value={startDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          placeholderText="dd/mm/yyyy"
        />
        <IconSvg width={20} height={20}>
          <use href={svg + '#icon-calendar'}></use>
        </IconSvg>
      </DatePickerHolder>
    </SearchContainer>
  );
};
