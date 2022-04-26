import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router';
import ListPage from './pages/ListPage';
import { Box } from '@mui/system';

ProductFeature.propTypes = {};

function ProductFeature(props) {
  const match = useRouteMatch(); //lay duong dan thang cha /products
  return (
    <Box pt={4}>
      <Switch>
        <Route path={match.url} exact component={ListPage} />
      </Switch>
    </Box>
  );
}

export default ProductFeature;
