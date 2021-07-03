<template>
  <form action="" @submit.prevent="addRecord()">
    <div class="mb-6 p-4 bg-white rounded border border-grey-light mt-4">
      {{ error }}

      <div class="mb-6 credit-row">
        <label for="event_name" class="label credit-row-title">Event Name</label>
        <input
          id="event_name"
          class="input"
          autofocus
          autocomplete="off"
          placeholder="Type a Event name"
          v-model="newEvent.event_name"
        />
      </div>

      <div class="mb-6 credit-row">
        <label for="event_group" class="label credit-row-title">Associated Event Group</label>
        <input
          id="event_group"
          class="input"
          autofocus
          autocomplete="off"
          placeholder="Event Group"
          v-model="newEvent.event_company"
        />
      </div>

      <div class="mb-6 credit-row">
        <label for="event_start_date" class="label credit-row-title">Event Start Date</label>
        <!-- <input
          id="event_start_date"
          class="input"
          autofocus
          autocomplete="off"
          placeholder="Event Start Date"
          v-model="newEvent.event_start_date"
        /> -->
      </div>

      <div class="mb-6 credit-row">
        <label for="event_end_date" class="label credit-row-title">Event End Date</label>
        <!-- <input
          id="event_end_date"
          class="input"
          autofocus
          autocomplete="off"
          placeholder="Event End Date"
          v-model="newEvent.event_end_date"
        /> -->
      </div>

      <div class="mb-6 credit-row">
        <label for="event_url" class="label credit-row-title">Event URL</label>
        <input
          id="event_url"
          class="input"
          autofocus
          autocomplete="off"
          placeholder="Event URL"
          v-model="newEvent.event_url"
        />
      </div>

      <input
        type="submit"
        value="Create"
        class="bg-transparent text-sm hover:bg-blue hover:text-white text-blue border border-blue no-underline font-bold py-2 px-4 mr-2 rounded"
      />
    </div>
  </form>
</template>

<script>
export default {
  name: "CreateEvent",
  props: ["event"],
  data() {
    return {
      artists: [],
      events: [],
      newEvent: [],
      error: "",
      singleEventCurrentlyBeingEdited: ""
    };
  },
  mounted() {},

  methods: {
    setError(error, text) {
      this.error = (error.response && error.response.data && error.response.data.error) || text;
    },
    addRecord() {
      const value = this.newEvent;
      if (!value) {
        return;
      }
      this.$http.secured
        .post("/api/v1/events/", {
          event_name: this.newEvent.event_name,
          event_company: this.newEvent.event_company,
          // event_start_date: this.newEvent.event_start_date,
          // event_end_date: this.newEvent.event_end_date,
          event_url: this.newEvent.event_url
        })

        .then(response => {
          this.events.push(response.data);
          this.newEvent = "";
        })
        .catch(error => this.setError(error, "Cannot create event record"));
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  width: 100%;
  max-width: 30em;
}
.credit-row {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}
.credit-row-title {
  color: gray;
  font-size: 0.85em;
  text-transform: uppercase;
  margin-bottom: 0;
  margin-top: 0.5em;
  text-align: left;
}
</style>
