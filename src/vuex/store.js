import { createStore } from "vuex";
import axios from "axios";

const URL = "https://636c06ecad62451f9fc200fa.mockapi.io/colection";

const store = createStore({
  state: {
    products: [],
    cart: [],
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
  },
  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
      return axios({ url: `${URL}`, method: "GET" })
        .then((response) => {
          commit("SET_PRODUCTS_TO_STATE", response.data);
          return response;
        })
        .catch((err) => console.log(err));
    },
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    },
  },
});

export default store;
