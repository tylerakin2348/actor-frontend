<template>
  <Modal :modal_id="modal_id">
    <form action="" @submit.prevent="updateTheEvent(event_from_props)">
      <div class="mb-6 credit-row">
        <label for="event_name" class="label credit-row-title"
          >Event Name</label
        >

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
        <label for="event_group" class="label credit-row-title"
          >Associated Event Group</label
        >
        <input
          id="event_group"
          class="input"
          autofocus
          autocomplete="off"
          placeholder="Event Group"
          v-model="event_from_props.event_group"
        />
      </div>

      <div class="mb-6 credit-row">
        <label for="event_start_date" class="label credit-row-title"
          >Event Start Date</label
        >
        <input
          id="event_start_date"
          class="input"
          autofocus
          autocomplete="off"
          placeholder="Event Start Date"
          v-model="event_from_props.event_start_date"
        />
      </div>

      <div class="mb-6 credit-row">
        <label for="event_end_date" class="label credit-row-title"
          >Event End Date</label
        >
        <input
          id="event_end_date"
          class="input"
          autofocus
          autocomplete="off"
          placeholder="Event End Date"
          v-model="event_from_props.event_end_date"
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
import jQuery from "jquery";
import FormInput from "@/components/common/form-components/FormInput.vue";
import Modal from "@/components/Modal.vue";

window.jQuery = jQuery;
export default {
  name: "UpdateEvent",
  props: ["event_from_props", "modal_id"],
  components: {
    FormInput,
    Modal,
  },
  data() {
    return {
      error: "",
    };
  },
  mounted() {},

  methods: {
    updateTheEvent(event) {
      this.$http.secured
        .patch(`/events/${event.id}`, {
          event_name: event.event_name,
          event_group: event.event_group,
          event_start_date: event.event_start_date,
          event_end_date: event.event_end_date,
          event_url: event.event_url,
        })
        .catch((error) => this.setError(error, "Cannot update record"));
      jQuery("#" + this.$props.modal_id).modal("hide");
    },
  },
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