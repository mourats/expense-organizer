import React from 'react';
import { Route } from 'react-router-dom';
import UrlRouter from '../constants/UrlRouter';
import IndexDespesa from '../components/expense/index';
import EditDespesa from '../components/expense/edit';
import NewDespesa from '../components/expense/new';
import { Switch } from 'react-router';

class RotasDespesa extends React.Component {
  render() {
    return (
      <Switch>
        <Route component={IndexDespesa} exact path={UrlRouter.despesa.index} />
        <Route component={EditDespesa} exact path={UrlRouter.despesa.edit} />
        <Route component={NewDespesa} exact path={UrlRouter.despesa.new} />
      </Switch>
    );
  }
}

export default RotasDespesa;
