import { action, computed, observable, runInAction } from 'mobx';
import { message } from 'antd';

class IndexBase {
  @observable isModalVisible = false;
  @observable selected;
  @observable service;
  @observable loading;
  @observable lista = [];
  constructor(service) {
    this.service = service;
    this.load = this.load.bind(this);
  }

  @computed
  get listaComKey() {
    if (this.lista.length) {
      return this.lista.map((elem, idx) => {
        elem.key = idx;
        return elem;
      });
    }
  }

  @action
  load() {
    this.loading = true;
    this.service
      .getAll()
      .then((response) => {
        runInAction('Load User', () => {
          console.log(response);
          this.lista.replace(response.data);
          this.loading = false;
        });
      })
      .catch((error) => {
        runInAction('Load User Error', () => {
          message.error(error.response.data);
          this.loading = false;
          console.log(error);
        });
      });
  }

  @action
  delete(row) {
    this.service
      .delete(row.id)
      .then(() => {
        message.success('Registro excluído com sucesso');
        this.load();
      })
      .catch((error) => {
        message.error(error.response.data);
      });
  }
}
export default IndexBase;
