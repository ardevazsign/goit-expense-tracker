import { useSelector } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
// import { TotalIncome } from '../../Utils/Total';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
import LoginForm from 'components/LoginForm/LoginForm';

import { AdaptDiv, H2 } from 'pages/WelcomePage/WelcomePage.styled';
import {
  PlugDivs,
  // TableDivs,
  Texts,
  WrapForm,
  WrapperS,
} from 'pages/Register/Register.styled';

import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { selectUser } from '../../redux/user/userSelectors';
import BgImageWrapper from 'components/BgImageWrapper/BgImageWrapper';

export default function Login() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectUser);

  if (isLoggedIn) {
    toast.success(`Welcome, ${name}`);
    return <Navigate to="/transactions/expenses" />;
  }

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Sign in</title>
        </Helmet>
        <AdaptDiv>
          <WrapperS>
            <PlugDivs>
              {/* <TableDivs>{!isLoggedIn && <TotalIncome />}</TableDivs> */}
              <BgImageWrapper />
            </PlugDivs>
            <WrapForm>
              <H2>Sign In</H2>
              <Texts>
                Step into a world of hassle-free expense management! Your
                journey towards financial mastery begins here.
              </Texts>
              <LoginForm />
            </WrapForm>
          </WrapperS>
        </AdaptDiv>
      </div>
    </HelmetProvider>
  );
}
