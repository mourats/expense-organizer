import { action, computed, observable, runInAction, toJS } from 'mobx';
import { message } from 'antd';

class IndexBase {
  @observable service;
  @observable loading;
  @observable object;
  @observable lista = [];
  @observable actionType;

  constructor(service) {
    this.service = service;
    this.load = this.load.bind(this);
    this.delete = this.delete.bind(this);
    this.save = this.save.bind(this);
    this.updateObject = this.updateObject.bind(this);
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
  initialize(id, actionType, callback) {
    this.actionType = actionType;
    if (id) {
      this.loading = true;
      this.service
        .get(id)
        .then((response) => {
          runInAction('Load Object', () => {
            this.updateObject(response.data);
            this.loading = false;
            callback && callback();
          });
        })
        .catch((error) => {
          runInAction('Load Object Error', () => {
            message.error(error.response.data);
            this.loading = false;
          });
        });
    } else {
      this.object = {};
    }
  }

  @action
  load(callback) {
    this.loading = true;
    this.service
      .getAll()
      .then((response) => {
        runInAction('Load List Object', () => {
          this.lista.replace(response.data);
          this.loading = false;
          this.treatData && this.treatData();
          callback && callback();
        });
      })
      .catch((error) => {
        runInAction('Load List Object Error', () => {
          message.error(error.response.data);
          this.loading = false;
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
  save(callback) {
    this.loading = true;
    this.service
      .save(toJS(this.object), this.actionType)
      .then((response) => {
        runInAction(`Object saved`, () => {
          if (response.status === 200 || response.status === 201) {
            message.success('Registro salvo com sucesso');
            this.loading = false;
            callback && callback();
          }
        });
      })
      .catch((error) => {
        runInAction(`Object saved error`, () => {
          this.loading = false;
          message.error(error.response.data);
        });
      });
  }

  @action
  updateObject(object) {
    this.object = Object.assign(this.object || {}, object);
  }

}
export default IndexBase;
