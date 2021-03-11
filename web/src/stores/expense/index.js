import ExpenseService from '../../services/expenseService';
import IndexBase from '../indexBase';

class ExpenseIndexStore extends IndexBase {
  constructor() {
    super(ExpenseService);
  }
}
export default ExpenseIndexStore;
