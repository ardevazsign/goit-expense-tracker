import React from 'react';
import { WrapBtn, SignUp, SignIn } from './AuthNav.styled';

function AuthNav() {
  return (
    <WrapBtn>
      <SignUp to="/register">Sign Up</SignUp>
      <SignIn to="/login">Sign In</SignIn>
    </WrapBtn>
  );
}

export default AuthNav;
