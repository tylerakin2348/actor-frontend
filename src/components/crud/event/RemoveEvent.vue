<template>
  <Modal :modal_id="modal_id">
    Are you sure you want to delete the event record for
    {{ event.event_name }}?
    <div class="mt-2">
      <button
        type="button"
        class="bg-transparent text-sm hover:bg-blue hover:text-white text-blue border border-blue no-underline font-bold py-2 px-4 mr-2 rounded"
        @click.prevent="removeRecord(event)"
      >
        Delete
      </button>
      <button
        data-dismiss="modal"
        class="bg-transparent text-sm hover:bg-blue hover:text-white text-blue border border-blue no-underline font-bold py-2 px-4 mr-2 rounded"
      >
        Cancel
      </button>
    </div>
  </Modal>
</template>

<script>
import jQuery from "jquery";
import Modal from "@/components/Modal.vue";

window.jQuery = jQuery;

export default {
  name: "RemoveEvent",
  props: ["event", "modal_id"],
  components: {
    Modal,
  },
  data() {
    return {
      error: "",
      stagedForDeletion: "",
    };
  },
  mounted() {},

  methods: {
    removeRecord(record) {
      this.stagedForDeletion = "";
      this.$http.secured
        .delete(`/events/${record.id}`)
        .then((response) => {
          this.events.splice(this.events.indexOf(record), 1);
        })
        .catch((error) => this.setError(error, "Cannot delete record"));
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