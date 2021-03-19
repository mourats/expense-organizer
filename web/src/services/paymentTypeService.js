import ends from '../constants/ApiEndPoint';
import ServiceBase from './serviceBase';

class PaymentTypeService extends ServiceBase {
  constructor() {
    super(ends.tipoPagamento);
  }
}

const instance = new PaymentTypeService();

export default instance;
