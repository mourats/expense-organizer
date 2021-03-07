import ends from '../constants/ApiEndPoint';
import ServiceBase from './serviceBase';

class UserService extends ServiceBase {
  constructor() {
    super(ends.usuarios);
  }
}

const instance = new UserService();

export default instance;
