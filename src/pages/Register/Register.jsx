import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
import RegisterForm from 'components/RegisterForm/RegisterForm';
// import { TotalIncome } from '../../Utils/Total';
import BgImageWrapper from 'components/BgImageWrapper/BgImageWrapper';

import { AdaptDiv, H2 } from 'pages/WelcomePage/WelcomePage.styled';
import {
  PlugDivs,
  // TableDivs,
  Texts,
  WrapForm,
  WrapperS,
} from './Register.styled';

import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { selectUser } from '../../redux/user/userSelectors';

export default function Register() {
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
          <title>Registration</title>
        </Helmet>
        <AdaptDiv>
          <WrapperS>
            <PlugDivs>
              {/* <TableDivs>{!isLoggedIn && <TotalIncome />}</TableDivs> */}
              <BgImageWrapper />
            </PlugDivs>
            <WrapForm>
              <H2>Sign Up</H2>
              <Texts>
                Step into a world of hassle-free expense management! Your
                journey towards financial mastery begins here.
              </Texts>
              <RegisterForm />
            </WrapForm>
          </WrapperS>
        </AdaptDiv>
      </div>
    </HelmetProvider>
  );
}
