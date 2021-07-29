<template>
  <Modal :modal_id="modal_id">
    <form action="" @submit.prevent="updateTheRecord(record_to_update)">
      <div class="mb-6 credit-row">
        <label for="show_title" class="label credit-row-title"
          >Show Title</label
        >
        <input
          id="show_title"
          class="input"
          autofocus
          autocomplete="off"
          placeholder="Type a record name"
          v-model="record_to_update.show_title"
        />
      </div>

      <div class="mb-6 credit-row">
        <label for="show_role" class="label credit-row-title">Show Role</label>
        <input
          id="show_role"
          class="input"
          autofocus
          autocomplete="off"
          placeholder="Year"
          v-model="record_to_update.show_role"
        />
      </div>

      <div class="mb-6 credit-row">
        <label for="show_director_name" class="label credit-row-title"
          >Director Name</label
        >
        <input
          id="show_director_name"
          class="input"
          autofocus
          autocomplete="off"
          placeholder="Year"
          v-model="record_to_update.show_director_name"
        />
      </div>

      <div class="mb-6 credit-row">
        <label for="show_company_name" class="label credit-row-title"
          >Company Name</label
        >
        <input
          id="show_company_name"
          class="input"
          autofocus
          autocomplete="off"
          placeholder="Year"
          v-model="record_to_update.show_company_name"
        />
      </div>

      <input
        type="submit"
        value="Update"
        class="bg-transparent text-sm hover:bg-blue hover:text-white text-blue border border-blue no-underline font-bold py-2 px-4 mr-2 rounded"
      />
      <button
        data-dismiss="modal"
        class="bg-transparent text-sm hover:bg-blue hover:text-white text-blue border border-blue no-underline font-bold py-2 px-4 mr-2 rounded"
      >
        Cancel
      </button>
    </form>
  </Modal>
</template>

<script>
import jQuery from "jquery";
import Modal from "@/components/Modal.vue";
window.jQuery = jQuery;

export default {
  name: "AdminActingCredit",
  props: ["record_to_update", "modal_id"],
  components: {
    Modal,
  },
  data() {
    return {
      error: "",
    };
  },
  mounted() {},

  methods: {
    updateTheRecord(record) {
      this.$http.secured
        .put(`${this.$properApiURL}/api/v1/acting-credits/${record._id}`, {
          show_title: this.record_to_update.show_title,
          show_role: this.record_to_update.show_role,
          show_director_name: this.record_to_update.show_director_name,
          show_company_name: this.record_to_update.show_company_name,
        })
        .catch((error) => console.log(error));
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