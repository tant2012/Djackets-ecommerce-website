import { defineStore } from "pinia";

export const useStore = defineStore("djacketsStore", {
  state: () => ({
    cart: {
      items: [],
    },
    isAuthenticated: false,
    token: "",
    isLoading: false,
  }),

  getters: {},

  actions: {
    initializeStore(state) {
      if (localStorage.getItem("cart")) {
        state = JSON.parse(localStorage.getItem("cart"));
      } else {
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
    addToCart(state, item) {
      const exists = state.items.filter(
        (i) => i.product.id === item.product.id
      );

      if (exists.length) {
        exists[0].quantity =
          parseInt(exists[0].quantity) + parseInt(item.quantity);
      } else {
        state.items.push(item);
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },

    setIsLoading(state, status) {
      state.isLoading = status;
    },
  },
});
