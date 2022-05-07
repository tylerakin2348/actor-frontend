<template>
  <Modal :modal_id="modal_id">
    <form action="" @submit.prevent="updateTheEvent(event_from_props)">
      <div class="mb-6 credit-row">
        <label for="event_name" class="label credit-row-title">Event Name</label>

        <input
          id="event_name"
          class="input"
          autofocus
          autocomplete="off"
          placeholder="Type a Event name"
          v-model="event_from_props.event_name"
        />
      </div>

      <div class="mb-6 credit-row">
        <label for="event_date" class="label credit-row-title">Event Date</label>

        <input
          id="event_date"
          class="input"
          autofocus
          autocomplete="off"
          placeholder="Type a Event date"
          v-model="event_from_props.event_date"
        />
      </div>

      <div class="mb-6 credit-row">
        <label for="event_start_date" class="label credit-row-title">Event Start Date</label>

        <input
          id="event_start_date"
          class="input"
          autofocus
          autocomplete="off"
          placeholder="Type a event start date"
          v-model="event_from_props.start_date"
        />
      </div>

      <div class="mb-6 credit-row">
        <label for="event_end_date" class="label credit-row-title">Event End Date</label>

        <input
          id="event_end_date"
          class="input"
          autofocus
          autocomplete="off"
          placeholder="Type a event end date"
          v-model="event_from_props.end_date"
        />
      </div>

      <div class="mb-6 credit-row">
        <label for="event_description" class="label credit-row-title">Event Description</label>

        <textarea
          id="event_description"
          class="input"
          autofocus
          autocomplete="off"
          placeholder="Type a description"
          v-model="event_from_props.description"
        >
        </textarea>
      </div>

      <div class="mb-6 credit-row">
        <label for="event_company" class="label credit-row-title">Event Company</label>
        <input
          id="event_company"
          class="input"
          autofocus
          autocomplete="off"
          placeholder="Event company"
          v-model="event_from_props.event_company"
        />
      </div>

      <div class="mb-6 credit-row">
        <label for="event_role" class="label credit-row-title">Role</label>
        <input
          id="event_role"
          class="input"
          autofocus
          autocomplete="off"
          placeholder="Role"
          v-model="event_from_props.role"
        />
      </div>

      <div class="mb-6 credit-row">
        <label for="event_url" class="label credit-row-title">Event URL</label>
        <input
          id="event_url"
          class="input"
          autofocus
          autocomplete="off"
          placeholder="Event URL"
          v-model="event_from_props.event_url"
        />
      </div>

      <input
        type="submit"
        value="Update"
        class="bg-transparent text-sm hover:bg-blue hover:text-white text-blue border border-blue no-underline font-bold py-2 px-4 mr-2 rounded"
      />
    </form>
  </Modal>
</template>

<script>
import moment from "moment";

import jQuery from "jquery";
import FormInput from "@/components/common/form-components/FormInput.vue";
import Modal from "@/components/Modal.vue";

window.jQuery = jQuery;
export default {
  name: "UpdateEvent",
  props: ["event_from_props", "modal_id"],
  components: {
    FormInput,
    Modal
  },
  data() {
    return {
      error: ""
    };
  },
  mounted() {},

  methods: {
    updateTheEvent(event) {
      this.$http.secured
        .put(`${this.$availableEndpoints.events}/${event._id}`, {
          event_name: event.event_name,
          event_company: event.event_company,
          event_date: event.event_date,
          start_date: event.start_date,
          end_date: event.end_date,
          description: event.description,
          role: event.role,
          event_url: event.event_url
        })
        .catch(error => this.setError(error, "Cannot update record"));
      jQuery("#" + this.$props.modal_id).modal("hide");
    },
    formattedDate(theDateToFormat) {
      return `${moment(theDateToFormat)
        .utc()
        .format("M/D")}`;
    }
  }
};
</script>
<style lang="scss" scoped>
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
