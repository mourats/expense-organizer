import { action, observable, runInAction, toJS } from 'mobx';
import { message } from 'antd';
import UserService from '../../services/userService';

class UserFormStore {
  @observable loading;
  constructor() {
    this.save = this.save.bind(this);
  }

  @action
  save(values, actionType) {
    debugger;
    message.success('SUCESS');
  }
}
export default UserFormStore;
