<template>
  <bordered-left-title-style-container>
    <bordered-left-title-column>
      <PageTitleBlock page_title="Admin - Sign in" classes="h1" />
      <GoBackNavigationList>
        <GoBackLinkListItem>
          <GoBackLink url="/" link_text="Back to Home" />
        </GoBackLinkListItem>
      </GoBackNavigationList>
    </bordered-left-title-column>
    <centered-management-navigation>
      <h3 class="text-2xl mb-6 text-grey-darkest">Sign In</h3>
      <form @submit.prevent="signin">
        <div class="text-red" v-if="error">{{ error }}</div>

        <div class="mb-6">
          <label for="email" class="label w-100">E-mail Address</label>
          <input
            type="email"
            v-model="email"
            class="input"
            id="email"
            placeholder="andy@web-crunch.com"
          />
        </div>
        <div class="mb-6">
          <label for="password" class="label w-100">Password</label>
          <input
            type="password"
            v-model="password"
            class="input"
            id="password"
            placeholder="Password"
          />
        </div>
        <button type="submit" class="btn btn-primary mt-2">
          Sign In
        </button>
      </form>
      <absolutely-positioned-container component_classes="bottom right">
        <router-link to="/signup" class="btn btn-outline-secondary">Sign up</router-link>
      </absolutely-positioned-container>
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
  name: "SigninPage",
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
      email: "",
      password: "",
      error: ""
    };
  },

  methods: {
    signin() {
      axios
        .post(`${this.$availableEndpoints.signin}`, {
          email: this.email,
          password: this.password
        })
        .then(response => this.signinSuccessful(response))
        .catch(error => this.signinFailed(error));
    },
    signinSuccessful(response) {
      console.log(response);
      this.$store.commit("set_current_user", response.data.user);
      this.$store.commit("set_logged_in_status", true);
      this.error = "";
      this.$router.replace("/");
    },
    signinFailed(error) {
      console.log("asdf", error.response.status, error.response);
      if (error.response.status === 401) {
        this.error = "Invalid email or password";
      } else {
        this.error = (error.response && error.response.data && error.response.data.error) || "";
      }
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
