<template>
  <!-- <div class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content"> -->
    <div>
        <form action="" @submit.prevent="updateEvent(event)">
          <div class="mb-6 p-4 bg-white rounded border border-grey-light mt-4">
            <div class="mb-6">
              <label for="event_name" class="label">Event Name</label>
              <input
                id="event_name"
                class="input"
                autofocus
                autocomplete="off"
                placeholder="Type a Event name"
                v-model="event.event_name"
              />
            </div>

            <div class="mb-6">
              <label for="event_group" class="label">Associated Event Group</label>
              <input
                id="event_group"
                class="input"
                autofocus
                autocomplete="off"
                placeholder="Event Group"
                v-model="event.event_group"
              />
            </div>

            <div class="mb-6">
              <label for="event_start_date" class="label"
                >Event Start Date</label
              >
              <input
                id="event_start_date"
                class="input"
                autofocus
                autocomplete="off"
                placeholder="Event Start Date"
                v-model="event.event_start_date"
              />
            </div>

            <div class="mb-6">
              <label for="event_end_date" class="label"
                >Event End Date</label
              >
              <input
                id="event_end_date"
                class="input"
                autofocus
                autocomplete="off"
                placeholder="Event End Date"
                v-model="event.event_end_date"
              />
            </div>

            <div class="mb-6">
              <label for="event_url" class="label">Event URL</label>
              <input
                id="event_url"
                class="input"
                autofocus
                autocomplete="off"
                placeholder="Event URL"
                v-model="event.event_url"
              />
            </div>

            <input
              type="submit"
              value="Update"
              class="bg-transparent text-sm hover:bg-blue hover:text-white text-blue border border-blue no-underline font-bold py-2 px-4 mr-2 rounded"
            />
          </div>
        </form>
        </div>
      <!-- </div>
    </div>
  </div> -->
</template>

<script>
export default {
  name: "AdminActingCredit",
  props: ['event'],
  data() {
    return {
      error: "",
      singleEventCurrentlyBeingEdited: "",
    };
  },
  mounted() {
  },
  
  methods: {
    updateEvent(event) {
      this.singleEventCurrentlyBeingEdited = "";
      this.$http.secured
        .patch(`/events/${event.id}`, {
          event_name: event.event_name,
          event_group: event.event_group,
          event_start_date: event.event_start_date,
          event_end_date: event.event_end_date,
          event_url: event.event_url
        })
        .catch((error) => this.setError(error, "Cannot update record"));
    },
  },
};
</script>