import React from 'react';
import { useHistory } from 'react-router';
import { ROUTES } from 'shared/constants/Routes';
import LoginView from './LoginView';

const LoginContainer: React.FC = () => {
  const { push } = useHistory();
  const handleLogin = () => {
    const user = {
      username: 'mack',
      password: 'mack',
    };
    localStorage.setItem('user', JSON.stringify(user));
    push(ROUTES.DASHBOARD);
  };
  return (
    <>
      <LoginView handleLogin={handleLogin} />
    </>
  );
};

export default LoginContainer;
