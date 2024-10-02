import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
import WelcomeHome from 'components/WelcomeHome/WelcomeHome';
// import { TotalIncome } from '../../Utils/Total';
import { AdaptDiv, PlugDiv, Wrapper } from './WelcomePage.styled';
// TableDiv
import BgImageWrapper from 'components/BgImageWrapper/BgImageWrapper';

const WelcomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/transactions/expenses" />;
  }

  return (
    <AdaptDiv>
      <Wrapper>
        <PlugDiv>
          {/* <TableDiv>{!isLoggedIn && <TotalIncome />}</TableDiv> */}
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
