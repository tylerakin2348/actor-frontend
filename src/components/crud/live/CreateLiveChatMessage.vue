<template>
  <form action="" @submit.prevent="addNewChat()">
    <div class="mb-6 p-4 bg-white mt-1 create-live-chat-message">
      <div class="create-live-chat-message-inner">
        {{ error }}

        <div class="d-flex flex-column mb-6">
          <label for="event_name" class="label">New Message</label>
          <input
            id="event_name"
            class="input"
            autofocus
            autocomplete="off"
            placeholder="Type a message"
            v-model="message"
          />
        </div>
        <br />
        <input type="submit" value="Create" class="btn btn-outline-secondary mr-2" />
        <button type="button" class="btn btn-outline-secondary" @click="destroyChat()">
          End Live Chat
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "CreateLiveChat",
  props: ["available_chat_messages"],
  data() {
    return {
      liveChats: [],
      message: "",
      error: ""
    };
  },
  mounted() {},

  methods: {
    addNewChat() {
      const value = this.message;
      if (!value) {
        return;
      }

      this.$http.secured
        .post(`${this.$availableEndpoints.live_chat}`, {
          message: this.message,
          message_author: this.$store.getters.currentUser
        })

        .then(response => {
          this.liveChats.push(response.data);
          this.message = "";
          this.$emit("check-messages");
          this.$store.commit("updateChatStatus", true);
        });
    },

    destroyChat() {
      // super inefficent way to handle this MVP. I want to develop a fully-fledged chat
      // feature that can store previous messages from previous days or threads.
      // Or at very least, let rails run a cron job at the end of every day to clean
      // up messages. Keep having issues there, so the temp solution is to run a
      // loop to delete each available message one at a time.
      let messages = this.$props.available_chat_messages;

      messages.forEach(message => {
        this.stagedForDeletion = "";
        this.$http.secured
          .delete(`${this.$availableEndpoints.live_chat}/${message._id}`)
          .then(response => {
            this.$emit("check-messages");
          });
      });

      setTimeout(() => {
        if (messages.length === 0) {
          this.$router.replace("/admin/live");
          this.$store.commit("updateChatStatus", false);
        }
      }, 3000);
    }
  }
};
</script>
<style lang="scss" scoped>
.create-live-chat-message {
  border: 1px solid lightgrey;
  border-bottom-left-radius: 1em;
  border-bottom-right-radius: 1em;
  box-shadow: 0 0 3px 1px lightgrey;
  padding: 0 1rem;
}
.create-live-chat-message-inner {
  width: 26rem;
}
</style>
