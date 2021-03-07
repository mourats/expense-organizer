import { action, observable, runInAction, toJS } from 'mobx';
import { message } from 'antd';
import UserService from '../services/userService';

class UserFormStore {
  @observable text;
  @observable amount;
  @observable loading;
  constructor() {
    this.save = this.save.bind(this);
    this.load = this.load.bind(this);
  }

  @action
  load() {
    debugger;
    this.loading = true;
    UserService.getAll()
      .then((response) => {
        runInAction('Load User', () => {
          debugger;
          console.log(response);
          this.loading = false;
        });
      })
      .catch((error) => {
        runInAction('Load User Error', () => {
          debugger;
          // message.error(error.response.data);
          this.loading = false;
          console.log(error);
        });
      });
  }

  @action
  save() {
    message.success('TÁ DANDO CERTO PORRA');
  }
}
export default UserFormStore;
