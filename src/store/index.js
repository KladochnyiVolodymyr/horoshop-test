import Vue from "vue";
import Vuex from "vuex";
import { getDataApi, getDesignById } from "../api/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    designsData: [],
    currentDesign: {
      id: "",
      name: "",
      images: [],
      link: ""
    }
  },
  mutations: {
    SET_DATA: (state, data) => {
      state.designsData = [...data];
    },
    SET_CURRENT_DESIGN: (state, item) => {
      state.currentDesign = { ...item };
    },
    ADD_NEW_IMG: (state, src) => {
      state.currentDesign.images.push({
        src: src,
        id: new Date().getTime()
      });
    }
  },
  actions: {
    async getData({ commit }) {
      const { data } = await getDataApi();
      commit("SET_DATA", data);
    },
    async getCurrentDesign({ commit }, id) {
      const { data } = await getDesignById(id);
      commit("SET_CURRENT_DESIGN", data);
    },
    addNewImg({ commit }, src) {
      commit("ADD_NEW_IMG", src);
    }
  }
});
