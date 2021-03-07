import axios from 'axios';
import ends from '../constants/ApiEndPoint';

class ServiceBase {
  endPoint = null;

  constructor(endPoint) {
    this.endPoint = endPoint;
    this.getAll = this.getAll.bind(this);
  }

  getAll() {
    return axios.get(`${ends.baseAPIUrl}/${this.endPoint}`);
  }
}

export default ServiceBase;
