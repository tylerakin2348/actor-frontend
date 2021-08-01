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
        <input
          type="submit"
          value="Create"
          class="bg-transparent text-sm hover:bg-blue hover:text-white text-blue border border-blue no-underline font-bold py-2 px-4 mr-2 rounded"
        />
        <button
          class="bg-transparent text-sm hover:bg-blue hover:text-white text-blue border border-blue no-underline font-bold py-2 px-4 mr-2 rounded"
          @click="destroyChat()"
        >
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
      error: "",
    };
  },
  mounted() {},

  methods: {
    setError(error, text) {
      this.error =
        (error.response && error.response.data && error.response.data.error) ||
        text;
    },
    addNewChat() {
      const value = this.message;
      if (!value) {
        return;
      }

      this.$http.secured
        .post(`${this.$availableEndpoints.live_chat}`, {
          message: this.message,
          message_author: 'Tyler Akin'
        })

        .then((response) => {
          this.liveChats.push(response.data);
          this.message = "";
          this.$emit("check-messages");
        })
        .catch((error) => this.setError(error, "Cannot create chat"));
    },

    destroyChat() {
      // super inefficent way to handle this MVP. I want to develop a fully-fledged chat
      // feature that can store previous messages from previous days or threads.
      // Or at very least, let rails run a cron job at the end of every day to clean
      // up messages. Keep having issues there, so the temp solution is to run a
      // loop to delete each available message one at a time.
      let messages = this.$props.available_chat_messages;

      if (! messages.length > 0) {
        this.$router.replace('/admin/live');
      }

      messages.forEach((message) => {
        this.stagedForDeletion = "";
        this.$http.secured
          .delete(`${this.$availableEndpoints.live_chat}/${message._id}`)
          .then((response) => {
            this.$router.replace('/admin/live');
            this.$emit("check-messages");
          })
          .catch((error) => this.setError(error, "Cannot delete record"));
      });
    },
  },
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