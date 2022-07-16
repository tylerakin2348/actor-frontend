<template>
  <bordered-left-title-style-container>
    <bordered-left-title-column>
      <PageTitleBlock page_title="Upcoming Events" classes="h1" />
      <GoBackNavigationList>
        <GoBackLinkListItem>
          <GoBackLink url="/" link_text="Back to Home" />
        </GoBackLinkListItem>
      </GoBackNavigationList>
    </bordered-left-title-column>

    <scrolling-data-container v-if="events" component_classes="align-content-center">
      <single-db-entry-container v-for="event in events" :key="event.id">
        <SingleEvent :event="event" :can_edit="false" />
      </single-db-entry-container>
    </scrolling-data-container>
    <centered-management-navigation v-else>
      I must be taking a break. <br />
      Stay tuned for new things soon!
    </centered-management-navigation>
  </bordered-left-title-style-container>
</template>
<script>
/* eslint-disable */
import axios from "axios";
import PageTitleBlock from "@/components/common/PageTitleBlock.vue";
import SingleEvent from "@/components/crud/event/SingleEvent.vue";
import GoBackLink from "@/components/common/go-back/GoBackLink.vue";
import GoBackLinkListItem from "@/components/common/go-back/GoBackLinkListItem.vue";
import GoBackNavigationList from "@/components/common/go-back/GoBackNavigationList.vue";
import ScrollingDataContainer from "@/components/layout-containers/ScrollingDataContainer.vue";
import BorderedLeftTitleColumn from "@/components/layout-containers/BorderedLeftTitleColumn.vue";
import BorderedLeftTitleStyleContainer from "@/components/layout-containers/BorderedLeftTitleStyleContainer.vue";
import SingleDbEntryContainer from "@/components/layout-containers/SingleDbEntryContainer.vue";
import CenteredManagementNavigation from "@/components/layout-containers/CenteredManagementNavigation.vue";

export default {
  name: "UpcomingEvents",
  components: {
    PageTitleBlock,
    SingleEvent,
    GoBackLink,
    GoBackLinkListItem,
    GoBackNavigationList,
    ScrollingDataContainer,
    BorderedLeftTitleColumn,
    BorderedLeftTitleStyleContainer,
    SingleDbEntryContainer,
    CenteredManagementNavigation
  },
  data() {
    return {
      events: []
    };
  },
  created() {
    this.$store.commit("set_content_loading_status", true);
    axios
      .get(`${this.$availableEndpoints.events}`)
      .then(response => {
        this.events = response.data;
        this.$store.commit("set_content_loading_status", false);

        if (this.events.length < 1) {
          this.events = null;
        }
      })
      .catch(e => {
        this.error.push(e);
      });
  },
  beforeDestroy() {
    this.$store.commit("set_content_loading_status", false);
  }
};
</script>

<style lang="scss" scoped></style>
