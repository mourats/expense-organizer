import { action, computed, observable, runInAction, toJS } from 'mobx';
import { message } from 'antd';

class IndexBase {
  @observable service;
  @observable loading;
  @observable object;
  @observable lista = [];
  @observable isModalVisible = false;

  constructor(service) {
    this.service = service;
    this.load = this.load.bind(this);
    this.delete = this.delete.bind(this);
    this.save = this.save.bind(this);
    this.updateObject = this.updateObject.bind(this);
    this.changeModalVisible = this.changeModalVisible.bind(this);
    this.afterSave = this.afterSave.bind(this);
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

  @action
  save(actionType, callback) {
    debugger;
    this.loading = true;
    this.service
      .save(toJS(this.object), actionType)
      .then((response) => {
        runInAction(`User saved`, () => {
          debugger;
          this.loading = false;
          if (response.status === 200 || response.status === 201) {
            message.success('Registro salvo com sucesso');
            callback ? callback() : null;
            this.afterSave();
          }
        });
      })
      .catch((error) => {
        runInAction(`User saved error`, () => {
          debugger;
          this.loading = false;
          message.error(error.response.data);
        });
      });
  }

  @action
  changeModalVisible() {
    this.isModalVisible = !this.isModalVisible;
  }

  @action
  updateObject(object) {
    this.object = Object.assign(this.object || {}, object);
  }

  @action
  afterSave() {
    this.object = undefined;
    this.load();
  }
}
export default IndexBase;
