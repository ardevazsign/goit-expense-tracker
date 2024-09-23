import { useDispatch } from 'react-redux';
import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom/dist';
import { useAuth } from '../hooks';
import { refreshThunk } from '../redux/auth/authOperations';
import SharedLayout from './SharedLayout/SharedLayout';
import Loader from './Loader/Loader';

//
const Home = lazy(() => import('pages/WelcomePage/WelcomePage'));
const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));
const MainTransactions = lazy(() =>
  import('pages/MainTransactionsPage/MainTransactionsPage')
);
const TransactionsHistory = lazy(() =>
  import('pages/TransactionHistory/TransactionsHistoryPage')
);
const NotFound = lazy(() => import('../routes/NotFoundPage/NotFound'));

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <Suspense>
      {isRefreshing ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route
              path="/transactions/:transactionsType"
              element={<MainTransactions />}
            />

            <Route
              path="/transactions/expenses"
              element={<TransactionsHistory />}
            />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </Suspense>
  );
}

export default App;
