<template>
  <Modal :modal_id="modal_id">
    <h2 class="h4">
      Are you sure you want to delete the acting credit for
      {{ acting_credit.show_title }}?
    </h2>
    <div class="mt-3">
      <button
        type="button"
        class="bg-transparent text-sm hover:bg-blue hover:text-white text-blue border border-blue no-underline font-bold py-2 px-4 mr-2 rounded"
        @click.prevent="removeRecord(acting_credit)"
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
  props: ["acting_credit", "modal_id"],
  components: {
    Modal
  },
  data() {
    return {
      error: "",
      stagedForDeletion: ""
    };
  },
  mounted() {},

  methods: {
    removeRecord(record) {
      this.stagedForDeletion = "";
      this.$http.secured
        .delete(`${this.$properApiURL}/api/v1/acting-credits/${record._id}`)
        .then(response => {
          this.$store.commit("remove_acting_credit", record);
        });
      jQuery("#" + this.$props.modal_id).modal("hide");
    }
  }
};
</script>
