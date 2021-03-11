import ends from '../constants/ApiEndPoint';
import ServiceBase from './serviceBase';

class IncomeService extends ServiceBase {
  constructor() {
    super(ends.renda);
  }
}

const instance = new IncomeService();

export default instance;
