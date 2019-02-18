import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from '../containers/Main';


class Routes extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" render={props => <Main {...props} />} />
        </Switch>
      </>
    );
  }
}

export default Routes;
