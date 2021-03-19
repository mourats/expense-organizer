import ends from '../constants/ApiEndPoint';
import ServiceBase from './serviceBase';

class ExpenseService extends ServiceBase {
  constructor() {
    super(ends.despesa);
  }
}

const instance = new ExpenseService();

export default instance;
