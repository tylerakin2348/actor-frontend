<template>
  <bordered-left-title-style-container>
    <bordered-left-title-column>
      <PageTitleBlock page_title="Manage Events" classes="h1" />
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
      <div class="text-red" v-if="error">{{ error }}</div>
      <router-link
        class="btn btn-outline-secondary outline-fixed-width-style m-2"
        :to="{ path: '/admin/events/new' }"
      >
        Add An Event
      </router-link>
      <router-link
        class="btn btn-outline-secondary outline-fixed-width-style m-2"
        :to="{ path: '/admin/events/update' }"
      >
        Update Existing Event
      </router-link>
      <!-- <a
        class="btn btn-outline-secondary outline-fixed-width-style m-2"
        href="/admin/events/statistics"
      >
        Event Statistics
      </a> -->
    </centered-management-navigation>
  </bordered-left-title-style-container>
</template>

<script>
import PageTitleBlock from "@/components/common/PageTitleBlock.vue";
import GoBackLink from "@/components/common/go-back/GoBackLink.vue";
import GoBackLinkListItem from "@/components/common/go-back/GoBackLinkListItem.vue";
import GoBackNavigationList from "@/components/common/go-back/GoBackNavigationList.vue";
import CenteredManagementNavigation from "@/components/layout-containers/CenteredManagementNavigation.vue";
import BorderedLeftTitleColumn from "@/components/layout-containers/BorderedLeftTitleColumn.vue";
import BorderedLeftTitleStyleContainer from "@/components/layout-containers/BorderedLeftTitleStyleContainer.vue";

export default {
  name: "AdminEvents",
  components: {
    PageTitleBlock,
    GoBackLink,
    GoBackLinkListItem,
    GoBackNavigationList,
    CenteredManagementNavigation,
    BorderedLeftTitleColumn,
    BorderedLeftTitleStyleContainer
  },
  data() {
    return {
      events: [],
      newEvent: [],
      error: "",
      singleEventCurrentlyBeingEdited: "",
      addNewEvent: false
    };
  },
  created() {
    this.$http.secured
      .get(`${this.$availableEndpoints.events}`)
      .then(response => {
        this.events = response.data;
      })
      .catch(error => this.setError(error, "Something went wrong"));
  },
  methods: {
    setError(error, text) {
      this.error = (error.response && error.response.data && error.response.data.error) || text;
    },
    addRecord() {
      const value = this.newEvent;
      if (!value) {
        return;
      }
      this.$http.secured
        .post(`${this.$availableEndpoints.events}`, {
          event_name: this.newEvent.event_name,
          event_group: this.newEvent.event_group,
          event_start_date: this.newEvent.event_start_date,
          event_end_date: this.newEvent.event_end_date,
          event_url: this.newEvent.event_url
        })

        .then(response => {
          this.events.push(response.data);
          this.newEvent = "";
        })
        .catch(error => this.setError(error, "Cannot create event"));
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
