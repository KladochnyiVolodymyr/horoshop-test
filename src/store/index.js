import Vue from "vue";
import Vuex from "vuex";
import {
  getDataApi,
  getDesignById,
  sendEditedDesign,
  deleteDesign
} from "../api/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    designsData: [],
    currentDesign: {
      id: "",
      _id: "",
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
    },
    DELETE_IMG: (state, id) => {
      state.currentDesign.images = state.currentDesign.images.filter(img => {
        return img.id !== id;
      });
    },
    UPDATE_CURRENT_VALUE(state, data) {
      state.currentDesign[data.name] = data.value;
    },
    UPD_DATA: (state, updItem) => {
      state.designsData = state.designsData.map(item => {
        if (item._id == updItem._id) {
          return updItem;
        } else {
          return item;
        }
      });
    }
  },
  actions: {
    async getData({ commit }) {
      const { data } = await getDataApi();
      commit("SET_DATA", data);
    },
    async getCurrentDesign({ commit }, _id) {
      const { data } = await getDesignById(_id);
      commit("SET_CURRENT_DESIGN", data);
    },
    addNewImg({ commit }, src) {
      commit("ADD_NEW_IMG", src);
    },
    deleteImg({ commit }, id) {
      commit("DELETE_IMG", id);
    },
    updateCurrentValue({ commit }, data) {
      commit("UPDATE_CURRENT_VALUE", data);
    },
    async sendData({ commit }, item) {
      const { data } = await sendEditedDesign(item);
      commit("UPD_DATA", data);
    },
    async deleteDesign({ commit }, id) {
      const { data } = await deleteDesign(id);
      commit("UPD_DATA", data);
    }
  }
});
