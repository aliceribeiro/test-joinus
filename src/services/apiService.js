import axiosInstance from "../models/axiosInstance";
class ApiService {
  
  constructor() {
    this.pizzas = []
    this.paths = {
      SIGN_IN: "/v1/signin",
      LIST_PIZZAS: "/v1/pizza",
    };
  }

  /**
   * @typedef {Object} SignInReturn
   * @property {String} accessToken
   * @property {String} tokenType
   *
   * @param {String} email email from login page
   * @param {String} password password from login page
   * @returns {Promise<import('axios').AxiosResponse<SignInReturn>>}
   */
  signIn(email, password) {
    return axiosInstance.post(this.paths.SIGN_IN, { email, password });
  }

  /**
   * @typedef {Object} ListPizzasReturn
   * @property {String} id id from listing page
   * @property {String} name name from listing page
   * @property {String} imageUrl imageUrl from listing page
   * @property {integer} rating rating from listing page
   * @property {number} priceP priceP from listing page
   * @property {number} priceM priceM from listing page
   * @property {number} priceG priceG from listing page
   * 
   * @returns {ListPizzasReturn[]}
   */
  async listPizzas() {
    try {
      if (!window.localStorage.getItem("token")) {
        throw new Error('Token not found');
      }
      if (
        Array.isArray(this.pizzas) &&
        this.pizzas.length
      ) {
        return this.pizzas
      }
      this.pizzas = await axiosInstance.get(this.paths.LIST_PIZZAS, {
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("token"),
        },
      }).then(axiosResult => axiosResult.data);

      return this.pizzas;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

export default new ApiService();
