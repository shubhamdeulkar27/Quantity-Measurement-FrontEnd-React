import AxiosServices from "../Services/AxiosServices";

class QuantityServices {
  GetQuantities() {
    return AxiosServices.Get();
  }

  DeleteQuantity(Id) {
    return AxiosServices.Delete(Id);
  }

  Convert(data) {
    return AxiosServices.Post(data);
  }
}

export default new QuantityServices();
