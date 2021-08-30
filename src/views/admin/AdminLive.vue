<template>
  <bordered-left-title-style-container>
    <bordered-left-title-column>
      <PageTitleBlock page_title="Live" classes="h1" />
      <GoBackNavigationList>
        <GoBackLinkListItem>
          <GoBackLink url="/admin" link_text="Back to Dashboard" />
        </GoBackLinkListItem>
        <GoBackLinkListItem>
          <GoBackLink url="/" link_text="Back to Home" />
        </GoBackLinkListItem>
      </GoBackNavigationList>
    </bordered-left-title-column>

    <centered-management-navigation>
      <router-link
        class="btn btn-outline-secondary outline-fixed-width-style m-2"
        :to="{ path: '/admin/live/chat/new' }"
      >
        {{ live_chat_text }}
      </router-link>
      <!-- <a
        class="btn btn-outline-secondary outline-fixed-width-style m-2"
        href="/admin/live/chat/statistics"
      >
        View Live Statistics
      </a> -->
    </centered-management-navigation>
  </bordered-left-title-style-container>
</template>
<script>
/* eslint-disable */
import PageTitleBlock from "@/components/common/PageTitleBlock.vue";
import GoBackLink from "@/components/common/go-back/GoBackLink.vue";
import GoBackLinkListItem from "@/components/common/go-back/GoBackLinkListItem.vue";
import GoBackNavigationList from "@/components/common/go-back/GoBackNavigationList.vue";
import BorderedLeftTitleColumn from "@/components/layout-containers/BorderedLeftTitleColumn.vue";
import BorderedLeftTitleStyleContainer from "@/components/layout-containers/BorderedLeftTitleStyleContainer.vue";
import CenteredManagementNavigation from "@/components/layout-containers/CenteredManagementNavigation.vue";

export default {
  name: "AdminLive",
  components: {
    PageTitleBlock,
    GoBackLink,
    GoBackLinkListItem,
    GoBackNavigationList,
    BorderedLeftTitleColumn,
    BorderedLeftTitleStyleContainer,
    CenteredManagementNavigation
  },
  data() {
    return {
      live_chat_text: this.$store.getters.currentChatStatus ? "Continue Live Chat" : "Go Live"
    };
  },
  computed: {
    current_chat_status: function() {
      return this.$store.getters.currentChatStatus;
    }
  }
};
</script>

<style lang="scss" scoped>
.outline-fixed-width-style {
  border-radius: 0;
  width: 15em;
}
</style>
