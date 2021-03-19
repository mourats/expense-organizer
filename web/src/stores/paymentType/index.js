import PaymentTypeService from '../../services/paymentTypeService';
import IndexBase from '../indexBase';

class PaymentTypeIndexStore extends IndexBase {
  constructor() {
    super(PaymentTypeService);
  }
}
export default PaymentTypeIndexStore;
