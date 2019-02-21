import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainContainer from '../containers/MainContainer';

//TODO: delete react router
class Routes extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" render={props => <MainContainer {...props} />} />
        </Switch>
      </>
    );
  }
}

export default Routes;
