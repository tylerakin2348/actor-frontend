import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const current_user_from_storage = localStorage.getItem("current_user");
const from_storage_chat_is_active = JSON.parse(localStorage.getItem("chat_is_active"));
const from_storage_logged_in_status = JSON.parse(localStorage.getItem("logged_in_status"));
const from_storage_content_is_loading = JSON.parse(
  localStorage.getItem("from_storage_content_is_loading")
);

const store = new Vuex.Store({
  state: {
    acting_credits: [],
    count: 0,
    is_logged_in: from_storage_logged_in_status ? true : false,
    chat_is_active: from_storage_chat_is_active ? true : false,
    current_user: current_user_from_storage ? current_user_from_storage : null,
    content_is_loading: from_storage_content_is_loading ? from_storage_content_is_loading : null
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    updateChatStatus(state, new_status) {
      state.chat_is_active = new_status;
      localStorage.setItem("chat_is_active", JSON.stringify(state.chat_is_active));
    },
    get_acting_credits(state, currentlyAvailableActingCredits) {
      state.acting_credits = currentlyAvailableActingCredits;
    },
    set_current_user(state, current_user) {
      if (!current_user) {
        localStorage.removeItem("current_user");
        state.current_user = null;
        return;
      }
      state.current_user = JSON.stringify(current_user);
      localStorage.setItem("current_user", state.current_user);
    },
    remove_acting_credit(state, actingCreditToRemove) {
      let theCurrentState = state.acting_credits;
      theCurrentState.splice(state.acting_credits.indexOf(actingCreditToRemove), 1);
      state.acting_credits = theCurrentState;
    },

    set_logged_in_status(state, loggedInStatus) {
      if (loggedInStatus) {
        state.is_logged_in = true;
        localStorage.setItem("logged_in_status", JSON.stringify(loggedInStatus));
      } else {
        state.is_logged_in = false;
        localStorage.setItem("logged_in_status", JSON.stringify(loggedInStatus));
      }
    },
    set_content_loading_status(state, contentLoadingStatus) {
      if (contentLoadingStatus) {
        state.content_is_loading = true;
        localStorage.setItem("content_is_loading", JSON.stringify(contentLoadingStatus));
      } else {
        state.content_is_loading = false;
        localStorage.setItem("content_is_loading", JSON.stringify(contentLoadingStatus));
      }
    }
  },

  getters: {
    currentActingCredits: state => {
      return state.acting_credits;
    },
    currentUser: state => {
      let theCurrentUser = JSON.parse(state.current_user);
      console.log(theCurrentUser);
      return theCurrentUser.first_name + " " + theCurrentUser.last_name;
    },
    currentChatStatus: state => {
      return state.chat_is_active;
    },
    isLoggedIn: state => {
      return state.is_logged_in;
    },
    contentIsLoading: state => {
      return state.content_is_loading;
    }
  }
});

export default store;
