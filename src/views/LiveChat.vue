<template>
  <div class="background-image">
    <bordered-left-title-style-container component_classes="align-content-center">
      <img :src="require(`@/assets/next-to-normal/next_to_normal18.jpg`)" />
      <bordered-left-title-column>
        <PageTitleBlock page_title="Live Chat" classes="h1" />
        <GoBackNavigationList>
          <GoBackLinkListItem>
            <GoBackLink url="/" link_text="Back to Home" />
          </GoBackLinkListItem>
        </GoBackNavigationList>
      </bordered-left-title-column>

      <scrolling-data-container component_classes="align-content-center">
        <div v-if="current_chat_status">
          <LiveChatMessage
            v-for="live_chat in live_chats"
            :key="live_chat.id"
            :live_chat="live_chat"
          />
        </div>
        <div v-else>I'm not live right now. Come back soon!</div>
      </scrolling-data-container>
    </bordered-left-title-style-container>
  </div>
</template>

<script>
/* eslint-disable */
import LiveChatMessage from "@/components/crud/live/LiveChatMessage.vue";
import PageTitleBlock from "@/components/common/PageTitleBlock.vue";
import GoBackLink from "@/components/common/go-back/GoBackLink.vue";
import GoBackLinkListItem from "@/components/common/go-back/GoBackLinkListItem.vue";
import GoBackNavigationList from "@/components/common/go-back/GoBackNavigationList.vue";
import IntervalLifecycle from "@/components/interval-lifecycle.js";
import ClockLoading from "@/components/loading/ClockLoading.vue";
import checkForAvailableData from "../helpers/checkForAvailableData";
import ScrollingDataContainer from "@/components/layout-containers/ScrollingDataContainer.vue";
import BorderedLeftTitleColumn from "@/components/layout-containers/BorderedLeftTitleColumn.vue";
import BorderedLeftTitleStyleContainer from "../components/layout-containers/BorderedLeftTitleStyleContainer.vue";

export default {
  name: "LiveChat",
  components: {
    LiveChatMessage,
    GoBackLink,
    GoBackLinkListItem,
    GoBackNavigationList,
    PageTitleBlock,
    ClockLoading,
    ScrollingDataContainer,
    BorderedLeftTitleColumn,
    BorderedLeftTitleStyleContainer
  },
  data() {
    return {
      live_chats: []
    };
  },
  beforeMount() {
    this.checkForNewMessage();
  },
  mounted() {
    let setUpLiveChatScripts = new IntervalLifecycle(this.checkForNewMessage);

    setUpLiveChatScripts.setUpNewMessageListener();
  },
  unmounted() {
    setUpLiveChatScripts.tearDownNewMessageListener();
  },
  computed: {
    current_chat_status: function() {
      return this.$store.getters.currentChatStatus;
    }
  },
  methods: {
    scrollToNewMessage: function() {
      let theCurrentElement = this.$el.querySelector(".live-chat-container");

      if (!theCurrentElement) {
        return;
      }

      theCurrentElement.scrollTop = theCurrentElement.scrollHeight;
    },

    checkForNewMessage: function() {
      this.$http.secured.get(`${this.$availableEndpoints.live_chat}`).then(response => {
        checkForAvailableData(this, response, "updateChatStatus");
        this.live_chats = response.data;
        setTimeout(() => {
          this.scrollToNewMessage();
        }, 100);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.chat-box-shadow {
  box-shadow: inset 0 0 7px 0px lightgrey;
}

.outline-fixed-width-style {
  border-radius: 0;
  width: 15em;
}
.background-image {
  overflow: hidden;

  &:after {
    background-color: rgba(250, 250, 250, 0.9);
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
}

.background-image img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.35s ease-in-out;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.4;
  z-index: -1;
}
</style>
