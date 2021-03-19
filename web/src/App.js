import React from 'react';
import { Header } from './components/Header';
import UserIndex from './components/user/index';
import PaymentTypeIndex from './components/paymentType/index';
import DespesaIndex from './components/expense/index';
import RendaIndex from './components/income/index';
import WelcomeIndex from './components/welcome/index';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
import moment from 'moment';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      abaAtiva: 'welcome',
    };
  }
  render() {
    return (
      <>
        <Header />
        <div className='container'>
          <Tabs
            activeKey={this.state.state}
            onChange={(key) => this.setState({ abaAtiva: key })}
          >
            <TabPane tab='Welcome' key='welcome'>
              <WelcomeIndex key={moment().toISOString()} />
            </TabPane>
            <TabPane tab='Usuário' key='user'>
              <UserIndex key={moment().toISOString()} />
            </TabPane>
            <TabPane tab='Tipo de Pagamento' key='paymentType'>
              <PaymentTypeIndex key={moment().toISOString()} />
            </TabPane>
            <TabPane tab='Despesa' key='despesa'>
              <DespesaIndex key={moment().toISOString()} />
            </TabPane>
            <TabPane tab='Renda' key='renda'>
              <RendaIndex key={moment().toISOString()} />
            </TabPane>
          </Tabs>
        </div>
      </>
    );
  }
}

export default App;
