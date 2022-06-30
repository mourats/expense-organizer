import React from 'react';
import { Route } from 'react-router-dom';
import UrlRouter from '../constants/UrlRouter';
import IndexUsuario from '../components/user/index';
import EditUsuario from '../components/user/edit';
import NewUsuario from '../components/user/new';

import { Switch } from 'react-router';

class RotasUsuario extends React.Component {
  render() {
    return (
      <Switch>
        <Route component={IndexUsuario} exact path={UrlRouter.usuario.index} />
        <Route component={EditUsuario} exact path={UrlRouter.usuario.edit} />
        <Route component={NewUsuario} exact path={UrlRouter.usuario.new} />
      </Switch>
    );
  }
}

export default RotasUsuario;
