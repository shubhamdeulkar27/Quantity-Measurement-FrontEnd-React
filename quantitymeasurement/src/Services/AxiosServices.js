import axios from "axios";

const API_URL = "https://localhost:44353/api/Quantity";

class AxiosServices {
  Get() {
    return axios.get(API_URL);
  }
  Post(data) {
    return axios.post("" + API_URL, data);
  }

  Delete(id) {
    return axios.delete(API_URL + "/" + id);
  }
}

export default new AxiosServices();
