import React from 'react';
import { Route } from 'react-router-dom';
import UrlRouter from '../constants/UrlRouter';
import IndexTipoPagamento from '../components/paymentType/index';
import EditTipoPagamento from '../components/paymentType/edit';
import NewTipoPagamento from '../components/paymentType/new';

import { Switch } from 'react-router';

class RotasTipoPagamento extends React.Component {
  render() {
    return (
      <Switch>
        <Route component={IndexTipoPagamento} exact path={UrlRouter.tipoPagamento.index} />
        <Route component={EditTipoPagamento} exact path={UrlRouter.tipoPagamento.edit} />
        <Route component={NewTipoPagamento} exact path={UrlRouter.tipoPagamento.new} />
      </Switch>
    );
  }
}

export default RotasTipoPagamento;
