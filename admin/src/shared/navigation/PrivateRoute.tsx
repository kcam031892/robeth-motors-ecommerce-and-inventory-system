import { Layout } from 'components';
import React from 'react';
import { Redirect, Route } from 'react-router';
import { ROUTES } from 'shared/constants/Routes';

type Props = {
  component: React.FC;
  path: string;
  exact?: boolean;
};
const PrivateRoute: React.FC<Props> = ({ component: Component, path, exact }: Props) => {
  return (
    <Layout>
      <Route
        path={path}
        exact={exact}
        render={() => (localStorage.getItem('user') ? <Component /> : <Redirect to={{ pathname: ROUTES.ROOT }} />)}
      />
    </Layout>
  );
};

export default PrivateRoute;
