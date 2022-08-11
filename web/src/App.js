import React from 'react';
import { Header } from './components/Header';
import WelcomeIndex from './components/welcome/index';
import RotasUsuario from './routes/RotasUsuario';
import RotasTipoPagamento from './routes/RotasTipoPagamento';
import NavBar from './NavBar';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, matchPath } from 'react-router';
import { Route } from 'react-router-dom';
import UrlRouter from './constants/UrlRouter';
import history from './history';
import RotasDespesa from './routes/RotasDespesa';
import RotasRenda from './routes/RotasRenda';
import { getRoutesObjects } from './util/util';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      abaAtiva: 'welcome',
    };
  }
  componentDidMount() {
    window.location.getCurrentPath = () =>
      getRoutesObjects(UrlRouter).find(route => matchPath(window.location.pathname, route))?.path;
  }
  render() {
    return (
      <Router history={history}>
        <>
          <Header />
          <div className='container'>
            <NavBar />
            <Route path={UrlRouter.home}>
              <Switch>
                <Route component={WelcomeIndex} exact path={UrlRouter.home} />
                <Route
                  component={RotasUsuario}
                  path={UrlRouter.usuario.index}
                />
                <Route
                  component={RotasTipoPagamento}
                  path={UrlRouter.tipoPagamento.index}
                />
                <Route
                  component={RotasDespesa}
                  path={UrlRouter.despesa.index}
                />
                <Route
                  component={RotasRenda}
                  path={UrlRouter.renda.index}
                />
              </Switch>
            </Route>
          </div>
        </>
      </Router>
    );
  }
}

export default App;
