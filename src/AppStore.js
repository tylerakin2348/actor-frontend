import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

const current_user_from_storage = localStorage.getItem('current_user');

const store = new Vuex.Store({
  state: {
    acting_credits: [],
    count: 0,
    isLoggedIn: false,
    chat_is_active: false,
    current_user: current_user_from_storage ? current_user_from_storage : null,
  },
  mutations: {
    increment (state) {
      state.count++
    },
    updateChatStatus(state, new_status) {
      state.chat_is_active = new_status;
    },
    get_acting_credits(state, currentlyAvailableActingCredits) {
        state.acting_credits = currentlyAvailableActingCredits;
    },
    set_current_user(state, current_user) {
      state.current_user = JSON.stringify(current_user);
      localStorage.setItem( 'current_user', state.current_user);
    },
    remove_acting_credit(state, actingCreditToRemove) {
        let theCurrentState = state.acting_credits;
        theCurrentState.splice(state.acting_credits.indexOf(actingCreditToRemove), 1);
        state.acting_credits = theCurrentState;
    },

    isLoggedIn(state, loggedInStatus) {
        if (loggedInStatus) {
            state.isLoggedIn = true;
        } else {
            state.isLoggedIn = false;
        }
    },
  },
//   actions: {  getCurrentActingCredits({commit}) {
//     //     this.$http.secured
//     //     .get(`${this.$properApiURL}/api/v1/acting-credits`)
//     //     .then((response) => {
//     //     //   this.$store.commit('')
//     //       this.acting_credits = response.data;
//     //     })
//     //     // .catch((error) => this.setError(error, "Something went wrong"));
//     //   }
//     // 
//   },
  getters: {
      currentActingCredits: state => {
          return state.acting_credits;
      },
      currentUser: state => {
        let theCurrentUser = JSON.parse(state.current_user)
        console.log(theCurrentUser)
        return theCurrentUser.first_name + ' ' + theCurrentUser.last_name;
        // return state.current_user
    },
    currentChatStatus: state => {
      return state.chat_is_active;
    }
  }
})

export default store;