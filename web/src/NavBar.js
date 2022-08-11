import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import UrlRouter from './constants/UrlRouter';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <nav className='navbar'>
        <ul className='menu'>
          <li data-cy={`welcome`}>
            <Link to={UrlRouter.home}>Welcome</Link>
          </li>
          <li data-cy={`usuarios`}>
            <Link to={UrlRouter.usuario.index}>Usuários</Link>
          </li>
          <li data-cy={`tipo-pagamento`}>
            <Link to={UrlRouter.tipoPagamento.index}>Tipo de Pagamento</Link>
          </li>
          <li data-cy={`despesa`}>
            <Link to={UrlRouter.despesa.index}>Despesa</Link>
          </li>
          <li data-cy={`renda`}>
            <Link to={UrlRouter.renda.index}>Renda</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
export default withRouter(NavBar);
