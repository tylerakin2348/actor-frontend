<template>
  <bordered-left-title-style-container>
    <bordered-left-title-column>
      <PageTitleBlock page_title="Dashboard" classes="h1" />
      <GoBackNavigationList>
        <GoBackLinkListItem>
          <GoBackLink url="/" link_text="Back to Home" include_as_list_item="true" />
        </GoBackLinkListItem>
      </GoBackNavigationList>
    </bordered-left-title-column>

    <centered-management-navigation>
      <nav aria-label="Management Options">
        <ul class="mb-0">
          <li>
            <router-link
              class="btn btn-outline-secondary m-2 outline-fixed-width-style"
              :to="{ path: '/admin/manage-acting-credits' }"
              >Acting Credits</router-link
            >
          </li>

          <li>
            <router-link
              class="btn btn-outline-secondary m-2 outline-fixed-width-style"
              :to="{ path: '/admin/events' }"
              >Events</router-link
            >
          </li>

          <li>
            <router-link
              class="btn btn-outline-secondary m-2 outline-fixed-width-style"
              :to="{ path: '/admin/live' }"
              >Live</router-link
            >
          </li>

          <li>
            <button
              class="btn btn-outline-secondary m-2 mt-4 outline-fixed-width-style"
              @click="signOut"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </centered-management-navigation>
  </bordered-left-title-style-container>
</template>
<script>
/* eslint-disable */
import SubjectBlock from "@/components/homepage/SubjectBlock.vue";
import PageTitleBlock from "@/components/common/PageTitleBlock.vue";
import LayoutRow from "@/components/layout-containers/LayoutRow.vue";
import LayoutColumn from "@/components/layout-containers/LayoutColumn.vue";
import GoBackLink from "@/components/common/go-back/GoBackLink.vue";
import GoBackLinkListItem from "@/components/common/go-back/GoBackLinkListItem.vue";
import GoBackNavigationList from "@/components/common/go-back/GoBackNavigationList.vue";
import BorderedLeftTitleColumn from "@/components/layout-containers/BorderedLeftTitleColumn.vue";
import BorderedLeftTitleStyleContainer from "@/components/layout-containers/BorderedLeftTitleStyleContainer.vue";
import CenteredManagementNavigation from "@/components/layout-containers/CenteredManagementNavigation.vue";

export default {
  name: "AdminScreen",
  components: {
    SubjectBlock,
    PageTitleBlock,
    LayoutRow,
    LayoutColumn,
    GoBackLink,
    GoBackLinkListItem,
    GoBackNavigationList,
    BorderedLeftTitleColumn,
    BorderedLeftTitleStyleContainer,
    CenteredManagementNavigation
  },

  methods: {
    signOut() {
      this.$http.secured
        .get(`${this.$availableEndpoints.logout}`)
        .then(response => {
          this.$store.commit("set_current_user", null);
          this.$store.commit("set_logged_in_status", false);
          this.$router.replace("/");
        })
        .catch(error => this.setError(error, "Cannot sign out"));
    }
  }
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding-left: 0;
}
.about-page-wrapper {
  padding-top: 1em;
  text-align: left;

  .single_acting_credit {
    @media screen and (min-width: 769px) {
      width: 50%;
    }
  }
}
.large-breakup-border {
  padding: 0;
}

.large-breakup-border:after {
  background-color: rgba(200, 139, 139, 1);
  content: "";
  display: inline-block;
  height: 0.75em;
  width: 100%;

  @media screen and (min-width: 769px) {
    height: 85%;
    width: 1.5em;
    position: absolute;
    right: 0;
    bottom: 0;
  }
}

@media screen and (min-width: 769px) {
  .block-container {
    height: 100vh;
  }
}

.block-container-row {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
}

@media screen and (min-width: 769px) {
  .block-container {
    height: 100vh;
  }

  .block-container-row {
    align-items: center;
  }
}

.overflow-scroll-container {
  align-items: center;
  justify-content: center;
  overflow-y: hidden;

  @media screen and (min-width: 769px) {
    padding-top: 12vh;
  }
}

.block-container-row-center {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 2em;
  height: 4%;

  span {
    font-size: 0.5em;
  }
}

.outline-fixed-width-style {
  border-radius: 0;
  width: 15em;
}
</style>
