<template>
  <div id="contacts" class="single_event_item">
    <div class="flex items-center justify-between flex-wrap">
      <div
        class="single-acting-credit-wrapper flex-1 flex justify-between flex-wrap"
      >
        <article class="block font-mono font-semibold flex items-center">
          <!-- <b>{{ live_chat.message }}</b> -->
          <div class="credit-row">
            {{ live_chat.message }}

            <small class="font-weight-bold">{{ this.prettiedTime }}</small>
          </div>
        </article>
      </div>
      <div v-if="!can_edit">
        <button
          class="bg-transparent text-sm hover:bg-blue hover:text-white text-blue border border-blue no-underline font-bold py-2 px-4 mr-2 rounded"
          @click.prevent="editEvent(live_chat.message)"
        >
          Edit
        </button>
        <button
          class="bg-transparent text-sm hover:bg-red text-red hover:text-white no-underline font-bold py-2 px-4 rounded border border-red"
          @click.prevent="removeEvent(live_chat.message)"
        >
          Delete
        </button>
      </div>
    </div>
    <!-- <div v-if="live_chat.message == liveChatCurrentlyBeingEdited">
      <UpdateLiveChatMessage :message="live_chat.message" />
    </div> -->
  </div>
</template>

<script>
import UpdateLiveChatMessage from "@/components/crud/live/UpdateLiveChatMessage.vue";

export default {
  props: {
    live_chat: Object,
    liveChatCurrentlyBeingEdited: String,
    can_edit: {
      default: true,
      type: Boolean,
    },
  },
  components: {
    UpdateLiveChatMessage,
  },
  data() {
    return {
      canEdit: false,
      newChat: [],
      prettiedTime: null,
    };
  },
  mounted() {
    if (localStorage.signedIn) {
      this.canEdit = true;
    }
    this.setPrettiedTime();
  },
  methods: {
    setPrettiedTime() {
      let theTimeFromProp = new Date(this.$props.live_chat.created_at);
      theTimeFromProp = theTimeFromProp.toLocaleTimeString();

      this.prettiedTime = theTimeFromProp;
    },
    setError(error, text) {
      this.error =
        (error.response && error.response.data && error.response.data.error) ||
        text;
    },

    removeEvent(event) {
      this.$http.secured
        .delete(`/live_chat/${event.id}`)
        .then((response) => {
          this.events.splice(this.events.indexOf(event), 1);
        })
        .catch((error) => this.setError(error, "Cannot delete record"));
    },
    editEvent(event) {
      this.liveChatCurrentlyBeingEdited = event;
    },
  },
};
</script>

<style lang="scss" scoped>
.credit-row {
  display: flex;
  flex-direction: column;
}
.single_event_item {
  // border-bottom: 1px solid gray;
  list-style: none;
  // padding: 1em 0;

  &:last-of-type {
    border-bottom: 0;
  }
}

.single-acting-credit-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
article {
  width: 15em;
  margin-bottom: 1rem;
  text-align: left;
}

.credit-row-title {
  color: gray;
  font-size: 0.85em;
  text-transform: uppercase;
  margin-top: 0.5em;
}
</style>
