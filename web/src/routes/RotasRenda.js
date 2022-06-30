import React from 'react';
import { Route } from 'react-router-dom';
import UrlRouter from '../constants/UrlRouter';
import IndexRenda from '../components/income/index';
import EditRenda from '../components/income/edit';
import NewRenda from '../components/income/new';
import { Switch } from 'react-router';

class RotasRenda extends React.Component {
  render() {
    return (
      <Switch>
        <Route component={IndexRenda} exact path={UrlRouter.renda.index} />
        <Route component={EditRenda} exact path={UrlRouter.renda.edit} />
        <Route component={NewRenda} exact path={UrlRouter.renda.new} />
      </Switch>
    );
  }
}

export default RotasRenda;
