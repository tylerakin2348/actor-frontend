<template>
    <div class="overflow-scroll-container block-container-row col-12 col-md-7 align-items-end justify-content-start">
        <slot></slot>
    </div>
</template>

<script>
import PageTitleBlock from "@/components/common/PageTitleBlock.vue";
import SingleEvent from "@/components/crud/event/SingleEvent.vue";
import GoBackLink from "@/components/common/go-back/GoBackLink.vue";
import GoBackLinkListItem from "@/components/common/go-back/GoBackLinkListItem.vue";
import GoBackNavigationList from "@/components/common/go-back/GoBackNavigationList.vue";

export default {
  name: "Scrolling Data Container",
  components: {
    PageTitleBlock,
    SingleEvent,
    GoBackLink,
    GoBackLinkListItem,
    GoBackNavigationList,
  },
  data() {
    return {
      events: [],
      newEvent: [],
      error: "",
      eventCurrentlyBeingEdited: null,
      stagedForDeletion: null,
      addNewEvent: false,
    };
  },
  created() {
    this.$http.secured
      .get(`${this.$properApiURL}/api/v1/events/`)
      .then((response) => {
        this.events = response.data;
      })
      .catch((error) => this.setError(error, "Something went wrong"));
  },
  methods: {
    setEventBeingEdited: function (event) {
      this.eventCurrentlyBeingEdited = event;
      console.log("hello from edited event", event);
    },
    stageEventForDeletion: function (event) {
      this.stagedForDeletion = event;
      console.log("hello from delte event");
    },
    setError(error, text) {
      this.error =
        (error.response && error.response.data && error.response.data.error) ||
        text;
    },
  },
};
</script>

<style lang="scss">

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
    padding-top: 12vh;
    overflow-y: scroll;
  }
}
</style>
