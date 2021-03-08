import { action, observable, runInAction, toJS } from 'mobx';
import { message } from 'antd';

class FormBase {
  @observable service;
  @observable loading;
  @observable object;

  constructor(service) {
    this.service = service;
    this.save = this.save.bind(this);
    this.initialize = this.initialize.bind(this);
    this.updateObject = this.updateObject.bind(this);
  }

  @action
  save(actionType, callback) {
    this.loading = true;
    this.service
      .save(toJS(this.object), actionType)
      .then((response) => {
        runInAction(`User saved`, () => {
          this.loading = false;
          if (response.status === 200 || response.status === 201) {
            message.success('Registro salvo com sucesso');
            callback ? callback() : null;
          }
        });
      })
      .catch((error) => {
        runInAction(`User saved error`, () => {
          this.loading = false;
          message.error(error.response.data);
        });
      });
  }

  @action
  initialize(object) {
    debugger;
    if (object) {
      this.object = object;
    } else this.object = { nome: '', sobrenome: '', email: '' };
  }

  @action
  updateObject(object) {
    this.object = Object.assign(this.object, object);
  }
}
export default FormBase;
