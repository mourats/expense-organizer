import UserService from '../../services/userService';
import IndexBase from '../indexBase';

class UserIndexStore extends IndexBase {
  constructor() {
    super(UserService);
  }
}
export default UserIndexStore;
