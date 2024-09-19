import React from 'react';
import { ReactComponent as IconLogo } from '../../Assets/svg/logo.svg';
import css from './Logo.module.css';

function Logo() {
  return (
    <div className={css.logoContainer}>
      <IconLogo />
      <span>Expense Tracker</span>
    </div>
  );
}

export default Logo;
