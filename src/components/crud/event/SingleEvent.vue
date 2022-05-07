<template>
  <div id="contacts" class="single_event_item">
    <div class="flex items-center justify-between flex-wrap">
      <div class="single-acting-credit-wrapper flex-1 flex justify-between flex-wrap">
        <article class="block font-mono font-semibold flex items-center">
          <h1 class="mb-0">{{ event.event_name }}</h1>
          <div v-if="event.event_date" class="credit-row mb-2">
            {{ formattedDate(event.event_date) }}
          </div>
          <div v-if="event.start_date">
            <div class="credit-row mb-2">
              {{ formattedDate(event.start_date) }} - {{ formattedDate(event.end_date) }}
            </div>
          </div>

          <div v-if="event.description" class="credit-row mb-3">
            {{ event.description }}
          </div>
          <div v-if="event.event_company" class="credit-row mb-3">
            <b class="credit-row-title">Company</b>
            {{ event.event_company }}
          </div>
          <div v-if="event.event_url" class="credit-row">
            <a :href="event.event_url" class="event-link" target="_blank"
              >Get More Information <span class="sr-only">about this event</span></a
            >
          </div>
        </article>
      </div>
      <div v-if="can_edit" class="single-event-crud-options">
        <button
          class="bg-transparent text-sm hover:bg-blue hover:text-white text-blue border border-blue no-underline font-bold py-2 px-2 mr-2 rounded"
          @click.prevent="editEvent(event)"
          data-toggle="modal"
          data-target="#update-event-modal"
        >
          Edit
        </button>
        <button
          class="bg-transparent text-sm hover:bg-red text-red hover:text-white no-underline font-bold py-2 px-2 rounded border border-red"
          @click.prevent="removeEvent(event)"
          data-toggle="modal"
          data-target="#remove-event-modal"
        >
          Delete
        </button>
      </div>
    </div>
    <div v-if="eventCurrentlyBeingEdited">
      <UpdateEvent :event_from_props="eventCurrentlyBeingEdited" modal_id="update-event-modal" />
    </div>

    <div v-if="stagedForDeletion">
      <RemoveEvent :event="stagedForDeletion" modal_id="remove-event-modal" />
    </div>
  </div>
</template>

<script>
import moment from "moment";
import UpdateEvent from "@/components/crud/event/UpdateEvent.vue";
import RemoveEvent from "@/components/crud/event/RemoveEvent.vue";

export default {
  name: "SingleEvent",
  props: {
    event: Object,
    eventCurrentlyBeingEdited: {
      default: null,
      type: Object
    },
    stagedForDeletion: Object,
    can_edit: {
      default: true,
      type: Boolean
    }
  },
  components: {
    UpdateEvent,
    RemoveEvent
  },
  data() {
    return {
      canEdit: false
    };
  },
  mounted() {},
  methods: {
    formattedDate(theDateToFormat) {
      return `${moment(theDateToFormat)
        .utc()
        .format("M/D")}`;
    },
    setError(error, text) {
      this.error = (error.response && error.response.data && error.response.data.error) || text;
    },

    removeEvent(event) {
      this.$emit("stage-event-for-deletion", event);
    },
    editEvent(event) {
      this.$emit("set-event-being-edited", event);
    }
  }
};
</script>

<style lang="scss" scoped>
.event-link {
  color: #1972d2;
  text-decoration: underline;

  &:focus,
  &:hover {
    text-decoration: none;
  }
}
.credit-row {
  display: flex;
  flex-direction: column;
}
.single_event_item {
  list-style: none;
  padding: 1em 0;

  &:last-of-type {
    border-bottom: 0;
  }
}

.single-event-crud-options {
  width: 15em;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 769px) {
    align-items: flex-start;
    justify-content: flex-start;
  }
}

.single-acting-credit-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
article {
  margin-bottom: 1rem;
  max-width: 15em;
  text-align: center;
  width: 100%;
  @media screen and (min-width: 769px) {
    text-align: left;
  }
}

.credit-row-title {
  color: gray;
  font-size: 0.85em;
  text-transform: uppercase;
  margin-top: 0.5em;
}
</style>
