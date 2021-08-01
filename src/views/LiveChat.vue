<template>
  <div class="block-container d-flex flex-wrap align-items-end livechat-wrapper">
    <img :src="require(`@/assets/next-to-normal/next_to_normal18.jpg`)" />
    <div class="block-container-row large-breakup-border col-12 col-md-5 p-0">
      <PageTitleBlock page_title="Live Chat" classes="h1" />
      <GoBackNavigationList>
        <GoBackLinkListItem>
          <GoBackLink url="/" link_text="Back to Home" />
        </GoBackLinkListItem>
      </GoBackNavigationList>
    </div>

    <div
      class="overflow-scroll-container block-container-row col-12 col-md-7 justify-content-start"
    >
      <div v-if="chat_is_active">
        <LiveChatMessage
          v-for="live_chat in live_chats"
          :key="live_chat.id"
          :live_chat="live_chat"
        />
      </div>
      <div v-else>I'm not live right now. Come back soon!</div>
    </div>
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

export default {
  name: "LiveChat",
  components: {
    LiveChatMessage,
    GoBackLink,
    GoBackLinkListItem,
    GoBackNavigationList,
    PageTitleBlock
  },
  data() {
    return {
      is_logged_in: false,
      chat_is_active: false,
      live_chats: []
    };
  },
  mounted() {
    if (localStorage.signedIn) {
      this.is_logged_in = true;
    }

    // this.checkForNewMessage();

    let setUpLiveChatScripts = new IntervalLifecycle(this.checkForNewMessage);

    setUpLiveChatScripts.setUpNewMessageListener();
  },
  unmounted() {
    setUpLiveChatScripts.tearDownNewMessageListener();
  },

  methods: {
    scrollToNewMessage: function() {
      let theCurrentElement = this.$el.querySelector(".live-chat-container");

      if (!theCurrentElement) {
        return;
      }

      theCurrentElement.scrollTop = theCurrentElement.scrollHeight;
    },

    checkForActiveChat: function(response) {
      if (response.data.length > 0) {
        this.live_chats = response.data;
        this.chat_is_active = true;
      } else {
        this.chat_is_active = false;
      }
    },

    checkForNewMessage: function() {
      this.$http.secured
        .get(`${this.$availableEndpoints.live_chat}`)
        .then(response => {
          this.checkForActiveChat(response);
          this.live_chats = response.data;
          setTimeout(() => {
            this.scrollToNewMessage();
          }, 100);
        })
        .catch(error => this.setError(error, "Something went wrong"));
    }
  }
};
</script>

<style lang="scss" scoped>
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
  // overflow-y: hidden;

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
.livechat-wrapper {
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

.livechat-wrapper img {
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
