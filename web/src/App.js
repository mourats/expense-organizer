import React from 'react';
import { Header } from './components/Header';
import WelcomeIndex from './components/welcome/index';
import RotasUsuario from './routes/RotasUsuario';
import NavBar from './NavBar';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import UrlRouter from './constants/UrlRouter';
import history from './history';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      abaAtiva: 'welcome',
    };
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
              </Switch>
            </Route>
          </div>
        </>
      </Router>
    );
  }
}

export default App;
