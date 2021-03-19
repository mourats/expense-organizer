import { action, observable, runInAction } from 'mobx';
import IncomeService from '../../services/incomeService';
import UserService from '../../services/userService';
import IndexBase from '../indexBase';
import { message } from 'antd';
import moment from 'moment';

class IncomeIndexStore extends IndexBase {
  @observable userList = [];
  constructor() {
    super(IncomeService);
    this.getUsersSelect = this.getUsersSelect.bind(this);
    this.treatData = this.treatData.bind(this);
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
  treatData() {
    this.lista.length > 0 &&
      this.lista.forEach((elem) => {
        if (elem.periodo) elem.periodo = moment(elem.periodo);
      });
  }
}
export default IncomeIndexStore;
