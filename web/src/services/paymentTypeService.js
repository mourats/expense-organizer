import ends from '../constants/ApiEndPoint';
import ServiceBase from './serviceBase';

class PaymentTypeService extends ServiceBase {
  constructor() {
    super(ends.tipoPagamentos);
  }
}

const instance = new PaymentTypeService();

export default instance;
