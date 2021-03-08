import axios from 'axios';
import ends from '../constants/ApiEndPoint';

class ServiceBase {
  endPoint = null;

  constructor(endPoint) {
    this.endPoint = endPoint;
    this.getAll = this.getAll.bind(this);
    this.get = this.get.bind(this);
    this.save = this.save.bind(this);
    this.delete = this.getAll.bind(this);
  }

  getAll() {
    debugger;
    return axios.get(`${ends.baseAPIUrl}/${this.endPoint}`);
  }

  get(id) {
    return axios.get(`${ends.baseAPIUrl}/${this.endPoint}/${id}`);
  }

  save(object, actionType) {
    if (actionType !== 'new') {
      return this.update(object);
    }
    return this.create(object);
  }

  create = (object) => {
    return axios.post(`${envs.baseAPIUrl}/${this.endPoint}`, object);
  };

  update = (object) => {
    return axios.put(`${envs.baseAPIUrl}/${this.endPoint}`, object);
  };

  delete(id) {
    debugger;
    return axios.delete(`${envs.baseAPIUrl}/${this.endPoint}/${id}`);
  }
}

export default ServiceBase;
