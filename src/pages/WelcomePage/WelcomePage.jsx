import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import WelcomeHome from 'components/WelcomeHome/WelcomeHome';
// import { TotalIncome } from 'shared/Total';
import { AdaptDiv, PlugDiv, Wrapper } from './WelcomePage.styled';
import BgImageWrapper from 'components/BgImageWrapper/BgImageWrapper';

const WelcomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const sessionError = useSelector(selectSessionError);

  // useEffect(() => {
  //   if (isLoggedIn && sessionError) {
  //     toast.error('Session is expired. Please, log in again');
  //   }
  // }, [sessionError, isLoggedIn]);

  if (isLoggedIn) {
    return <Navigate to="/transactions/expenses" />;
  }

  return (
    <AdaptDiv>
      <Wrapper>
        <PlugDiv>
          {/* <TableDiv>{!isLoggedIn && {' <TotalIncome />'} }</TableDiv> */}
          {/* <Img src={ } alt="Main " /> */}
          <BgImageWrapper />
        </PlugDiv>
        <div>
          <WelcomeHome />
        </div>
      </Wrapper>
    </AdaptDiv>
  );
};

export default WelcomePage;
