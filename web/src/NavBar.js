import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import UrlRouter from './constants/UrlRouter';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <nav className='navbar'>
        <ul className='menu'>
          <li>
            <Link to={UrlRouter.home}>Welcome</Link>
          </li>
          <li>
            <Link to={UrlRouter.usuario.index}>Usuários</Link>
          </li>
          <li>
            <Link to={UrlRouter.tipoPagamento.index}>Tipo de Pagamento</Link>
          </li>
          <li>
            <Link to={UrlRouter.despesa.index}>Despesa</Link>
          </li>
          <li>
            <Link to={UrlRouter.renda.index}>Renda</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
export default withRouter(NavBar);
