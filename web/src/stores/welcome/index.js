import { action, observable, runInAction } from 'mobx';
import { message } from 'antd';
import IncomeService from '../../services/incomeService';
import ExpenseService from '../../services/expenseService';
import { groupByMonth } from '../../util/util';
import moment from 'moment';

class WelcomeIndexStore {
  @observable loading;
  @observable expenses = [];
  @observable incomes = [];
  @observable expensesGroup = {};
  @observable incomesGroup = {};

  constructor() {
    this.load = this.load.bind(this);
    this.treatData = this.treatData.bind(this);
  }

  @action
  load() {
    this.loading = true;
    Promise.all([ExpenseService.getAll(), IncomeService.getAll()])
      .then((responses) => {
        runInAction('Load Expenses and Incomes', () => {
          this.expenses.replace(responses[0] && responses[0].data);
          this.incomes.replace(responses[1] && responses[1].data);
          this.treatData();
        });
      })
      .catch((error) => {
        runInAction('Load Expenses and Incomes', () => {
          message.error(error);
          this.loading = false;
        });
      });
  }

  @action
  treatData() {
    if (this.expenses.length > 0) {
      this.expenses.forEach((elem) => {
        if (elem.periodo) elem.periodo = moment(elem.periodo);
      });
      this.expensesGroup = groupByMonth(this.expenses, 'periodo');
    }

    if (this.incomes.length > 0) {
      this.incomes.forEach((elem) => {
        if (elem.periodo) elem.periodo = moment(elem.periodo);
      });
      this.incomesGroup = groupByMonth(this.incomes, 'periodo');
    }

    this.loading = false;
  }
}
export default WelcomeIndexStore;
