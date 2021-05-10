import axiosInstance from "../models/axiosInstance";

class ApiService {
  constructor() {
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

  // TODO adicionar tipo do retorno do listPizzas
  /**
   * @typedef {Object} ListPizzasReturn
   *
   * @param {String} id id from listing page
   * @param {String} name name from listing page
   * @param {String} imageUrl imageUrl from listing page
   * @param {String} rating rating from listing page
   * @param {String} priceP priceP from listing page
   * @param {String} priceM priceM from listing page
   * @param {String} priceG priceG from listing page
   * @returns {Promise<import('axios').AxiosResponse<ListPizzasReturn>>}
   */
  listPizzas(token) {
    return axiosInstance.get(this.paths.LIST_PIZZAS, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }
}

export default new ApiService();
