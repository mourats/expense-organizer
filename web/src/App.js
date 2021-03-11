import React from 'react';
import { Header } from './components/Header';
import UserIndex from './components/user/index';
import PaymentTypeIndex from './components/paymentType/index';
import DespesaIndex from './components/expense/index';
import RendaIndex from './components/income/index';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
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
              <>Hello World</>
            </TabPane>
            <TabPane tab='Usuário' key='user'>
              <UserIndex />
            </TabPane>
            <TabPane tab='Tipo de Pagamento' key='paymentType'>
              <PaymentTypeIndex />
            </TabPane>
            <TabPane tab='Despesa' key='despesa'>
              <DespesaIndex />
            </TabPane>
            <TabPane tab='Renda' key='renda'>
              <RendaIndex />
            </TabPane>
          </Tabs>
        </div>
      </>
    );
  }
}

export default App;
