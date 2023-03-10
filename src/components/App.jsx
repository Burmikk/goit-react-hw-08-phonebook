import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactPage from './ContactPage/ContactPage';
import NavBar from './NavBar/NavBar';
import SignUp from 'pages/SignUp/SignUp';
import LogIn from 'pages/LogIn/LogIn';
import AuthLayout from './AuthLayout/AuthLayout';
import styles from './app.module.scss';

export const App = () => {
  return (
    <AuthLayout>
      <div className={styles.container}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <NavBar />
          <Routes>
            <Route path="/" element={<ContactPage />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthLayout>
  );
};
