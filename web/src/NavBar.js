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
          {/* <li>
            <Link to='pagamento'>Pagamentos</Link>
          </li> */}
        </ul>
      </nav>
    );
  }
}
export default withRouter(NavBar);
