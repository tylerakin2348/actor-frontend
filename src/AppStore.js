import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    acting_credits: [],
    count: 0,
    isLoggedIn: false,
  },
  mutations: {
    increment (state) {
      state.count++
    },
    get_acting_credits(state, currentlyAvailableActingCredits) {
        state.acting_credits = currentlyAvailableActingCredits;
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
      }
  }
})

export default store;