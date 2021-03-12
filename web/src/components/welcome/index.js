import React from 'react';
import { Spin, Tabs } from 'antd';
import { observer } from 'mobx-react';
import WelcomeIndexStore from '../../stores/welcome/index';
import { moneyFormatter } from '../../util/util';
const { TabPane } = Tabs;

@observer
class WelcomeIndex extends React.Component {
  constructor(props) {
    super(props);
    this.store = new WelcomeIndexStore();
    this.getTabPane = this.getTabPane.bind(this);
    this.state = {
      monthAtivo: '',
    };
  }
  componentDidMount() {
    this.store.load();
  }

  getTabPane(key) {
    let totalExpense = 0;
    if (this.store.expensesGroup[key]) {
      totalExpense = this.store.expensesGroup[key].reduce(
        (acc, item) => (acc += +item.valor),
        0
      );
    }

    let totalIncome = 0;
    if (this.store.incomesGroup[key]) {
      totalIncome = this.store.incomesGroup[key].reduce(
        (acc, item) => (acc += +item.valor),
        0
      );
    }

    return (
      <TabPane tab={key} key={key}>
        <>
          <h4>Balanço Mensal</h4>
          <h1>{moneyFormatter(totalIncome - totalExpense)}</h1>
        </>
        <div className='inc-exp-container'>
          <div>
            <h4>Despesa</h4>
            <p className='money minus'>{moneyFormatter(totalExpense)}</p>
          </div>
          <div>
            <h4>Renda</h4>
            <p className='money plus'>{moneyFormatter(totalIncome)}</p>
          </div>
        </div>
        <>
          <h5>
            *Balanço mensal não está considerando a soma dos meses anteriores.
          </h5>
          <h5>
            **Despesas ainda não está fazendo o parcelamento do valor informado
            nos meses seguintes.
          </h5>
        </>
      </TabPane>
    );
  }

  render() {
    if (this.store.loading) return <Spin />;

    const keysExpenses = Object.keys(this.store.expensesGroup);
    const keysIncomes = Object.keys(this.store.incomesGroup);
    const unionKeys = [...new Set([...keysExpenses, ...keysIncomes])].sort();

    return (
      <Tabs
        activeKey={this.state.state}
        onChange={(key) => this.setState({ monthAtivo: key })}
      >
        {unionKeys.map((key) => this.getTabPane(key))}
      </Tabs>
    );
  }
}

WelcomeIndex.displayName = 'WelcomeIndex';

export default WelcomeIndex;
