import { action, observable, runInAction } from 'mobx';
import ExpenseService from '../../services/expenseService';
import UserService from '../../services/userService';
import PaymentTypeService from '../../services/paymentTypeService';
import IndexBase from '../indexBase';
import { message } from 'antd';
import moment from 'moment';

class ExpenseIndexStore extends IndexBase {
  @observable userList = [];
  @observable typePagamentList = [];
  constructor() {
    super(ExpenseService);
    this.getUsersSelect = this.getUsersSelect.bind(this);
    this.treatData = this.treatData.bind(this);
    this.getTypePagamentListSelect = this.getTypePagamentListSelect.bind(this);
  }

  @action
  getUsersSelect() {
    this.loading = true;
    UserService.getAll()
      .then((response) => {
        runInAction('Load Users', () => {
          this.userList.replace(response.data);
          this.loading = false;
        });
      })
      .catch((error) => {
        runInAction('Load Users Error', () => {
          message.error(error.response.data);
          this.loading = false;
          console.log(error);
        });
      });
  }

  @action
  getTypePagamentListSelect() {
    this.loading = true;
    PaymentTypeService.getAll()
      .then((response) => {
        runInAction('Load Users', () => {
          this.typePagamentList.replace(response.data);
          this.loading = false;
        });
      })
      .catch((error) => {
        runInAction('Load Users Error', () => {
          message.error(error.response.data);
          this.loading = false;
          console.log(error);
        });
      });
  }

  @action
  treatData() {
    this.lista.length > 0 &&
      this.lista.forEach((elem) => {
        if (elem.periodo) elem.periodo = moment(elem.periodo);
      });
  }
}
export default ExpenseIndexStore;
