<template>
  <bordered-left-title-style-container>
    <bordered-left-title-column>
      <PageTitleBlock page_title="Update An Existing Event" classes="h1" />
      <GoBackNavigationList>
        <GoBackLinkListItem>
          <GoBackLink url="/admin/events" link_text="Back to Manage Events" />
        </GoBackLinkListItem>
        <GoBackLinkListItem>
          <GoBackLink url="/admin" link_text="Back to Dashboard" />
        </GoBackLinkListItem>
        <GoBackLinkListItem>
          <GoBackLink url="/" link_text="Back to Home" />
        </GoBackLinkListItem>
      </GoBackNavigationList>
    </bordered-left-title-column>
    <scrolling-data-container>
      <div class="text-red" v-if="error">{{ error }}</div>
      <single-db-entry-container v-for="event in events" :key="event.id">
        <SingleEvent
          :eventCurrentlyBeingEdited="eventCurrentlyBeingEdited"
          :event="event"
          :can_edit="true"
          :stagedForDeletion="stagedForDeletion"
          @set-event-being-edited="setEventBeingEdited"
          @stage-event-for-deletion="stageEventForDeletion"
        />
      </single-db-entry-container>
    </scrolling-data-container>
  </bordered-left-title-style-container>
</template>

<script>
import PageTitleBlock from "@/components/common/PageTitleBlock.vue";
import SingleEvent from "@/components/crud/event/SingleEvent.vue";
import GoBackLink from "@/components/common/go-back/GoBackLink.vue";
import GoBackLinkListItem from "@/components/common/go-back/GoBackLinkListItem.vue";
import GoBackNavigationList from "@/components/common/go-back/GoBackNavigationList.vue";
import ScrollingDataContainer from "@/components/layout-containers/ScrollingDataContainer.vue";
import BorderedLeftTitleColumn from "@/components/layout-containers/BorderedLeftTitleColumn.vue";
import BorderedLeftTitleStyleContainer from "@/components/layout-containers/BorderedLeftTitleStyleContainer.vue";
import SingleDbEntryContainer from "@/components/layout-containers/SingleDbEntryContainer.vue";

export default {
  name: "AdminEvents",
  components: {
    PageTitleBlock,
    SingleEvent,
    GoBackLink,
    GoBackLinkListItem,
    GoBackNavigationList,
    ScrollingDataContainer,
    BorderedLeftTitleColumn,
    BorderedLeftTitleStyleContainer,
    SingleDbEntryContainer
  },
  data() {
    return {
      events: [],
      newEvent: [],
      error: "",
      eventCurrentlyBeingEdited: null,
      stagedForDeletion: null,
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
    setEventBeingEdited: function(event) {
      this.eventCurrentlyBeingEdited = event;
    },
    stageEventForDeletion: function(event) {
      this.stagedForDeletion = event;
    },
    setError(error, text) {
      this.error = (error.response && error.response.data && error.response.data.error) || text;
    }
  }
};
</script>

<style lang="scss" scoped></style>
