import UserService from '../../services/userService';
import FormBase from '../formBase';

class UserFormStore extends FormBase {
  constructor() {
    super(UserService);
  }
}
export default UserFormStore;
