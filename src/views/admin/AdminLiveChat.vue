<template>
  <div class="block-container d-flex flex-wrap align-items-end">
    <div class="block-container-row large-breakup-border col-12 col-md-5 p-0">
      <PageTitleBlock page_title="New Live Chat" classes="h1" />
      <GoBackNavigationList>
        <GoBackLinkListItem>
          <GoBackLink url="/admin/live" link_text="Back to Live" />
        </GoBackLinkListItem>
        <GoBackLinkListItem>
          <GoBackLink url="/admin" link_text="Back to Dashboard" />
        </GoBackLinkListItem>
        <GoBackLinkListItem>
          <GoBackLink url="/" link_text="Back to Home" />
        </GoBackLinkListItem>
      </GoBackNavigationList>
    </div>

    <div
      class="overflow-scroll-container block-container-row col-12 col-md-7 pt-4"
    >
      <div>
        <div class="live-chat-container">
          <div class="live-chat-container-inner">
            <LiveChatMessage
              v-for="live_chat in live_chats"
              :key="live_chat.id"
              :live_chat="live_chat"
              :liveChatCurrentlyBeingEdited="liveChatCurrentlyBeingEdited"
              :can_edit="true"
            />
          </div>
        </div>
        <CreateLiveChatMessage
          v-on:check-messages="checkForNewMessage"
          :available_chat_messages="live_chats"
        />
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import PageTitleBlock from "@/components/common/PageTitleBlock.vue";
import CreateLiveChatMessage from "@/components/crud/live/CreateLiveChatMessage.vue";
import LiveChatMessage from "@/components/crud/live/LiveChatMessage.vue";
import GoBackLink from "@/components/common/go-back/GoBackLink.vue";
import GoBackLinkListItem from "@/components/common/go-back/GoBackLinkListItem.vue";
import GoBackNavigationList from "@/components/common/go-back/GoBackNavigationList.vue";

export default {
  name: "AdminLive",
  components: {
    PageTitleBlock,
    CreateLiveChatMessage,
    LiveChatMessage,
    GoBackLink,
    GoBackLinkListItem,
    GoBackNavigationList,
  },

  data() {
    return {
      live_chats: [],
      newRecord: [],
      error: "",
      liveChatCurrentlyBeingEdited: null,
      addNewActingCredit: false,
    };
  },
  created() {
    if (!localStorage.signedIn) {
      this.$router.replace("/");
    } else {
      this.checkForNewMessage();
    }
  },
  methods: {
    scrollToNewMessage: function () {
      let theCurrentElement = this.$el.querySelector(".live-chat-container");
      theCurrentElement.scrollTop = theCurrentElement.scrollHeight;
    },
    checkForNewMessage: function () {
      this.$http.secured
        .get("/live_chat")
        .then((response) => {
          this.live_chats = response.data;

          setTimeout(() => {
            this.scrollToNewMessage();
          }, 100);
        })
        .catch((error) => this.setError(error, "Something went wrong"));
    },
  },
};
</script>

<style lang="scss" scoped>
.live-chat-container {
  border: 1px solid lightgrey;
  border-top-left-radius: 1em;
  border-top-right-radius: 1em;
  box-shadow: 0 0 3px 1px lightgrey;
  padding: 0 1rem;
}
.live-chat-container-inner {
  height: 19rem;
  width: 26rem;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  padding-top: 1em;
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
