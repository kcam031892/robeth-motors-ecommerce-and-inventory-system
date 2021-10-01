import { DashboardPage, LoginPage, ProductListPage } from 'pages';
import React from 'react';
import { Route, Switch } from 'react-router';
import { ROUTES } from 'shared/constants/Routes';
import PrivateRoute from './PrivateRoute';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.ROOT} component={LoginPage} />
      <PrivateRoute exact path={ROUTES.DASHBOARD} component={DashboardPage} />
      <PrivateRoute exact path={ROUTES.PRODUCT_MANAGEMENT.PRODUCT.LIST} component={ProductListPage} />
      <Route path="*">
        <h1>Not FOund..</h1>
      </Route>
    </Switch>
  );
};

export default Routes;
