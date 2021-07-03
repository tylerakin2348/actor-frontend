<template>
  <div id="scroll-on-mobile">
    <div class="block-container d-flex flex-wrap align-items-end">
      <div class="block-container-row large-breakup-border col-12 col-md-5 p-0">
        <PageTitleBlock page_title="Upcoming Events" classes="h1" />
        <GoBackNavigationList>
          <GoBackLinkListItem>
            <GoBackLink url="/" link_text="Back to Home" />
          </GoBackLinkListItem>
        </GoBackNavigationList>
      </div>
      <div
        class="overflow-scroll-container block-container-row col-12 col-md-7 align-items-end justify-content-start"
      >
        <div class="event-wrapper col-12" v-if="events">
          <SingleEvent :event="event" :can_edit="false" v-for="event in events" :key="event.id" />
        </div>
        <div class="event-wrapper col-12" v-else>
          I must be taking a break. <br />
          Stay tuned for new event announcements soon!
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import axios from "axios";
import PageTitleBlock from "@/components/common/PageTitleBlock.vue";
import SingleEvent from "@/components/crud/event/SingleEvent.vue";
import GoBackLink from "@/components/common/go-back/GoBackLink.vue";
import GoBackLinkListItem from "@/components/common/go-back/GoBackLinkListItem.vue";
import GoBackNavigationList from "@/components/common/go-back/GoBackNavigationList.vue";

export default {
  name: "Page Title Block",
  components: {
    PageTitleBlock,
    SingleEvent,
    GoBackLink,
    GoBackLinkListItem,
    GoBackNavigationList
  },
  data() {
    return {
      events: []
    };
  },
  created() {
    axios
      .get("https://vast-fortress-04957.herokuapp.com/api/v1/events")
      .then(response => {
        this.events = response.data;

        if (this.events.length < 1) {
          this.events = null;
        }
      })
      .catch(e => {
        this.error.push(e);
      });
  }
};
</script>

<style lang="scss">
.event-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (min-width: 769px) {
    justify-content: flex-start;
  }
  .single_event_item {
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
  overflow-y: hidden;

  @media screen and (min-width: 769px) {
    // height: 85%;
    padding-top: 12vh;
    overflow-y: scroll;
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
</style>
