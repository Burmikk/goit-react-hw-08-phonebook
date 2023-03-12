import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactPage from './ContactPage/ContactPage';
import NavBar from './NavBar/NavBar';
import SignUp from 'pages/SignUp/SignUp';
import LogIn from 'pages/LogIn/LogIn';
import AuthLayout from './AuthLayout/AuthLayout';
import PrivatRoute from './PrivatRoute/PrivatRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import PageNotFound from 'pages/PageNotFound/PageNotFound';
import Info from 'pages/Info/Info';
import styles from './app.module.scss';

export const App = () => {
  return (
    <AuthLayout>
      <div className={styles.container}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <NavBar />
          <Routes>
            <Route path="/" element={<Info />} />
            <Route element={<PublicRoute />}>
              <Route path="/register" element={<SignUp />} />
              <Route path="/login" element={<LogIn />} />
            </Route>

            <Route element={<PrivatRoute />}>
              <Route path="/contacts" element={<ContactPage />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthLayout>
  );
};
