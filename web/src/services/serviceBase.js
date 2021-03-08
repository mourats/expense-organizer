import axios from 'axios';
import ends from '../constants/ApiEndPoint';

class ServiceBase {
  endPoint = null;

  constructor(endPoint) {
    this.endPoint = endPoint;
    this.getAll = this.getAll.bind(this);
    this.get = this.get.bind(this);
    this.save = this.save.bind(this);
    this.delete = this.delete.bind(this);
  }

  getAll() {
    return axios.get(`${ends.baseAPIUrl}/${this.endPoint}`);
  }

  get(id) {
    return axios.get(`${ends.baseAPIUrl}/${this.endPoint}/${id}`);
  }

  save(object, actionType) {
    debugger;
    if (actionType !== 'new') {
      return this.update(object);
    }
    return this.create(object);
  }

  create = (object) => {
    return axios.post(`${ends.baseAPIUrl}/${this.endPoint}`, object);
  };

  update = (object) => {
    return axios.put(`${ends.baseAPIUrl}/${this.endPoint}`, object);
  };

  delete(id) {
    return axios.delete(`${ends.baseAPIUrl}/${this.endPoint}/${id}`);
  }
}

export default ServiceBase;
