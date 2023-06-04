import { createStore } from "vuex";
import axios from "axios";

const URL = "https://636c06ecad62451f9fc200fa.mockapi.io/colection";

const store = createStore({
  state: {
    products: [],
    card: [],
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_CARD: (state, product) => {
      state.card.push(product);
    },
  },
  actions: {
    async GET_PRODUCTS_FROM_API({ commit }) {
      return await axios({ url: `${URL}`, method: "GET" })
        .then((response) => {
          commit("SET_PRODUCTS_TO_STATE", response.data);
          return response.data;
        })
        .catch((err) => console.log(err));
    },
    ADD_TO_CARD({ commit }, product) {
      commit("SET_CARD", product);
    },
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CARD(state) {
      return state.card;
    },
  },
});

export default store;
