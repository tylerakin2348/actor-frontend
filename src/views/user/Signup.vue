<template>
  <bordered-left-title-style-container>
    <bordered-left-title-column>
      <PageTitleBlock page_title="Admin - Sign up" classes="h1" />
      <GoBackNavigationList>
        <GoBackLinkListItem>
          <GoBackLink url="/" link_text="Back to Home" />
        </GoBackLinkListItem>
      </GoBackNavigationList>
    </bordered-left-title-column>
    <centered-management-navigation>
      <h3 class="text-2xl mb-6 text-grey-darkest">Sign Up</h3>
      <form @submit.prevent="signup">
        <div class="text-red" v-if="error">{{ error }}</div>

        <div class="form-group">
          <label for="first_name" class="label w-100">First Name</label>
          <input
            type="text"
            v-model="first_name"
            class="form-control"
            id="first_name"
            placeholder="First Name"
          />
        </div>

        <div class="form-group">
          <label for="last_name" class="label w-100">Last Name</label>
          <input
            type="text"
            v-model="last_name"
            class="form-control"
            id="last_name"
            placeholder="Last Name"
          />
        </div>

        <div class="form-group">
          <label for="email" class="label w-100">E-mail Address</label>
          <input
            type="email"
            v-model="email"
            class="form-control"
            id="email"
            placeholder="email@emailaddress.com"
          />
        </div>

        <div class="form-group">
          <label for="password" class="label w-100">Password</label>
          <input
            type="password"
            v-model="password"
            class="form-control"
            id="password"
            placeholder="Password"
          />
        </div>

        <div class="form-group">
          <label for="password_confirmation" class="label w-100">Password Confirmation</label>
          <input
            type="password"
            v-model="password_confirmation"
            class="form-control"
            id="password_confirmation"
            placeholder="Password Confirmation"
          />
        </div>

        <button type="submit" class="p-2 btn btn-primary">Sign Up</button>

        <absolutely-positioned-container component_classes="bottom right">
          <router-link to="/" class="btn btn-secondary">Sign In</router-link>
        </absolutely-positioned-container>
      </form>
    </centered-management-navigation>
  </bordered-left-title-style-container>
</template>

<script>
import axios from "axios";
import PageTitleBlock from "@/components/common/PageTitleBlock.vue";
import GoBackLink from "@/components/common/go-back/GoBackLink.vue";
import GoBackLinkListItem from "@/components/common/go-back/GoBackLinkListItem.vue";
import GoBackNavigationList from "@/components/common/go-back/GoBackNavigationList.vue";
import CenteredManagementNavigation from "@/components/layout-containers/CenteredManagementNavigation.vue";
import BorderedLeftTitleColumn from "@/components/layout-containers/BorderedLeftTitleColumn.vue";
import BorderedLeftTitleStyleContainer from "@/components/layout-containers/BorderedLeftTitleStyleContainer.vue";
import AbsolutelyPositionedContainer from "@/components/layout-containers/AbsolutelyPositionedContainer.vue";

export default {
  name: "Signup",
  components: {
    PageTitleBlock,
    GoBackLink,
    GoBackLinkListItem,
    GoBackNavigationList,
    CenteredManagementNavigation,
    BorderedLeftTitleColumn,
    BorderedLeftTitleStyleContainer,
    AbsolutelyPositionedContainer
  },
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: "",
      error: ""
    };
  },

  methods: {
    signup() {
      axios
        .post(`${this.$availableEndpoints.signup}`, {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation
        })
        .then(response => this.signupSuccessful(response))
        .catch(error => this.signupFailed(error));
    },
    signupSuccessful(response) {
      this.$store.commit("set_current_user", response.data.user);
      this.$store.commit("set_logged_in_status", true);
      this.error = "";
      this.$router.replace("/admin");
    },
    signupFailed(error) {
      console.log(error);
      this.error =
        (error.response && error.response.data && error.response.data.error) ||
        "Something went wrong";
    }
  }
};
</script>

<style lang="scss" scoped>
.signup-button {
  position: absolute;
  bottom: 1em;
  right: 1em;
}
</style>
